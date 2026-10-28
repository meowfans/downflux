import { type OutputType, type Provider, type VideoQuality } from '@types';
import { type Readable } from 'stream';
import { type HttpAgentOptions } from './ExecutionContracts';
import { type DirectoryOutputOptions, type TranscodeOptions } from './StorageContracts';

export interface DownloadOptions extends HttpFetchOptions {
	dirConfig?: DirectoryOutputOptions;
	transcodeOptions?: TranscodeOptions;
	outputType: OutputType;
	provider: Provider;
	noDownload?: boolean;
	allowedVideoQuality?: VideoQuality;
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

export interface VideoSourceOutput {
	quality: VideoQuality;
	url: string;
}
