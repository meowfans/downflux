import { DownloadOptions, HttpAgentOptions } from '@contracts';
import { ProgressManager } from '@core/progress';
import { HEADER_PRESETS } from '@shared';
import { checkServerIdentity as tlsCheckServerIdentity } from 'tls';
import { Agent, Dispatcher, Headers, ProxyAgent, fetch as UFetch } from 'undici';
import { brotliDecompressSync, gunzipSync, inflateSync } from 'zlib';

/**
 * Shared HTTP engine foundation.
 *
 * @remarks
 * Engines centralize transport concerns that should not leak into providers:
 * randomized browser-like headers, cookies, compression decoding, proxy/SNI
 * dispatchers, retries, and low-level fetch fallback behavior.
 */
export abstract class BaseHttpClient {
	constructor(protected readonly progressManager: ProgressManager) {}

	protected readonly cookieJar = new Map<string, Map<string, string>>();
	protected static readonly CHROME_CIPHERS = [
		'TLS_AES_128_GCM_SHA256',
		'TLS_AES_256_GCM_SHA384',
		'TLS_CHACHA20_POLY1305_SHA256',
		'ECDHE-ECDSA-AES128-GCM-SHA256',
		'ECDHE-RSA-AES128-GCM-SHA256',
		'ECDHE-ECDSA-AES256-GCM-SHA384',
		'ECDHE-RSA-AES256-GCM-SHA384',
		'ECDHE-ECDSA-CHACHA20-POLY1305',
		'ECDHE-RSA-CHACHA20-POLY1305',
		'ECDHE-RSA-AES128-SHA',
		'ECDHE-RSA-AES256-SHA',
		'AES128-GCM-SHA256',
		'AES256-GCM-SHA384',
		'AES128-SHA',
		'AES256-SHA'
	].join(':');

	protected get CHROME_CIPHERS(): string {
		return BaseHttpClient.CHROME_CIPHERS;
	}

	/**
	 * Connection pools are process-wide.
	 *
	 * @remarks
	 * These used to be instance fields, so every client built its own pools and every
	 * provider instance built three clients. Nothing ever closed them, so each
	 * construction leaked sockets. Sharing them keeps keep-alive working across
	 * providers; {@link BaseHttpClient.closeSharedAgents} disposes them.
	 */
	private static sharedAgent: Agent | null = null;
	private static readonly sharedSpoofAgents = new Map<string, Agent>();
	private static readonly sharedProxyAgents = new Map<string, ProxyAgent>();

	protected get agent(): Agent {
		BaseHttpClient.sharedAgent ??= new Agent({
			connect: {
				ciphers: BaseHttpClient.CHROME_CIPHERS,
				honorCipherOrder: true,
				minVersion: 'TLSv1.2',
				maxVersion: 'TLSv1.3',
				ALPNProtocols: ['h2', 'http/1.1']
			}
		});

		return BaseHttpClient.sharedAgent;
	}

	/**
	 * Builds the SNI-spoofing agent for one host.
	 *
	 * @remarks
	 * The TLS handshake advertises `www.google.com` to get past SNI-based DPI
	 * filtering, but the certificate is still verified against the host actually
	 * being contacted. The previous `checkServerIdentity: () => undefined` accepted
	 * *any* certificate, which silently turned the workaround into a MITM hole.
	 */
	protected spoofAgentFor(hostname: string): Agent {
		const cached = BaseHttpClient.sharedSpoofAgents.get(hostname);

		if (cached) return cached;

		const agent = new Agent({
			connect: {
				ciphers: BaseHttpClient.CHROME_CIPHERS,
				honorCipherOrder: true,
				minVersion: 'TLSv1.2',
				maxVersion: 'TLSv1.3',
				ALPNProtocols: ['h2', 'http/1.1'],
				/* This does not works with all sites, but is necessary for some SNI-restricted ones */
				servername: 'www.google.com',
				checkServerIdentity: (_servername, cert) => tlsCheckServerIdentity(hostname, cert)
			}
		});

		BaseHttpClient.sharedSpoofAgents.set(hostname, agent);

		return agent;
	}

	/**
	 * Closes every shared connection pool.
	 *
	 * @remarks
	 * Long-lived processes that stop using DownFlux should call this so undici
	 * releases its sockets; a fresh pool is created lazily on the next request.
	 */
	/** Instance-side alias for {@link BaseHttpClient.closeSharedAgents}. */
	public async closeConnections(): Promise<void> {
		await BaseHttpClient.closeSharedAgents();
	}

	public static async closeSharedAgents(): Promise<void> {
		const pools: Array<Agent | ProxyAgent> = [
			...(BaseHttpClient.sharedAgent ? [BaseHttpClient.sharedAgent] : []),
			...BaseHttpClient.sharedSpoofAgents.values(),
			...BaseHttpClient.sharedProxyAgents.values()
		];

		BaseHttpClient.sharedAgent = null;
		BaseHttpClient.sharedSpoofAgents.clear();
		BaseHttpClient.sharedProxyAgents.clear();

		await Promise.allSettled(pools.map((pool) => pool.close()));
	}

	protected randomHeaders(extra: Record<string, string> = {}) {
		const preset = HEADER_PRESETS[Math.floor(Math.random() * HEADER_PRESETS.length)];

		return {
			...preset,
			...extra
		};
	}

	protected buildHlsHeaders(opts: DownloadOptions) {
		return {
			'User-Agent': 'Mozilla/5.0',
			'Accept': '*/*',
			'Referer': opts?.referer || '',
			'Origin': opts?.referer ? new URL(opts.referer).origin : ''
		};
	}

	private createDispatcher(url: string, options?: HttpAgentOptions): Dispatcher {
		if (options?.dispatcher) return options.dispatcher;

		if (options?.proxy) {
			const { type, host, port, username, password } = options.proxy;
			const auth = username && password ? `${encodeURIComponent(username)}:${encodeURIComponent(password)}@` : '';
			const proxyUrl = `${type}://${auth}${host}:${port}`;

			/**
			 * Cached per proxy URL. Building a ProxyAgent per request gave every call
			 * its own pool, so keep-alive never applied and the pools were abandoned.
			 */
			const cached = BaseHttpClient.sharedProxyAgents.get(proxyUrl);

			if (cached) return cached;

			const proxyAgent = new ProxyAgent({ uri: proxyUrl });

			BaseHttpClient.sharedProxyAgents.set(proxyUrl, proxyAgent);

			return proxyAgent;
		}

		if (options?.enableSniSpoofing) return this.spoofAgentFor(this.hostnameOf(url));

		return this.agent;
	}

	private hostnameOf(url: string): string {
		try {
			return new URL(url).hostname;
		} catch {
			return url;
		}
	}

	/**
	 * Combines a per-request timeout with a caller-supplied abort signal.
	 *
	 * @param timeoutMs Timeout applied when the caller supplies no signal of its own.
	 * @param external Optional caller abort signal.
	 * @returns A signal that aborts on whichever fires first.
	 */
	protected linkSignal(timeoutMs: number, external?: AbortSignal): AbortSignal {
		const timeout = AbortSignal.timeout(timeoutMs);

		if (!external) return timeout;

		return AbortSignal.any([external, timeout]);
	}

	/**
	 * Short display name for a download item, falling back to the URL tail.
	 *
	 * @remarks
	 * Lives on the base client because both the plain and HLS engines label the
	 * per-item progress rows they emit.
	 */
	protected itemLabel(opts: DownloadOptions): string | undefined {
		const url = opts.pipelineItem?.downloadUrl;

		if (!url) return undefined;

		try {
			return new URL(url).pathname.split('/').filter(Boolean).pop() ?? url;
		} catch {
			return url;
		}
	}

	protected async delay(attempt: number) {
		const base = 300;
		const jitter = Math.random() * 200;
		const delay = base * 2 ** attempt + jitter;
		return new Promise((res) => setTimeout(res, delay));
	}

	protected async readBody(body: ReadableStream<Uint8Array> | null): Promise<Buffer> {
		if (!body) return Buffer.alloc(0);

		const reader = body.getReader();
		const chunks: Buffer[] = [];

		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			chunks.push(Buffer.from(value));
		}

		return Buffer.concat(chunks);
	}

	protected decodeBody(buffer: Buffer, headers: Headers): Buffer {
		const enc = headers.get('content-encoding')?.toLowerCase();

		if (!enc) return buffer;

		try {
			if (enc.includes('gzip')) return gunzipSync(buffer);
			if (enc.includes('deflate')) return inflateSync(buffer);
			if (enc.includes('br')) return brotliDecompressSync(buffer);
		} catch {
			return buffer;
		}

		return buffer;
	}

	protected applyCookieWithHeader(url: string, headers: Record<string, string>): Record<string, string> {
		const host = new URL(url).hostname;
		const hostCookies = this.cookieJar.get(host);

		if (!hostCookies || hostCookies.size === 0) return headers;

		const cookie = Array.from(hostCookies.entries())
			.map(([name, value]) => `${name}=${value}`)
			.join('; ');

		if (!cookie) return headers;

		return { ...headers, Cookie: cookie };
	}

	protected storeCookies(url: string, headers: Headers): void {
		const host = new URL(url).hostname;
		const existing = this.cookieJar.get(host) ?? new Map<string, string>();

		const cookies = ((headers as unknown as { getSetCookie?: () => string[] }).getSetCookie?.() ?? []) as string[];

		for (const raw of cookies) {
			const [pair] = raw.split(';');
			if (!pair) continue;

			const eq = pair.indexOf('=');
			if (eq <= 0) continue;

			const name = pair.slice(0, eq).trim();
			const value = pair.slice(eq + 1).trim();
			if (!name) continue;

			existing.set(name, value);
		}

		if (existing.size > 0) this.cookieJar.set(host, existing);
	}

	protected addOriginWithHeader(headers: Record<string, string>, referer?: string): Record<string, string> {
		if (!referer) return headers;
		if (headers.Origin || headers.origin) return headers;

		try {
			return { ...headers, Origin: new URL(referer).origin };
		} catch {
			return headers;
		}
	}

	protected headers(headers: Headers): Record<string, string> {
		return Object.fromEntries(headers.entries());
	}

	protected isTransportError(error: unknown): string | undefined {
		const e = error as { code?: string; cause?: { code?: string } };
		const code = e?.code ?? e?.cause?.code;
		return [
			'ECONNRESET',
			'ECONNREFUSED',
			'ETIMEDOUT',
			'EPIPE',
			'UND_ERR_SOCKET',
			'UND_ERR_CONNECT_TIMEOUT',
			'UND_ERR_HEADERS_TIMEOUT'
		].find((c) => c === String(code));
	}

	/**
	 * Runs a fetch request with transport fallback for transient TLS/socket failures.
	 *
	 * @param url URL to request.
	 * @param init Fetch options.
	 * @param options Agent, proxy, and SNI options.
	 * @param allowFallback Whether fallback dispatchers may be attempted.
	 * @returns Native fetch response.
	 */
	public async fetchWithTransportFallback(
		url: string,
		init: Parameters<typeof UFetch>[1],
		options: HttpAgentOptions,
		allowFallback: boolean = true
	): ReturnType<typeof UFetch> {
		const signal = init?.signal ?? (options as DownloadOptions)?.signal;

		try {
			return await UFetch(url, { ...init, signal, dispatcher: this.agent });
		} catch (error) {
			const transportError = this.isTransportError(error);

			// a caller-requested abort is final, never retry through another transport
			if (signal?.aborted || !allowFallback || !transportError) throw error;

			this.progressManager.update({ message: `Transport failure, Retrying with SNI spoof, CODE: ${transportError}` });

			try {
				return await UFetch(url, { ...init, signal, dispatcher: this.createDispatcher(url, options) });
			} catch (spoofError) {
				this.progressManager.update({ message: `SNI spoof transport failed, Retry with default, ${spoofError}` });
				return await UFetch(url, { ...init, signal });
			}
		}
	}

	public async fetchText(url: string, timeoutMs: number, headers: Record<string, any>, signal?: AbortSignal): Promise<string> {
		return (await fetch(url, { signal: this.linkSignal(timeoutMs, signal), headers })).text();
	}

	public async fetchJson(url: string, opts: DownloadOptions) {
		const headers = this.addOriginWithHeader(
			this.randomHeaders({ Referer: opts?.referer ?? url, ...opts.headers }),
			opts?.referer ?? url
		);

		try {
			const { headers: resHeaders, body } = await this.fetchWithTransportFallback(
				url,
				{
					method: 'GET',
					signal: this.linkSignal(opts?.timeoutMs ?? 30_000, opts?.signal),
					headers
				},
				opts
			);

			const buffer = this.decodeBody(await this.readBody(body as ReadableStream<Uint8Array>), resHeaders);

			return JSON.parse(buffer.toString('utf8'));
		} catch (error) {
			const transportError = this.isTransportError(error);

			if (transportError) this.progressManager.update({ message: `Transport error occurred: ${transportError}` });

			throw new Error('JSON parsing failed', { cause: error });
		}
	}
}
