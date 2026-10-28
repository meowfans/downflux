import { type ExecutionArgs, type ExecutionResult } from '@contracts';
import { type InumakiProgress } from 'inumaki';
import { type AllowedExtension, type ExecutionShape } from '@types';
import { FileManager as CharankoFileManager, type FFmpegEngine } from 'charanko';
import { writeFileSync } from 'fs';

/**
 * Storage service for JSON results and files on disk.
 *
 * @remarks
 * Sinks, safe output paths, filename handling and remuxing come from charanko's
 * `FileManager`. DownFlux adds what only it needs: the JSON result file and the
 * resource type pipelines use to label extracted items.
 */
export class FileManager extends CharankoFileManager {
	/** Directory DownFlux writes to when the job sets none. */
	public static readonly DEFAULT_DIRECTORY = 'DownFlux';

	constructor(
		ffmpegEngine: FFmpegEngine,
		private readonly progress: InumakiProgress
	) {
		super(ffmpegEngine);
	}

	/**
	 * Writes an execution result as JSON.
	 *
	 * @param result Execution result to serialize.
	 * @param directoryPath Destination directory.
	 * @returns Path to the written JSON file.
	 */
	public toJSON<T, S extends ExecutionShape>(
		result: ExecutionResult<T, S>,
		directoryPath: string = FileManager.DEFAULT_DIRECTORY
	): string {
		const finalPath = this.outputPath(directoryPath, `${result.provider}_${Date.now()}.json`);

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
	 * Infers MIME type and extension for a media URL.
	 *
	 * @param url Media URL to inspect.
	 * @param request Provider request used for fallback decisions.
	 * @returns Detected or provider-default resource type.
	 */
	public detectResourceType(url: string, request: ExecutionArgs): { mimeType: string; extension: AllowedExtension } {
		const extension = this.fileFromUrl(url).extension as AllowedExtension;

		if (/(mp4|webm|mov|mkv)$/.test(extension)) return { mimeType: `video/${extension}`, extension };
		else if (/(mp3|wav|aac|flac|ogg)$/.test(extension)) return { mimeType: `audio/${extension}`, extension };
		else if (/(jpg|jpeg|png|gif|webp)$/.test(extension)) return { mimeType: `image/${extension}`, extension };

		this.progress.message(`[${request.provider}]Resolving resource type to default`);

		/**
		 * Providers declare their own media shape in `ProviderMetadata`, so the
		 * default is read from that instead of a provider list maintained inside the
		 * storage layer. Adding a provider no longer means editing this file.
		 */
		const metadata = request.providerMetadata;

		if (metadata?.hasMp4 || metadata?.hasHls) return { mimeType: 'video/mp4', extension: 'mp4' };

		return { mimeType: 'application/octet-stream', extension: 'bin' };
	}
}
