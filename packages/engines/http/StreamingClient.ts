import { BaseHttpClient } from '@base';
import { type DownloadOptions, type HLSStreamRequest, type PipelineItem } from '@contracts';
import { DownloadException, NotFoundException } from '@core/exceptions';
import { type ProgressManager } from '@core/progress';
import { type StrategyRegistry } from '@core/registries';
import { Readable, Transform, type Writable } from 'stream';
import { pipeline } from 'stream/promises';
import { type Response as UResponse } from 'undici';
import { type HlsClient } from './HlsClient';

/**
 * HTTP engine for downloadable media streams.
 *
 * @remarks
 * Streaming is separate from page fetching because downloads need byte progress,
 * provider-aware CDN fallback, expired URL re-extraction, direct media redirect
 * resolution, and HLS delegation.
 */
export class StreamHttpClient extends BaseHttpClient {
	private static readonly DEFAULT_MAX_CDN_FALLBACK = 1;
	private static readonly DEFAULT_MAX_RE_EXTRACT = 1;

	constructor(
		private readonly hlsClient: HlsClient,
		private readonly strategyRegistry: StrategyRegistry,
		progressManager: ProgressManager
	) {
		super(progressManager);
	}

	private async handleServiceAware404(url: string, opts: DownloadOptions): Promise<HLSStreamRequest | null> {
		const strategy = await this.strategyRegistry.getStrategy();

		if (!strategy) return null;

		const cdnBudget = opts.cdnFallbackBudget ?? StreamHttpClient.DEFAULT_MAX_CDN_FALLBACK;
		const reExtractBudget = opts.reExtractBudget ?? StreamHttpClient.DEFAULT_MAX_RE_EXTRACT;

		const shouldFallback = strategy.shouldFallback404?.(url) && cdnBudget > 0;

		if (shouldFallback) {
			const fallback = strategy.getFallbackUrl?.(url);

			if (fallback && fallback !== url) {
				this.progressManager.update({ message: `CDN fallback (${cdnBudget} left): ${fallback}` });

				return this.requestStream(fallback, { ...opts, cdnFallbackBudget: cdnBudget - 1, reExtractBudget });
			}
		}

		const shouldReExtract = strategy.shouldReExtract?.(url) && opts.reExtract && opts.pipelineItem && reExtractBudget > 0;

		if (shouldReExtract) {
			this.progressManager.update({ message: `HLS expired, re extracting (${reExtractBudget} left)...` });

			const freshItem = await opts.reExtract?.(opts?.pipelineItem as PipelineItem);
			const freshUrl = freshItem?.downloadUrl;

			if (freshItem && freshUrl && freshUrl !== url) {
				return this.requestStream(freshUrl, {
					...opts,
					pipelineItem: freshItem,
					referer: freshItem.sourceUrl,
					cdnFallbackBudget: cdnBudget,
					reExtractBudget: reExtractBudget - 1
				});
			}
		}

		return null;
	}

	/**
	 * Releases an undici response body that will not be read.
	 *
	 * @remarks
	 * Undici keeps the socket checked out of the pool until the body is consumed
	 * or destroyed, so every abandoned response has to be drained explicitly.
	 */
	private async discardBody(response: UResponse): Promise<void> {
		try {
			await response.body?.cancel();
		} catch {
			/* body already consumed or destroyed */
		}
	}

	private async resolveServiceTextResponse(
		url: string,
		contentType: string,
		body: UResponse,
		opts: DownloadOptions
	): Promise<HLSStreamRequest | null> {
		const strategy = await this.strategyRegistry.getStrategy();
		const shouldResolve = strategy?.shouldResolveTextResponse?.(url, contentType);

		this.progressManager.update({ message: `Resolving text response...${url} should resolve ${shouldResolve}` });

		if (!shouldResolve) return null;

		const directUrl = strategy?.getDirectVideoUrlFromText?.(await body.text(), opts);
		if (!directUrl || directUrl === url) throw new Error(`Unable to resolve direct video url from ${url}`);

		this.progressManager.update({ message: 'Direct mp4 resolved', redirectedUrl: directUrl });
		return this.requestStream(directUrl, opts);
	}

	/**
	 * Resolves a media URL into a stream starter and final response metadata.
	 *
	 * @param url Media URL to request.
	 * @param opts Download options and provider context.
	 * @returns Stream start callback with final URL, headers, and media flags.
	 */
	public async requestStream(url: string, opts: DownloadOptions): Promise<HLSStreamRequest> {
		const { timeoutMs = 30_000, retries = 3 } = opts;

		const strategy = await this.strategyRegistry.getStrategy();
		const candidateUrls = strategy.getHostFallbackUrls?.(url) ?? [url];

		let lastError: Error | null = null;

		/**
		 * Host fallback and retry are separate axes: every candidate host gets the
		 * full retry budget instead of the two sharing a single attempt counter.
		 */
		for (const candidateUrl of candidateUrls) {
			for (let attempt = 0; attempt <= retries; attempt++) {
				const initialHeaders = this.randomHeaders({ Referer: opts.referer ?? candidateUrl, ...opts?.headers });
				const headers = this.applyCookieWithHeader(
					candidateUrl,
					this.addOriginWithHeader(initialHeaders, opts.referer ?? candidateUrl)
				);

				try {
					const response = await this.fetchWithTransportFallback(
						candidateUrl,
						{
							headers,
							redirect: 'follow',
							referrer: opts.referer
						},
						opts
					);

					this.storeCookies(candidateUrl, response.headers);

					const finalUrl = response.url || candidateUrl;
					const contentType = response.headers.get('content-type') || '';
					const responseHeaders = Object.fromEntries(response.headers.entries());

					if (response.status === 404) {
						this.progressManager.update({ message: `Statuscode 404: ${candidateUrl}` });

						await this.discardBody(response);

						const serviceResult = await this.handleServiceAware404(candidateUrl, opts);
						if (serviceResult) return serviceResult;

						lastError = new NotFoundException(opts.provider, candidateUrl);

						// a 404 does not become a 200 by asking again, move to the next host
						break;
					}

					if (response.status === 429 || response.status >= 500) {
						await this.discardBody(response);

						lastError = new DownloadException(candidateUrl, opts.provider, `Retryable status ${response.status}`);

						if (attempt < retries) {
							await this.delay(attempt);
							continue;
						}

						break;
					}

					const resolvedTextResponse = await this.resolveServiceTextResponse(candidateUrl, contentType, response, opts);
					if (resolvedTextResponse) return resolvedTextResponse;

					/**
					 * The origin length only describes the delivered bytes when nothing
					 * rewrites them, and only when the body is not encoded - a compressed
					 * response declares the compressed length while undici hands over the
					 * decoded stream.
					 */
					const declaredLength = Number(response.headers.get('content-length') ?? 0) || undefined;
					const encoded = Boolean(response.headers.get('content-encoding'));

					if (this.hlsClient.isHlsManifest(contentType, finalUrl)) {
						const manifest = await response.text();

						/**
						 * The playlist is resolved once here and the result is reused by
						 * `streamPlaylist`, so a signed media playlist URL is fetched a single
						 * time instead of once for fMP4 detection and again for streaming.
						 */
						const playlist = await this.hlsClient.resolvePlaylist(manifest, finalUrl, timeoutMs, opts);

						return {
							finalUrl,
							isFmp4: playlist.isFmp4,
							headers: responseHeaders,
							// segments are always stitched and remuxed, so only an estimate is honest
							estimatedBytes: playlist.estimatedBytes || undefined,
							start: (stream: Writable, noDownload?: boolean) =>
								this.hlsClient.streamPlaylist(playlist, timeoutMs, stream, { ...opts, noDownload })
						};
					}

					return {
						finalUrl,
						headers: responseHeaders,
						contentLength: encoded ? undefined : declaredLength,
						estimatedBytes: declaredLength,
						start: async (stream: Writable, noDownload?: boolean) => {
							if (noDownload) {
								this.progressManager.update({ message: `Stream debug mode - skipping download for ${finalUrl}` });

								await this.discardBody(response);

								return;
							}

							await this.readAndShowProgress(stream, response, opts);
						}
					};
				} catch (error) {
					lastError = error instanceof Error ? error : new Error(String(error));

					if (attempt < retries) {
						await this.delay(attempt);
						continue;
					}
				}
			}
		}

		throw new DownloadException(url, opts.provider, `Candidates: ${candidateUrls.join(', ')}`, {
			cause: lastError ?? new Error('Unknown error')
		});
	}

	private async readAndShowProgress(stream: Writable, res: UResponse, opts: DownloadOptions): Promise<void> {
		const readable = Readable.fromWeb(res.body as any);

		const size = Number(res.headers.get('content-length') || 0);

		let downloadedBytes = 0;
		let lastEmit = Date.now();

		const progressManager = this.progressManager;

		const itemKey = opts.pipelineItem?.downloadUrl;
		const itemLabel = this.itemLabel(opts);

		const progress = new Transform({
			transform(chunk: Buffer, _, cb) {
				downloadedBytes += chunk.length;

				const now = Date.now();

				if (now - lastEmit > 2000) {
					lastEmit = now;

					progressManager.update({
						downloadedBytes,
						totalBytes: size
					});
				}

				cb(null, chunk);
			}
		});

		// the signal reaches the byte pump itself, so an abort tears down an in-flight transfer
		await pipeline(readable, progress, stream, opts.signal ? { signal: opts.signal } : {});

		progressManager.update({ downloadedBytes, totalBytes: size, itemKey, itemLabel });
	}
}
