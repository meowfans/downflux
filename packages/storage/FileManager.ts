import { CreateSinkInput, CreateSinkOutput, ExecutionArgs, ExecutionResult, ResolvedFile, StreamSink, TranscodeOptions } from '@contracts';
import { InvalidDestinationException } from '@core/exceptions';
import { ProgressManager } from '@core/progress';
import { AllowedExtension, ExecutionShape, MIME_TYPE, OutputType, Provider } from '@types';
import { createWriteStream, promises as fs, mkdirSync, writeFileSync } from 'fs';
import { basename, dirname, extname, isAbsolute, relative, resolve } from 'path';
import { PassThrough, Writable } from 'stream';
import { FFmpegEngine } from './FFmpegEngine';
import { PathBuilder } from './PathBuilder';

/**
 * Storage service for JSON results, buffers, and files on disk.
 *
 * @remarks
 * Storage is isolated because output handling needs path safety, filename
 * normalization, resource type inference, stream sinks, JSON serialization, and
 * post-processing for media containers. Keeping this here prevents providers
 * and coordinators from duplicating filesystem rules.
 */
export class FileManager {
	private readonly pathBuilder = new PathBuilder();

	private readonly baseDir = 'DownFlux';

	constructor(
		private readonly ffmpegEngine: FFmpegEngine,
		private readonly progressManager: ProgressManager
	) {}

	/**
	 * Creates the output sink for a download.
	 *
	 * @param sinkInput Output mode, provider, identifier, and transcode options.
	 * @returns Writable stream and finalize callback for the selected output mode.
	 */
	public createSink(sinkInput: CreateSinkInput) {
		if (sinkInput.noDownload) return this.createNoDownloadSink(sinkInput);

		switch (sinkInput.type) {
			case OutputType.DEVICE:
				return this.createDeviceSink(sinkInput);

			default:
				throw new Error('Unsupported output type');
		}
	}

	private createNoDownloadSink(sinkInput: CreateSinkInput) {
		let bytes = 0;

		const stream = new Writable({
			write(chunk, _, cb) {
				bytes += chunk.length;
				cb();
			}
		});

		return {
			stream,
			cleanup: async (): Promise<void> => undefined,
			finalize: async (resolved: ResolvedFile, headers: Record<string, string>, isFmp4?: boolean): Promise<CreateSinkOutput> => ({
				path: sinkInput.identifier,
				originalFilename: resolved.originalFilename,
				extendedFilename: resolved.extendedFilename,
				extension: resolved.extension,
				mimeType: MIME_TYPE[resolved.extension] ?? headers['content-type']?.split(';')[0]?.trim() ?? 'application/octet-stream',
				sizeBytes: bytes,
				isFmp4
			})
		};
	}

	/**
	 * Opens a pass-through sink whose readable side is handed to the caller.
	 *
	 * @param sinkInput Output mode, provider, identifier, and transcode options.
	 * @param resolved Filename and extension resolved from the response.
	 * @param isFmp4 Whether the source was a fragmented-MP4 HLS playlist.
	 *
	 * @remarks
	 * Unlike the device and buffer sinks this returns before any bytes arrive, so
	 * the consumer can start forwarding immediately. Transport containers are piped
	 * through ffmpeg; anything already playable passes straight through, which
	 * keeps one code path for every media type.
	 */
	public createStreamSink(sinkInput: CreateSinkInput, resolved: ResolvedFile, isFmp4?: boolean): StreamSink {
		const baseName = resolved.originalFilename.replace(/\.[^.]+$/, '') || 'media';

		if (!this.needsRemux(resolved.extension, isFmp4)) {
			const passthrough = new PassThrough();

			return {
				input: passthrough,
				output: passthrough,
				done: Promise.resolve(),
				extension: resolved.extension,
				mimeType: MIME_TYPE[resolved.extension] ?? 'application/octet-stream',
				filename: resolved.originalFilename
			};
		}

		const { input, output, done } = this.ffmpegEngine.createRemuxStream(sinkInput.transCodeOptions);

		return {
			input,
			output,
			done,
			extension: 'mp4',
			mimeType: 'video/mp4',
			filename: `${baseName}.mp4`
		};
	}

	private createDeviceSink(sinkInput: CreateSinkInput) {
		const finalPath = this.getFilePath(
			sinkInput.provider,
			sinkInput.directoryPath ?? this.baseDir,
			sinkInput.filename,
			sinkInput.identifier
		);

		/**
		 * Bytes land in a sibling `.part` file and are renamed into place only once
		 * the transfer completes, so an interrupted download can never leave a
		 * truncated file sitting at the real filename looking complete.
		 */
		const tempPath = `${finalPath}.part`;

		const stream = createWriteStream(tempPath);

		return {
			stream,
			cleanup: async (): Promise<void> => {
				await fs.rm(tempPath, { force: true }).catch(() => undefined);
			},
			finalize: async (resolved: ResolvedFile, headers: Record<string, string>, isFmp4?: boolean): Promise<CreateSinkOutput> => {
				await fs.rename(tempPath, finalPath);

				const finalized = await this.finalizeStream(finalPath, sinkInput.transCodeOptions, isFmp4, {
					extension: resolved.extension,
					mimeType: MIME_TYPE[resolved.extension] ?? headers['content-type']?.split(';')[0]?.trim()
				});

				const stats = await fs.stat(finalized.path);

				return {
					path: finalized.path,
					originalFilename: finalized.filename,
					extendedFilename: finalized.filename,
					mimeType: finalized.mimeType,
					extension: finalized.extension,
					sizeBytes: stats.size,
					isFmp4
				};
			}
		};
	}

	/**
	 * Whether downloaded bytes still need remuxing into a playable container.
	 *
	 * @param extension Extension the bytes arrived as.
	 * @param isFmp4 Whether the source was a fragmented-MP4 HLS playlist.
	 *
	 * @remarks
	 * Two cases only: an MPEG-TS stitch, and fragmented MP4. fMP4 segments carry a
	 * `.m4s` extension at the source but `deriveResolvedFile` resolves them to
	 * `mp4`, so they are identified by the `isFmp4` flag rather than by extension.
	 *
	 * Shared by every output mode so device and buffer output agree on what counts
	 * as finished; the buffer sink previously applied no such test at all.
	 */
	public needsRemux(extension?: string, isFmp4?: boolean): boolean {
		return Boolean(isFmp4) || (extension ?? '').toLowerCase() === 'ts';
	}

	/**
	 * Finalizes a file after streaming completes.
	 *
	 * @param finalPath Path of the streamed file.
	 * @param tOptions Optional ffmpeg transcode options.
	 * @param isFmp4 Whether the stream came from an fMP4 HLS playlist.
	 * @param opts Resolved extension and MIME type hints.
	 * @returns Final path, filename, extension, and MIME type.
	 */
	public async finalizeStream(
		finalPath: string,
		tOptions?: TranscodeOptions,
		isFmp4?: boolean,
		opts?: { extension?: string; mimeType?: string }
	) {
		const extension = opts?.extension ?? extname(finalPath).substring(1).toLowerCase();
		const mimeType = opts?.mimeType ?? MIME_TYPE[extension] ?? 'video/mp2t';

		if (this.needsRemux(extension, isFmp4)) return this.ffmpegEngine.finalizeMedia({ ...tOptions, inputPath: finalPath });

		return {
			path: finalPath,
			filename: basename(finalPath),
			extension,
			mimeType
		};
	}

	/**
	 * Writes an execution result as JSON.
	 *
	 * @param result Execution result to serialize.
	 * @param directoryPath Destination directory.
	 * @returns Path to the written JSON file.
	 */
	public toJSON<T, S extends ExecutionShape>(result: ExecutionResult<T, S>, directoryPath: string = this.baseDir): string {
		const finalPath = this.getFilePath(result.provider, directoryPath, `${result.provider}_${Date.now()}.json`);

		writeFileSync(finalPath, JSON.stringify([result], this.replacer, 2));

		return finalPath;
	}

	private replacer(key: string, value: any) {
		// the completion handle is a live promise, meaningless once serialized
		if (key === 'completion') return undefined;
		if (Buffer.isBuffer(value)) return `[Buffer ${value.byteLength} bytes]`;
		if (value instanceof Error) {
			return { name: value.name, message: value.message, stack: value.stack };
		}
		return value;
	}

	/**
	 * Extracts filename and extension from URL.
	 * @param url - URL to extract filename and extension from
	 * @param prefix - Optional prefix to add to the filename
	 * @returns {{originalFilename: string, extension: string, extendedFilename: string}}
	 * path undefined => fud_timestamp
	 */

	public getFileInfo(url: string, prefix?: string): ResolvedFile {
		try {
			const parsed = new URL(url.startsWith('https://') ? url : `https://${url}`);

			const segments = parsed.pathname.split('/').filter(Boolean);

			const fileSegment = [...segments].reverse().find((seg) => /^[^/?#]+\.[a-z0-9]{2,10}$/i.test(seg));

			/**
			 * Sanitized here rather than at the call sites so every resolution path
			 * (direct media, HLS, and the final-URL fallback) gets the same treatment.
			 */
			const originalFilename = this.sanitizeFilename((fileSegment ?? basename(parsed.pathname)) || `fud_${Date.now()}`);

			const extension = extname(originalFilename).replace('.', '').toLowerCase();

			return {
				extension,
				originalFilename,
				extendedFilename: `${prefix ?? ''}${originalFilename}`
			};
		} catch {
			throw new Error(`Unable to retrieve file information: ${url}`);
		}
	}

	/**
	 * Sanitize filename by replacing invalid characters with underscores mostly for
	 * Windows OS which has a lot of reserved characters for filenames such as < > : " / \ | ? *
	 */
	public sanitizeFilename(name: string): string {
		return name.replace(/[^a-z0-9._-]/gi, '_');
	}

	/**
	 * Matches a URI scheme such as `s3://` or `gs://`.
	 *
	 * @remarks
	 * Deliberately requires `://`, so Windows drive letters like `C:\\media` are
	 * not caught.
	 */
	private static readonly URI_SCHEME = /^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//;

	private getFilePath(provider: Provider, directoryPath: string, filename: string, identifier?: string): string {
		if (!filename || filename.trim() === '') {
			throw new InvalidDestinationException(directoryPath, provider, identifier ?? filename, { reason: 'Invalid filename' });
		}

		/**
		 * Device output writes through the filesystem, so a remote URI is not a
		 * destination it can reach. Left unchecked, `path.resolve` turned
		 * `s3://bucket/media` into a local directory literally named `s3:` and the
		 * download reported success while the bucket stayed empty.
		 */
		if (FileManager.URI_SCHEME.test(directoryPath)) {
			throw new InvalidDestinationException(directoryPath, provider, identifier ?? filename, {
				reason:
					'directoryPath must be a filesystem path, not a URI. ' +
					'To upload to object storage use OutputType.STREAM and pipe DownloadResult.stream to your storage client.'
			});
		}

		const dynamicPath = this.pathBuilder.buildDirectoryPath(filename, identifier);

		const baseDir = isAbsolute(directoryPath) ? directoryPath : resolve(process.cwd(), directoryPath);

		const finalPath = resolve(baseDir, dynamicPath);

		const rel = relative(baseDir, finalPath);

		if (rel.startsWith('..') || rel === '..') {
			throw new InvalidDestinationException(directoryPath, provider, identifier ?? filename, {
				reason: 'Path traversal detected',
				finalPath
			});
		}

		try {
			mkdirSync(dirname(finalPath), { recursive: true });
		} catch (err) {
			throw new InvalidDestinationException(directoryPath, provider, identifier ?? filename, {
				finalPath,
				cause: err
			});
		}

		return finalPath;
	}

	/**
	 * Infers MIME type and extension for a media URL.
	 *
	 * @param url Media URL to inspect.
	 * @param request Provider request used for fallback decisions.
	 * @returns Detected or provider-default resource type.
	 */
	public detectResourceType(url: string, request: ExecutionArgs): { mimeType: string; extension: AllowedExtension } {
		const extension = this.getFileInfo(url).extension as AllowedExtension;

		if (/(mp4|webm|mov|mkv)$/.test(extension)) return { mimeType: `video/${extension}`, extension };
		else if (/(mp3|wav|aac|flac|ogg)$/.test(extension)) return { mimeType: `audio/${extension}`, extension };
		else if (/(jpg|jpeg|png|gif|webp)$/.test(extension)) return { mimeType: `image/${extension}`, extension };

		const message = { message: `[${request.provider}]Resolving resource type to default` };

		this.progressManager.update(message);

		/**
		 * Providers declare their own media shape in `ProviderMetadata`, so the
		 * default is read from that instead of a provider list maintained inside the
		 * storage layer. Adding a provider no longer means editing this file.
		 */
		const metadata = request.providerMetadata;

		if (metadata?.hasMp4 || metadata?.hasHls) return { mimeType: 'video/mp4', extension: 'mp4' };

		return { mimeType: 'application/octet-stream', extension: 'bin' };
	}

	/**
	 * Reconciles the initial file guess with the final response URL and headers.
	 *
	 * @param initial Filename inferred before requesting the stream.
	 * @param finalUrl Final URL returned by the stream request.
	 * @param headers Response headers.
	 * @param isFmp4 Whether the media is fMP4 HLS.
	 * @param prefix Optional filename prefix.
	 * @returns Resolved filename and extension for the actual media.
	 */
	public deriveResolvedFile(
		initial: ResolvedFile,
		finalUrl: string,
		headers: Record<string, string>,
		isFmp4?: boolean,
		prefix?: string
	): ResolvedFile {
		const isHls = finalUrl.includes('.m3u8') || headers['content-type']?.includes('application/vnd.apple.mpegurl');

		if (isHls) {
			// const container = headers['x-hls-container']; --- IGNORE ---

			const extension = isFmp4 ? 'mp4' : 'ts';

			const baseName = this.sanitizeFilename(initial.originalFilename.replace(/\.[^.]+$/, '') || 'video');

			return {
				originalFilename: `${baseName}.${extension}`,
				extension,
				extendedFilename: `${prefix ?? ''}${baseName}.${extension}`
			};
		} else if (initial.extension) return initial;

		const fallback = this.getFileInfo(finalUrl, prefix);
		if (fallback.extension) return fallback;

		return initial;
	}
}
