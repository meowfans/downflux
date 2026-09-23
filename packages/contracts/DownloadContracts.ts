import { type OutputType, type Provider, type VideoQuality } from '@types';
import { type Readable, type Writable } from 'stream';
import { type HttpAgentOptions } from './ExecutionContracts';
import { type PipelineItem } from './PipelineContracts';
import { type DirectoryOutputOptions, type TranscodeOptions } from './StorageContracts';

export interface DownloadOptions extends HttpFetchOptions {
	dirConfig?: DirectoryOutputOptions;
	transcodeOptions?: TranscodeOptions;
	outputType: OutputType;
	provider: Provider;
	reExtract?: (item: PipelineItem) => Promise<PipelineItem | null>;
	pipelineItem?: PipelineItem;
	noDownload?: boolean;
	allowedVideoQuality?: VideoQuality;

	/**
	 * Remaining CDN fallback attempts for this transfer.
	 *
	 * @remarks
	 * Carried on the request rather than on the client so one item cannot exhaust
	 * the budget of every other item sharing the same `StreamHttpClient`.
	 */
	cdnFallbackBudget?: number;

	/** Remaining expired-URL re-extraction attempts for this transfer. */
	reExtractBudget?: number;
}

/**
 * Result of a download operation.
 * Contains file metadata and the downloaded buffer.
 */
export interface DownloadResult {
	/** Requested download URL */
	url: string;

	/** Final URL after redirects */
	finalUrl: string;

	/** Generated filename with metadata */
	extendedFilename: string;

	/** Original filename from URL or response */
	originalFilename: string;

	/** File extension */
	extension: string;

	/** MIME type */
	mimeType: string;

	/** File size in bytes */
	sizeBytes: number;

	/** Path of the downloaded file */
	path: string;

	/** Service used for the download */
	provider: Provider;

	/**
	 * Approximate source size when the exact delivered length is unknown.
	 *
	 * @remarks
	 * Derived from the playlist for HLS, or the origin's `Content-Length` for a
	 * remuxed file. Use it to show progress; never send it as `Content-Length`.
	 */
	estimatedBytes?: number;

	/**
	 * Readable media, present only for `OutputType.STREAM`.
	 *
	 * @remarks
	 * The transfer runs while this is consumed, so it must be piped or destroyed
	 * promptly. Leaving it unread stalls the download behind the pipe buffer.
	 */
	stream?: Readable;
}

export interface FetchResult {
	html: string;
	buffer: Buffer;
	finalUrl: string;
	status: number;
	ok: boolean;
	headers: Record<string, string>;
}

export interface HLSStreamRequest {
	finalUrl: string;
	headers: Record<string, string>;
	isFmp4?: boolean;

	/**
	 * Exact byte length of what will be delivered, when it can be known.
	 *
	 * @remarks
	 * Only set when bytes pass through untouched. Remuxing changes the container,
	 * so the origin's length no longer describes the output and publishing it as
	 * `Content-Length` would truncate or stall the client.
	 */
	contentLength?: number;

	/** Best-effort source size, safe for progress UI but never for `Content-Length`. */
	estimatedBytes?: number;

	start: (stream: Writable, noDownload?: boolean) => Promise<void>;
}

/**
 * HTTP fetch options.
 * Controls request headers, retries, timeout, and referer.
 */
export interface HttpFetchOptions extends HttpAgentOptions {
	/**
	 * Abort signal honoured by every request this option reaches.
	 *
	 * @remarks
	 * Declared here rather than only on `ExecutionOptions` so the transport layer
	 * can actually observe it; previously it was visible to the scheduler but never
	 * reached a single fetch.
	 */
	signal?: AbortSignal;

	/** Custom request headers */
	headers?: Record<string, string>;

	/** Request timeout in milliseconds */
	timeoutMs?: number;

	/** Failed request retry count */
	retries?: number;

	/** Request referer URL */
	referer?: string;

	/** Optional FormData for POST requests */
	formData?: Record<string, string>;
}

export interface M3U8Variant {
	url: string;
	width: number;
	height: number;
	bw: number;
}

export interface ServiceStrategy {
	shouldFallback404?(url: string): boolean;
	getFallbackUrl?(url: string): string | null;
	shouldReExtract?(url: string): boolean;
	shouldResolveTextResponse?(url: string, contentType: string): boolean;
	getDirectVideoUrlFromText?(body: string, opts: DownloadOptions): string | null;
	getHostFallbackUrls?(url: string): string[];
}

export interface VideoSourceOutput {
	quality: VideoQuality;
	url: string;
}
