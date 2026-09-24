import { type OutputType, type Provider } from '@types';
import { type Readable, type Writable } from 'stream';

export interface CreateSinkInput {
	provider: Provider;
	type: OutputType;
	transCodeOptions?: TranscodeOptions;
	directoryPath?: string;
	filename: string;
	identifier: string;
	noDownload?: boolean; // Optional flag to indicate if the sink is being created for a no-download scenario (metadata extraction only)
}

export interface CreateSinkOutput {
	originalFilename: string;
	extension: string;
	extendedFilename: string;
	mimeType: string;
	sizeBytes: number;
	path: string;
	isFmp4?: boolean;
}

/**
 * A sink that exposes its readable side to the caller.
 *
 * @remarks
 * `input` receives downloaded bytes, `output` carries playable media. They are
 * the two ends of the same pipe when no remux is needed, and ffmpeg's stdin and
 * stdout when one is.
 */
export interface StreamSink {
	input: Writable;
	output: Readable;

	/** Settles when the underlying remux finishes, or rejects if it failed. */
	done: Promise<void>;

	extension: string;
	mimeType: string;
	filename: string;
}

export interface ResolvedFile {
	originalFilename: string;
	extension: string;
	extendedFilename: string;
}

export interface TranscodeOptions {
	/**
	 * Internal path of the downloaded media file that should be finalized.
	 * DownFlux sets this automatically when a streamed file needs ffmpeg.
	 */
	inputPath?: string;

	/**
	 * Explicit ffmpeg executable path.
	 *
	 * Use this when the consuming project cannot use the bundled `ffmpeg-static`
	 * binary, for example when pnpm build scripts are disabled.
	 *
	 * @example '/opt/homebrew/bin/ffmpeg'
	 */
	ffmpegPath?: string;

	/**
	 * Deletes the intermediate input file after successful finalization.
	 * @defaultValue true
	 */
	deleteInput?: boolean;

	/**
	 * Complete custom ffmpeg arguments.
	 * When provided, these replace DownFlux's default remux/transcode arguments.
	 */
	ffmpegArgs?: string[];

	/**
	 * Final media container extension.
	 * @defaultValue 'mp4'
	 */
	outputExtension?: string;

	/**
	 * ffmpeg encoder preset used when transcoding with an encoder such as libx264.
	 */
	preset?: 'ultrafast' | 'superfast' | 'veryfast' | 'faster' | 'fast' | 'medium' | 'slow';

	/**
	 * Constant Rate Factor used when transcoding with an encoder such as libx264.
	 */
	crf?: number;

	/**
	 * ffmpeg video codec.
	 * @defaultValue 'copy'
	 */
	videoCodec?: string;

	/**
	 * ffmpeg audio codec.
	 * @defaultValue 'copy'
	 */
	audioCodec?: string;
}

/**
 * Directory output options.
 * Controls where downloaded files are written.
 */
export interface DirectoryOutputOptions {
	/**
	 * Directory path for written files
	 * @defaultValue process.cwd()
	 */
	directoryPath?: string;

	/** Filename prefix */
	prefix?: string;

	/**
	 * Directory structure pattern for recursive downloads.
	 *
	 * @remarks
	 * - `provider`: Organizes files by provider name.
	 * - `extension`: Organizes files by file extension.
	 * - `recursive`: Preserves the original directory structure from the source URL.
	 *
	 * @defaultValue 'recursive'
	 */
	pattern?: 'provider' | 'extension' | 'recursive';
}
