import { TranscodeOptions } from '@contracts';
import { ProgressManager } from '@core/progress';
import { execFile, spawn } from 'child_process';
import ffmpegPath from 'ffmpeg-static';
import { accessSync, constants, promises as fs } from 'fs';
import path from 'path';
import { Readable, Writable } from 'stream';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

/**
 * Media finalization wrapper around ffmpeg.
 *
 * @remarks
 * FFmpeg support lives in storage because container repair and transcoding are
 * output concerns. Downloaders write bytes first, then this engine remuxes or
 * transcodes formats such as HLS `.ts`/fMP4 into a playable final file.
 */
export class FFmpegEngine {
	constructor(private readonly progressManager: ProgressManager) {}

	public get ffmpeg(): string {
		return ffmpegPath && this.pathExists(ffmpegPath) ? ffmpegPath : 'ffmpeg';
	}

	/**
	 * Opens a streaming remux: bytes in one side, playable media out the other.
	 *
	 * @param options Codec/transcode settings.
	 * @returns The ffmpeg stdin to write to, its stdout to read from, and a promise
	 * that settles when the process exits.
	 *
	 * @remarks
	 * Output is **fragmented** MP4. A regular MP4 stores its `moov` index at a
	 * known offset and therefore needs a seekable destination, which a pipe is not;
	 * `frag_keyframe+empty_moov+default_base_moof` writes self-describing fragments
	 * instead. That is the same container HLS and DASH deliver, so browsers and
	 * modern players handle it, but it is not byte-identical to the `+faststart`
	 * file the device sink produces.
	 *
	 * The caller must consume `output` while writing to `input`; ffmpeg blocks once
	 * its stdout pipe fills, which would otherwise deadlock the transfer.
	 */
	public createRemuxStream(options: TranscodeOptions = {}): { input: Writable; output: Readable; done: Promise<void> } {
		const { videoCodec, audioCodec, ffmpegArgs = [] } = options;

		const codecArgs = [
			'-c:v',
			videoCodec ?? 'copy',
			'-c:a',
			audioCodec ?? 'copy',
			'-movflags',
			'frag_keyframe+empty_moov+default_base_moof'
		];

		const args = ffmpegArgs.length ? ffmpegArgs : ['-loglevel', 'error', '-i', 'pipe:0', ...codecArgs, '-f', 'mp4', 'pipe:1'];

		this.progressManager.update({ message: `Streaming remux via ${this.resolveFfmpeg(options)}` });

		const child = spawn(this.resolveFfmpeg(options), args, { stdio: ['pipe', 'pipe', 'pipe'] });

		let stderr = '';

		child.stderr.on('data', (chunk: Buffer) => {
			// keep only the tail, ffmpeg can be chatty on malformed input
			stderr = `${stderr}${chunk.toString()}`.slice(-2000);
		});

		const done = new Promise<void>((resolve, reject) => {
			child.on('error', (error) =>
				reject(
					(error as NodeJS.ErrnoException).code === 'ENOENT'
						? new Error(
								'Failed to remux stream: ffmpeg executable was not found. Install ffmpeg, allow ffmpeg-static build scripts in your package manager, or pass transcodeOptions.ffmpegPath.',
								{ cause: error }
							)
						: error
				)
			);

			child.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`ffmpeg exited with code ${code}: ${stderr.trim()}`))));
		});

		// a failed remux must surface on the readable the caller is piping
		done.catch((error) => child.stdout.destroy(error instanceof Error ? error : new Error(String(error))));

		return { input: child.stdin, output: child.stdout, done };
	}

	/**
	 * Finalizes a downloaded media file with ffmpeg.
	 *
	 * @param options Input path and optional codec/transcode settings.
	 * @returns Final media path, filename, extension, and MIME type.
	 */
	public async finalizeMedia(options: TranscodeOptions) {
		if (!options.inputPath) throw new Error('Input path is required for finalizing media');

		const { inputPath, outputExtension = 'mp4', deleteInput = true, ffmpegArgs = [], videoCodec, audioCodec, crf, preset } = options;

		const dir = path.dirname(inputPath);

		const base = path.basename(inputPath, path.extname(inputPath));

		const outputFilename = `${base}_final.${outputExtension}`;

		const outputPath = path.join(dir, outputFilename);

		this.progressManager.update({
			message:
				`Finalizing media ${inputPath} with options ${JSON.stringify(options)} ` +
				`to ${outputPath} using ${this.resolveFfmpeg(options)}...`
		});

		let args: string[];

		// fully custom ffmpeg args
		if (ffmpegArgs.length) args = ffmpegArgs;
		else {
			const codecArgs: string[] = [];

			if (videoCodec) {
				codecArgs.push('-c:v', videoCodec);
				if (videoCodec === 'libx264') codecArgs.push('-pix_fmt', 'yuv420p', '-profile:v', 'high', '-level', '4.2');
			} else codecArgs.push('-c:v', 'copy');

			if (audioCodec) codecArgs.push('-c:a', audioCodec);
			else codecArgs.push('-c:a', 'copy');

			if (crf !== undefined && videoCodec && videoCodec !== 'copy') codecArgs.push('-crf', String(crf));
			if (preset && videoCodec && videoCodec !== 'copy') codecArgs.push('-preset', preset);

			args = ['-y', '-loglevel', 'error', '-i', inputPath, ...codecArgs, '-movflags', '+faststart', outputPath];
		}

		try {
			await execFileAsync(this.resolveFfmpeg(options), args);

			if (deleteInput) await fs.unlink(inputPath);

			return {
				path: outputPath,
				filename: outputFilename,
				extension: outputExtension,
				mimeType: `video/${outputExtension}`
			};
		} catch (error) {
			if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
				throw new Error(
					'Failed to finalize media: ffmpeg executable was not found. Install ffmpeg on your system, allow ffmpeg-static build scripts in your package manager, or pass transcodeOptions.ffmpegPath.',
					{ cause: error }
				);
			}

			throw new Error(`Failed to finalize media: ${(error as Error).message}`, { cause: error });
		}
	}

	private resolveFfmpeg(options?: TranscodeOptions): string {
		if (options?.ffmpegPath) return options.ffmpegPath;

		return this.ffmpeg;
	}

	private pathExists(filePath: string): boolean {
		try {
			accessSync(filePath, constants.X_OK);
			return true;
		} catch {
			return false;
		}
	}
}
