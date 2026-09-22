import { BaseHttpClient } from '@base';
import { DownloadOptions, M3U8Variant } from '@contracts';
import { ProgressManager } from '@core/progress';
import { mapQualityToHeight } from '@shared';
import { VideoQuality } from '@types';
import { createDecipheriv } from 'crypto';
import { once } from 'events';
import { Readable, Writable } from 'stream';

export interface ParseKey {
	url: string;
	iv?: Buffer;
	method: 'AES-128' | 'NONE';
}

/** One media segment together with the `#EXT-X-KEY` in effect for it. */
export interface HlsSegment {
	url: string;
	key: ParseKey | null;
	/** Media sequence number, used as the implicit AES-128 IV when no `IV=` is declared. */
	sequence: number;
}

/**
 * A fully resolved media playlist.
 *
 * @remarks
 * Resolving produces everything streaming needs in one pass so the media
 * playlist is fetched exactly once, even though callers need fMP4 detection
 * before they open a sink and segments after.
 */
export interface ResolvedPlaylist {
	playlistUrl: string;
	segments: HlsSegment[];
	initUrl: string | null;
	isFmp4: boolean;

	/**
	 * Approximate size of the source stream in bytes.
	 *
	 * @remarks
	 * Exact when the playlist declares `#EXT-X-BYTERANGE`, otherwise derived from
	 * the variant's `BANDWIDTH` and the summed `#EXTINF` durations. It describes
	 * the bytes fetched, not the bytes produced, because remuxing changes size.
	 */
	estimatedBytes: number;
}

/**
 * HTTP engine for HLS playlists and media segments.
 *
 * @remarks
 * HLS handling is isolated from generic streaming because playlists require
 * variant selection, segment stitching, optional AES decryption, and fMP4
 * detection before storage can finalize the media.
 */
export class HlsClient extends BaseHttpClient {
	/** Minimum gap between byte-progress events while a segment streams. */
	private static readonly BYTE_REPORT_INTERVAL = 250;

	constructor(progressManager: ProgressManager) {
		super(progressManager);
	}

	/**
	 * Resolves a manifest into the playlist that will actually be streamed.
	 *
	 * @param manifest Already fetched manifest content.
	 * @param manifestUrl URL used to resolve relative playlist entries.
	 * @param timeoutMs Request timeout for the media playlist fetch.
	 * @param opts Download and quality options.
	 * @returns Selected playlist URL, its segments with per-segment keys, and fMP4 state.
	 */
	public async resolvePlaylist(
		manifest: string,
		manifestUrl: string,
		timeoutMs: number,
		opts: DownloadOptions
	): Promise<ResolvedPlaylist> {
		const variant = this.selectVariant(manifest, manifestUrl, opts);
		const playlistUrl = variant ?? manifestUrl;

		const requestHeaders = this.buildHlsHeaders(opts);

		const mediaManifest =
			variant && variant !== manifestUrl ? await this.fetchText(variant, timeoutMs, requestHeaders, opts.signal) : manifest;

		const initUrl = this.parseInitSegment(mediaManifest, playlistUrl);
		const isFmp4 = !!initUrl;

		const segments = this.parseSegments(mediaManifest, playlistUrl, isFmp4);

		if (!segments.length) throw new Error('No segments found to manifest');

		return { playlistUrl, segments, initUrl, isFmp4, estimatedBytes: this.estimatePlaylistBytes(manifest, mediaManifest, playlistUrl) };
	}

	/**
	 * Writes an already resolved playlist to a destination stream.
	 *
	 * @param playlist Playlist returned by {@link HlsClient.resolvePlaylist}.
	 * @param timeoutMs Segment request timeout.
	 * @param stream Destination stream.
	 * @param opts Download and quality options.
	 */
	public async streamPlaylist(playlist: ResolvedPlaylist, timeoutMs: number, stream: Writable, opts: DownloadOptions): Promise<void> {
		const requestHeaders = this.buildHlsHeaders(opts);

		const segments: HlsSegment[] = playlist.initUrl
			? [{ url: playlist.initUrl, key: null, sequence: -1 }, ...playlist.segments]
			: playlist.segments;

		await this.stitchSegments(segments, timeoutMs, stream, requestHeaders, opts);
	}

	/**
	 * Writes a resolved HLS playlist to a destination stream.
	 *
	 * @param manifest Already fetched manifest content.
	 * @param manifestUrl URL used to resolve relative playlist entries.
	 * @param timeoutMs Segment request timeout.
	 * @param stream Destination stream.
	 * @param opts Download and quality options.
	 */
	public async fetchHlsStream(
		manifest: string,
		manifestUrl: string,
		timeoutMs: number,
		stream: Writable,
		opts: DownloadOptions
	): Promise<void> {
		const playlist = await this.resolvePlaylist(manifest, manifestUrl, timeoutMs, opts);

		await this.streamPlaylist(playlist, timeoutMs, stream, opts);
	}

	/**
	 * Detects whether the selected playlist uses fMP4 initialization segments.
	 *
	 * @param manifest Manifest content.
	 * @param manifestUrl URL used to resolve relative entries.
	 * @param opts Download and quality options.
	 * @returns `true` when an fMP4 init segment is present.
	 */
	public async isFmp4(manifest: string, manifestUrl: string, opts: DownloadOptions): Promise<boolean> {
		const { isFmp4 } = await this.resolvePlaylist(manifest, manifestUrl, opts?.timeoutMs ?? 30_000, opts);

		return isFmp4;
	}

	private parseInitSegment(manifest: string, base: string): string | null {
		const match = manifest.match(/#EXT-X-MAP:[^\n]*URI="([^"]+)"/);
		if (!match) return null;

		return new URL(match[1], base).toString();
	}

	private async fetchStream(
		url: string,
		headers: Record<string, string>,
		timeoutMs: number,
		signal?: AbortSignal
	): Promise<NodeJS.ReadableStream> {
		const retries = 3;

		let lastError: Error | null = null;

		for (let attempt = 0; attempt <= retries; attempt++) {
			try {
				const res = await fetch(url, { headers, signal: this.linkSignal(timeoutMs, signal) });

				if (!res.ok || !res.body) {
					// release the socket before retrying or giving up
					await res.body?.cancel().catch(() => undefined);

					throw new Error(`Failed segment: ${url} (${res.status})`);
				}

				return Readable.fromWeb(res.body as any);
			} catch (error) {
				lastError = error instanceof Error ? error : new Error(String(error));

				if (signal?.aborted) break;

				if (attempt < retries) {
					this.progressManager.update({
						message: `Error fetching segment ${url}: ${(error as Error).message}. Retrying... (${attempt + 1}/${retries})`
					});
					await new Promise((res) => setTimeout(res, 1000 * (attempt + 1)));
					continue;
				}
			}
		}
		throw lastError;
	}

	/**
	 * Starts a segment request whose rejection is always observed.
	 *
	 * @remarks
	 * Segments are prefetched one ahead, so a failure further down the loop can
	 * abandon an in-flight request. Attaching the no-op handler up front keeps an
	 * abandoned rejection from surfacing as an unhandled rejection and killing
	 * the process; the awaiting caller still sees the original error.
	 */
	private startSegmentFetch(
		url: string,
		headers: Record<string, string>,
		timeoutMs: number,
		signal?: AbortSignal
	): Promise<NodeJS.ReadableStream> {
		const pending = this.fetchStream(url, headers, timeoutMs, signal);

		pending.catch(() => undefined);

		return pending;
	}

	/** Destroys a prefetched segment that will never be consumed. */
	private async abandonSegmentFetch(pending: Promise<NodeJS.ReadableStream> | null): Promise<void> {
		if (!pending) return;

		try {
			const readable = await pending;

			(readable as Readable)?.destroy?.();
		} catch {
			/* already rejected and handled by startSegmentFetch */
		}
	}

	private withDecrypt(readable: NodeJS.ReadableStream, segment: HlsSegment, key: Buffer | null): NodeJS.ReadableStream {
		if (!key || !segment.key || segment.key.method === 'NONE') return readable;

		this.progressManager.update({
			message: `Decrypting segment ${segment.sequence} with key ${segment.key.url} and IV ${segment.key.iv?.toString('hex') ?? 'derived'}`
		});

		/**
		 * RFC 8216 §5.2: when `IV` is absent the media sequence number of the
		 * segment is used, not its index within the playlist.
		 */
		const iv = segment.key.iv ?? this.sequenceIv(segment.sequence);

		const decipher = createDecipheriv('aes-128-cbc', key, iv);
		return readable.pipe(decipher);
	}

	private sequenceIv(sequence: number): Buffer {
		const iv = Buffer.alloc(16, 0);

		iv.writeUInt32BE(sequence >>> 0, 12);

		return iv;
	}

	// Helper: pipe ONE segment into the destination stream (no listener leak)

	/**
	 * Streams one segment, reporting bytes as they land.
	 *
	 * @returns Bytes written for this segment.
	 *
	 * @remarks
	 * Segmented downloads previously reported no byte counts at all, so transfer
	 * rate and ETA could never be derived for HLS - the only numbers on screen came
	 * from whichever plain download happened to update last.
	 */
	private async pipeOne(readable: NodeJS.ReadableStream, stream: Writable, onBytes: (written: number) => void): Promise<number> {
		let written = 0;

		for await (const chunk of readable) {
			const buffer = chunk as Buffer;

			written += buffer.length;

			onBytes(buffer.length);

			if (!stream.write(buffer)) {
				await once(stream, 'drain');
			}
		}

		return written;
	}

	private async stitchSegments(
		segments: HlsSegment[],
		timeoutMs: number,
		stream: Writable,
		headers: Record<string, any>,
		opts: DownloadOptions
	): Promise<void> {
		const signal = opts.signal;
		const itemKey = opts.pipelineItem?.identifier.key;
		const itemLabel = this.itemLabel(opts);

		if (!segments.length) return;

		const total = segments.length;

		this.progressManager.update({ totalSegments: total, message: 'Starting to stream segments...', itemKey, itemLabel });

		const keyCache = new Map<string, Buffer>();

		let downloadedBytes = 0;
		let lastByteReport = 0;

		const reportBytes = (written: number) => {
			downloadedBytes += written;

			const now = Date.now();

			// throttled so a fast segment does not emit an event per chunk
			if (now - lastByteReport < HlsClient.BYTE_REPORT_INTERVAL) return;

			lastByteReport = now;

			this.progressManager.update({ downloadedBytes, itemKey, itemLabel });
		};

		// --- Prefetch 1 ahead ---
		let nextPromise: Promise<NodeJS.ReadableStream> | null = this.startSegmentFetch(segments[0].url, headers, timeoutMs, signal);

		try {
			for (let i = 0; i < total; i++) {
				// an abort between segments stops the stitch immediately
				if (signal?.aborted) throw signal.reason instanceof Error ? signal.reason : new Error('Download aborted');

				// current segment stream
				const currentReadable = await nextPromise!;

				// kick off prefetch for next segment (if any)
				if (i + 1 < total) nextPromise = this.startSegmentFetch(segments[i + 1].url, headers, timeoutMs, signal);
				else nextPromise = null;

				// optional decrypt, resolved per segment so mid-playlist key rotation works
				const key = await this.resolveKey(segments[i], keyCache, timeoutMs, headers, signal);
				const readable = this.withDecrypt(currentReadable, segments[i], key);

				// write this segment fully before moving on
				await this.pipeOne(readable, stream, reportBytes);

				// progress callback (segment-level)
				this.progressManager.update({
					resolvedSegments: i + 1,
					currentSegment: segments[i].url,
					downloadedBytes,
					itemKey,
					itemLabel
				});
			}
		} catch (error) {
			await this.abandonSegmentFetch(nextPromise);

			throw error;
		}
	}

	private async resolveKey(
		segment: HlsSegment,
		cache: Map<string, Buffer>,
		timeoutMs: number,
		headers: Record<string, any>,
		signal?: AbortSignal
	): Promise<Buffer | null> {
		if (!segment.key || segment.key.method === 'NONE' || !segment.key.url) return null;

		const cached = cache.get(segment.key.url);
		if (cached) return cached;

		const key = await this.fetchKey(segment.key.url, timeoutMs, headers, signal);

		cache.set(segment.key.url, key);

		return key;
	}

	/**
	 * Checks whether a response should be handled as an HLS manifest.
	 *
	 * @param contentType Response content type.
	 * @param url Final response URL.
	 * @returns `true` when the response appears to be an HLS playlist.
	 */
	public isHlsManifest(contentType: string, url: string): boolean {
		return contentType.includes('application/vnd.apple.mpegurl') || url.includes('.m3u8');
	}

	/**
	 * Parses a media playlist into segments carrying the key in effect for each.
	 *
	 * @remarks
	 * `#EXT-X-KEY` applies to every segment that follows it until the next one, so
	 * key state is tracked while walking the playlist rather than read once. The
	 * media sequence number is tracked alongside because it is the implicit AES-128
	 * IV when a key declares no explicit `IV=`.
	 */
	private parseSegments(manifest: string, base: string, isFmp4: boolean): HlsSegment[] {
		const lines = manifest.split('\n').map((l) => l.trim());

		const segments: HlsSegment[] = [];

		let sequence = this.parseMediaSequence(manifest);
		let currentKey: ParseKey | null = null;

		for (const line of lines) {
			if (!line) continue;

			if (line.startsWith('#EXT-X-KEY')) {
				// fMP4 init segments are never AES-128 encrypted in this pipeline
				currentKey = isFmp4 ? null : this.parseKey(line, base);
				continue;
			}

			if (line.startsWith('#')) continue;

			segments.push({
				url: new URL(line, base).toString(),
				key: currentKey,
				sequence: sequence++
			});
		}

		return segments;
	}

	/**
	 * Estimates the byte size of a media playlist.
	 *
	 * @remarks
	 * `#EXT-X-BYTERANGE` gives an exact total when present. Otherwise the estimate
	 * is the selected variant's declared bandwidth over the summed segment
	 * durations, which costs no extra requests - probing every segment with a HEAD
	 * would mean one round trip per segment before a single byte could be sent.
	 */
	private estimatePlaylistBytes(masterManifest: string, mediaManifest: string, playlistUrl: string): number {
		const byteRanges = [...mediaManifest.matchAll(/#EXT-X-BYTERANGE:(\d+)/g)].map((match) => parseInt(match[1], 10));

		if (byteRanges.length) return byteRanges.reduce((total, length) => total + length, 0);

		const durationSeconds = [...mediaManifest.matchAll(/#EXTINF:\s*([\d.]+)/g)].reduce(
			(total, match) => total + parseFloat(match[1]),
			0
		);

		if (!durationSeconds) return 0;

		const variant = this.getVariants(masterManifest, playlistUrl).find((entry) => entry.url === playlistUrl);
		const bandwidth = variant?.bw ?? this.highestBandwidth(masterManifest);

		if (!bandwidth) return 0;

		return Math.round((bandwidth / 8) * durationSeconds);
	}

	private highestBandwidth(manifest: string): number {
		return [...manifest.matchAll(/BANDWIDTH=(\d+)/g)].reduce((highest, match) => Math.max(highest, parseInt(match[1], 10)), 0);
	}

	private parseMediaSequence(manifest: string): number {
		const match = manifest.match(/#EXT-X-MEDIA-SEQUENCE:\s*(\d+)/);

		return match ? parseInt(match[1], 10) : 0;
	}

	private getVariants(manifest: string, base: string): M3U8Variant[] {
		const lines = manifest.split('\n').map((l) => l.trim());
		const variants: M3U8Variant[] = [];

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];

			if (!line.includes('#EXT-X-STREAM-INF')) continue;

			const bw = parseInt(line.match(/BANDWIDTH=(\d+)/)?.[1] || '0', 10);

			const resMatch = line.match(/RESOLUTION=(\d+)x(\d+)/);
			const width = resMatch ? parseInt(resMatch[1], 10) : 0;
			const height = resMatch ? parseInt(resMatch[2], 10) : 0;

			/**
			 * The URI is only required to appear on some following line, so blank
			 * lines and interleaved tags are skipped instead of dropping the variant.
			 */
			const uri = this.findVariantUri(lines, i + 1);

			if (uri) {
				variants.push({
					url: new URL(uri, base).toString(),
					width,
					height,
					bw
				});
			}
		}

		return variants;
	}

	private findVariantUri(lines: string[], from: number): string | null {
		for (let i = from; i < lines.length; i++) {
			const line = lines[i];

			if (!line) continue;

			if (line.startsWith('#EXT-X-STREAM-INF')) return null;

			if (!line.startsWith('#')) return line;
		}

		return null;
	}

	private selectVariant(manifest: string, base: string, opts: DownloadOptions): string | null {
		const variants = this.getVariants(manifest, base);
		const { allowedVideoQuality } = opts;

		if (!variants.length) return null;

		// Sort by resolution first, fallback to bandwidth
		variants.sort((a, b) => {
			if (b.height !== a.height) return b.height - a.height;
			if (b.width !== a.width) return b.width - a.width;
			return b.bw - a.bw;
		});

		this.progressManager.update({ message: 'Selecting variants from manifest' });

		// If no preference, return best
		if (!allowedVideoQuality || allowedVideoQuality === VideoQuality.QUnknown) return variants[0].url;

		const targetHeight = mapQualityToHeight(allowedVideoQuality);

		// 1. Best match <= target
		const belowOrEqual = variants.find((v) => v.height <= targetHeight && v.height > 0);
		if (belowOrEqual) return belowOrEqual.url;

		// 2. Smallest above target
		const above = [...variants]
			.reverse() // smallest first
			.find((v) => v.height > targetHeight);

		if (above) return above.url;

		/**
		 * 3. Bandwidth-only playlists declare no RESOLUTION, so honour the requested
		 * quality against an approximate bitrate ladder instead of silently
		 * returning the highest variant.
		 */
		const byBandwidth = this.selectVariantByBandwidth(variants, targetHeight);
		if (byBandwidth) return byBandwidth;

		// 4. Final fallback
		return variants[0].url;
	}

	/** Approximate H.264 bitrate ceiling per resolution, used when RESOLUTION is absent. */
	private static readonly APPROX_BANDWIDTH_BY_HEIGHT: ReadonlyArray<readonly [number, number]> = [
		[2160, 14_000_000],
		[1440, 8_000_000],
		[1080, 4_500_000],
		[720, 2_500_000],
		[480, 1_200_000],
		[360, 700_000],
		[240, 400_000]
	];

	private selectVariantByBandwidth(variants: M3U8Variant[], targetHeight: number): string | null {
		const rated = variants.filter((v) => v.bw > 0);

		if (!rated.length) return null;

		const ladder = HlsClient.APPROX_BANDWIDTH_BY_HEIGHT;

		const entry = ladder.find(([height]) => height <= targetHeight) ?? ladder[ladder.length - 1];
		const targetBandwidth = entry[1];

		const descending = [...rated].sort((a, b) => b.bw - a.bw);

		// highest variant at or below the target bitrate, else the smallest available
		return (descending.find((v) => v.bw <= targetBandwidth) ?? descending[descending.length - 1]).url;
	}

	/**
	 * Parses a single `#EXT-X-KEY` tag.
	 *
	 * @remarks
	 * Attribute order in `EXT-X-KEY` is not fixed by RFC 8216, so each attribute is
	 * matched independently rather than assuming `METHOD` is followed by `URI`.
	 * Unsupported methods throw instead of silently writing undecrypted segments.
	 */
	private parseKey(line: string, base: string): ParseKey | null {
		const method = line.match(/METHOD=([A-Z0-9-]+)/)?.[1];

		if (!method || method === 'NONE') return null;

		if (method !== 'AES-128') {
			throw new Error(`Unsupported HLS encryption method: ${method}`);
		}

		const uri = line.match(/URI="([^"]+)"/)?.[1];

		if (!uri) return null;

		const rawIv = line.match(/IV=0[xX]([0-9a-fA-F]+)/)?.[1];

		this.progressManager.update({ message: `Parsed ${method} key from manifest (explicit IV: ${!!rawIv})` });

		return {
			method: 'AES-128',
			url: new URL(uri, base).toString(),
			iv: rawIv ? Buffer.from(rawIv.padStart(32, '0'), 'hex') : undefined
		};
	}

	/**
	 * Fetches an AES-128 key.
	 *
	 * @remarks
	 * Key endpoints are usually protected the same way segments are, so this sends
	 * the playlist headers (Referer/Origin included), bounds the request with a
	 * timeout, and retries transient failures rather than issuing a bare fetch that
	 * could hang forever.
	 */
	private async fetchKey(url: string, timeoutMs: number, headers: Record<string, any>, signal?: AbortSignal): Promise<Buffer> {
		const retries = 2;

		let lastError: Error | null = null;

		for (let attempt = 0; attempt <= retries; attempt++) {
			try {
				const res = await fetch(url, { headers, signal: this.linkSignal(timeoutMs, signal) });

				if (!res.ok) throw new Error(`Failed to fetch HLS key: ${url} (${res.status})`);

				const key = Buffer.from(await res.arrayBuffer());

				if (key.length !== 16) throw new Error(`Invalid AES-128 key length (${key.length} bytes) from ${url}`);

				return key;
			} catch (error) {
				lastError = error instanceof Error ? error : new Error(String(error));

				if (attempt < retries) {
					await new Promise((res) => setTimeout(res, 500 * (attempt + 1)));
					continue;
				}
			}
		}

		throw lastError ?? new Error(`Failed to fetch HLS key: ${url}`);
	}
}
