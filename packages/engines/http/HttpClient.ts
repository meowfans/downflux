import { type FetchResult, type HttpFetchOptions, type ProviderComponents } from '@contracts';
import { StrategyRegistry } from '@core/registries';
import { type InumakiProgress } from 'inumaki';
import { BaseHttpClient } from 'charanko';

/**
 * HTTP engine for page and JSON metadata requests.
 *
 * @remarks
 * Transport, cookies, decoding and the SNI/proxy fallback come from charanko's
 * `BaseHttpClient`; this client adds provider host fallbacks and retries for pages.
 */
export class HttpClient extends BaseHttpClient {
	constructor(
		progress: InumakiProgress,
		private readonly components: ProviderComponents = {}
	) {
		super(progress);

		// built here, not as a field initializer, which would run before `components` is set
		this.strategyRegistry = new StrategyRegistry(progress, components);
	}

	private readonly strategyRegistry: StrategyRegistry;

	/**
	 * Fetches a page as HTML using provider-aware transport rules.
	 *
	 * @param url Page URL to fetch.
	 * @param opts HTTP options.
	 * @returns Decoded HTML, final URL, status, headers, and raw buffer.
	 */
	public async fetchHtml(url: string, opts: HttpFetchOptions): Promise<FetchResult> {
		const { retries = 3 } = opts;
		const timeoutMs = opts.timeoutMs ?? 30_000;
		const candidateUrls = this.strategyRegistry.strategy.candidateUrls(url);

		let lastError: Error | null = null;

		for (let attempt = 0; attempt <= retries; attempt++) {
			const candidateUrl = candidateUrls[attempt % candidateUrls.length];

			const initialHeaders = this.browserHeaders({ Referer: opts?.referer ?? candidateUrl, ...opts.headers });
			const headers = this.withCookies(candidateUrl, this.withOrigin(initialHeaders, opts?.referer ?? candidateUrl));

			try {
				const {
					status: statusCode,
					headers: resHeaders,
					body
				} = await this.fetchWithTransportFallback(
					candidateUrl,
					{
						headers,
						body: opts.formData ? new URLSearchParams(opts.formData).toString() : undefined,
						method: opts.formData ? 'POST' : 'GET',
						redirect: 'follow',
						signal: AbortSignal.timeout(timeoutMs)
					},
					opts
				);

				this.storeCookies(candidateUrl, resHeaders);

				const buffer = this.decodeBody(await this.readBody(body as ReadableStream<Uint8Array> | null), resHeaders);

				return {
					html: buffer.toString('utf8'),
					buffer,
					finalUrl: candidateUrl,
					status: statusCode,
					ok: statusCode >= 200 && statusCode < 300,
					headers: this.headerRecord(resHeaders)
				};
			} catch (error) {
				lastError = error instanceof Error ? error : new Error(String(error));

				if (attempt < retries) {
					await this.backoff(attempt);
					continue;
				}
			}
		}

		throw new Error(`FAILED TO FETCH ${url} AFTER ${retries + 1} ATTEMPTS (CANDIDATES: ${candidateUrls.join(', ')}): ${lastError}`);
	}
}
