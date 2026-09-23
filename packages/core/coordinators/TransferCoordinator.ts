import { type DownloadOptions, type DownloadResult, type HLSStreamRequest, type PipelineItem, type ResolvedFile } from '@contracts';
import { type ProgressManager } from '@core/progress';
import { type StreamHttpClient } from '@engine/http';
import { type FileManager } from '@storage';
import { OutputType } from '@types';
import { finished } from 'stream/promises';

/**
 * Coordinates one pipeline item transfer into storage.
 *
 * @remarks
 * The transfer coordinator binds streaming and storage together. It resolves
 * the final media URL, opens the correct sink, streams bytes, finalizes the
 * stored media, and returns download metadata to the task coordinator.
 */
export class TransferCoordinator {
	constructor(
		protected readonly fileManager: FileManager,
		protected readonly streamHttpClient: StreamHttpClient,
		protected readonly progressManager: ProgressManager
	) {}

	/**
	 * Hands back a readable for one item while the transfer runs behind it.
	 *
	 * @remarks
	 * Returns as soon as the pipe is open rather than after the bytes land, which
	 * is what lets an HTTP handler start responding immediately. The transfer is
	 * driven in the background and its failures are surfaced by destroying the
	 * readable, so a consumer that only pipes still sees the error.
	 */
	private async streamItem(
		item: PipelineItem,
		opts: DownloadOptions,
		request: Pick<HLSStreamRequest, 'finalUrl' | 'headers' | 'start' | 'isFmp4' | 'contentLength' | 'estimatedBytes'>,
		resolvedFile: ResolvedFile
	): Promise<DownloadResult> {
		const sink = this.fileManager.createStreamSink(
			{
				provider: opts.provider,
				type: OutputType.STREAM,
				filename: resolvedFile.originalFilename,
				identifier: item.identifier.key,
				transCodeOptions: opts.transcodeOptions
			},
			resolvedFile,
			request.isFmp4
		);

		const transfer = (async () => {
			await request.start(sink.input, opts.noDownload);

			if (!sink.input.destroyed && !sink.input.writableEnded) sink.input.end();

			await sink.done;
		})();

		// the writable end only needs to close; the readable carries the error to the consumer
		sink.input.on('error', () => undefined);

		transfer.catch((error) => {
			const normalized = error instanceof Error ? error : new Error(String(error));

			sink.input.destroy();
			sink.output.destroy(normalized);
		});

		/**
		 * A remux rewrites the container, so the source length stops describing the
		 * output - measured at roughly a fifth smaller for TS to fragmented MP4.
		 * The exact length is therefore only published when bytes pass through
		 * untouched; otherwise the caller gets an estimate it must not send as
		 * `Content-Length`.
		 */
		const remuxed = this.fileManager.needsRemux(resolvedFile.extension, request.isFmp4);

		return {
			url: item.downloadUrl,
			finalUrl: request.finalUrl,
			provider: opts.provider,
			stream: sink.output,
			sizeBytes: remuxed ? 0 : (request.contentLength ?? 0),
			estimatedBytes: request.estimatedBytes,
			path: item.identifier.key,
			originalFilename: sink.filename,
			extendedFilename: `${opts.dirConfig?.prefix ?? ''}${sink.filename}`,
			extension: sink.extension,
			mimeType: sink.mimeType
		};
	}

	/**
	 * Downloads a single pipeline item.
	 *
	 * @param item Pipeline item describing the media URL and identifier.
	 * @param opts Download and output options.
	 * @returns Final download details including path, size, MIME type, and final URL.
	 */
	public async download(item: PipelineItem, opts: DownloadOptions): Promise<DownloadResult> {
		const { dirConfig, provider, outputType } = opts;
		const url = item.downloadUrl;

		const initialFile = this.fileManager.getFileInfo(url, dirConfig?.prefix);

		const streamRequest = await this.streamHttpClient.requestStream(url, {
			...opts,
			referer: item.sourceUrl,
			pipelineItem: item
		});

		const { finalUrl, headers, start, isFmp4 } = streamRequest;

		const resolvedFile = this.fileManager.deriveResolvedFile(initialFile, finalUrl, headers, isFmp4, dirConfig?.prefix);

		this.progressManager.update({ message: `Extracting metadata for: ${resolvedFile.extendedFilename}` });

		if (outputType === OutputType.STREAM) {
			return this.streamItem(item, opts, streamRequest, resolvedFile);
		}

		const { stream, finalize, cleanup } = this.fileManager.createSink({
			provider,
			type: outputType as OutputType,
			directoryPath: dirConfig?.directoryPath,
			filename: resolvedFile.originalFilename,
			identifier: item.identifier.key,
			noDownload: opts.noDownload,
			transCodeOptions: opts.transcodeOptions
		});

		/**
		 * Destroying a stream with an error makes it emit `error`, and an unlistened
		 * `error` on a WriteStream is a fatal uncaught exception. On abort that killed
		 * the process before cleanup could delete the partial file. The failure is
		 * already propagated by rethrowing, so the stream only needs a sink for the
		 * event, not another path for it.
		 */
		stream.on('error', () => undefined);

		/**
		 * Finalization runs inside the same guard as the transfer so a failure in
		 * either phase releases the sink instead of leaving a partial artifact behind.
		 */
		try {
			await start(stream, opts.noDownload);

			if (!stream.destroyed && !stream.writableEnded) stream.end();
			await finished(stream);

			const finalDetails = await finalize(resolvedFile, headers, isFmp4);

			return {
				...finalDetails,
				url,
				finalUrl,
				provider
			};
		} catch (err) {
			// no error argument: the caller gets it by rethrow, the stream just closes
			stream.destroy();

			await cleanup?.();

			throw err;
		}
	}
}
