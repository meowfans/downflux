import { ProviderMetadata, TagFilterOptions } from '@base';
import {
	AllowedExtension,
	ExecutionShape,
	ExecutionType,
	ExtractionTarget,
	OutputType,
	Provider,
	ShapeOutput,
	VideoCodec,
	VideoFormat,
	VideoQuality
} from '@types';
import { Dispatcher } from 'undici';
import { HttpFetchOptions, VideoSourceOutput } from './DownloadContracts';
import { PipelineHook, PipelineItem } from './PipelineContracts';
import { JobProgressEvent } from './ProgressContracts';
import { DirectoryOutputOptions, TranscodeOptions } from './StorageContracts';

export interface ExecutionArgs<S extends ExecutionShape = ExecutionShape> extends ExecutionOptions {
	provider: Provider;
	method: string;
	entryUrl: string;
	targets: string[];
	/**
	 * Internal runtime metadata describing the structural shape of extracted output.
	 * single -> TResult; multiple -> TResult[]
	 */
	executionShape: S;

	executionType?: ExecutionType;
	extractionTarget: ExtractionTarget;

	/** Provider capabilities and restrictions */
	providerMetadata?: ProviderMetadata;
}

/**
 * Optional credentials/session material for providers that need authenticated
 * or API-backed crawling.
 */
export interface AuthenticatedCrawlOptions {
	/** Raw Cookie header value copied from an authenticated browser session. */
	cookie?: string;

	/** Bearer token for API-backed providers. */
	bearerToken?: string;

	/** CSRF token header value when the provider requires one. */
	csrfToken?: string;

	/** API key for providers with public/private API access. */
	apiKey?: string;

	/** Provider-specific app/client identifier. */
	clientId?: string;

	/** User agent to pair with the authenticated session. */
	userAgent?: string;
}

/**
 * Configuration options for a DownFlux ExecutionCoordinator.
 * Combines fetch, extraction, pipeline, and output settings.
 */
export interface ExecutionOptions extends HttpFetchOptions {
	/** Directory output configuration */
	dirConfig?: DirectoryOutputOptions;

	/** Allowed file extensions */
	allowedExtensions?: AllowedExtension[];

	/** Allowed video quality */
	allowedVideoQuality?: VideoQuality;

	/** Preferred video format (e.g. hls, mp4) */
	preferredVideoFormat?: VideoFormat;

	/** Preferred video codec (e.g. h264, av1) */
	preferredVideoCodec?: VideoCodec;

	/** Tag filtering options */
	tagFilterOptions?: TagFilterOptions;

	/** Maximum number of items to download */
	maxDownloads?: number;

	/** Transform output to service-specific result type */
	transformOutput?: boolean;

	/** Download phase concurrency */
	concurrency?: number;

	/** Iterate only-- this prop is only used for logging http-services */
	noDownload?: boolean;

	/** Extraction phase concurrency */
	extractConcurrency?: number;

	/**
	 * Whether progress rendering may take over `stdout`/`stderr`.
	 *
	 * @remarks
	 * Off by default. Live progress redraws in place, so anything written directly
	 * to the terminal while a job renders is erased by the next frame. Enabling this
	 * patches both streams for the duration of the job so `console.log` survives.
	 *
	 * It is opt-in because patching a global belongs to the application that owns
	 * the process, not to a library running inside it.
	 *
	 * @defaultValue false
	 */
	captureConsole?: boolean;

	/**
	 * Whether `SIGINT`/`SIGTERM` should cancel the job before the process exits.
	 *
	 * @remarks
	 * Defaults to `true` for `OutputType.DEVICE` and `false` for every other mode.
	 *
	 * Device output writes partial `.part` files, so an interrupted run leaves
	 * debris unless something unwinds it. Progress rendering already registers a
	 * signal listener to restore the cursor, which suppresses Node's default exit
	 * and makes this library the owner of shutdown regardless - having claimed it,
	 * exiting without deleting the partial files it created is not defensible.
	 *
	 * `STREAM` defaults to `false` because it is used inside servers that own their
	 * own shutdown sequence; set it explicitly to override either default.
	 */
	abortOnSignal?: boolean;

	/** Maximum CDN fallback attempts allowed per download item. */
	maxCdnFallbacks?: number;

	/** Maximum expired-URL re-extraction attempts allowed per download item. */
	maxReExtractions?: number;

	/** Transcoding options */
	transcodeOptions?: TranscodeOptions;

	/** Download retry count */
	downloadRetries?: number;

	/** Delay between download retries in milliseconds */
	retryDelayMs?: number;

	/** PipelineRegistry lifecycle hooks */
	pipelineHooks?: PipelineHook[];

	/** Progress event handler */
	onProgress?: (event: JobProgressEvent) => void;

	/** Enables console progress logging */
	logProgress?: boolean;

	/** Output format for ExecutionCoordinator results */
	outputType?: OutputType;

	/** Job execution strategy */
	executionType?: ExecutionType;

	/** Abort signal for cancelling the ExecutionCoordinator */
	signal?: AbortSignal;
}

export interface HttpAgentOptions {
	userAgent?: string;

	enableSniSpoofing?: boolean;

	proxy?: ProxyOptions;

	dispatcher?: Dispatcher;
}

export interface ProxyOptions {
	type: 'http' | 'https' | 'socks4' | 'socks5';

	host: string;

	port: number;

	username?: string;

	password?: string;
}

export interface ExecutionResult<TResult, S extends ExecutionShape> extends ExecutionArgs {
	extracted: ShapeOutput<TResult, S>;
	downloaded: number;
	failed: number;
	errors: Error[];
	pipelineItems: PipelineItem[];

	/**
	 * Settles when background downloads finish.
	 *
	 * @remarks
	 * Present only for the output modes that download. Extraction still returns
	 * immediately so callers learn what is coming without waiting; this is the
	 * handle for callers that also need to know when it arrived. Previously the
	 * only signal was a `COMPLETED` progress event, and per-item failures were
	 * unreachable through `await`.
	 */
	completion?: Promise<JobSettlement>;
}

/**
 * Outcome of a job's download phase.
 *
 * @remarks
 * Resolves rather than rejects when individual items fail, because a partial
 * batch is a normal result: inspect `failed` and `errors` to decide. The promise
 * only rejects if the download pipeline itself could not run.
 */
export interface JobSettlement {
	downloaded: number;
	failed: number;
	errors: Error[];
}

/**
 * Default output structure for extractor operations.
 * Represents normalized metadata and extracted resources.
 */
export interface DefaultExecutionResult<TCustomFields = unknown> {
	/** Page title */
	title: string;

	/** Page description */
	description: string;

	/** SEO keywords */
	keywords: string[];

	/** HTTP status code */
	status: number;

	/** Final resolved URL */
	sourceUrl: string;

	/** Anchor links */
	anchors: string[];

	/** Image URLs */
	images: string[];

	/** Media source URLs */
	sources: string[];

	/** Video URLs */
	videoSources: string[];

	/** Hyper links */
	links: string[];

	/** Video poster URLs */
	videoPosters?: string[];

	/** URLs extracted from div href attributes */
	divHREFs?: string[];

	/** All discovered URLs */
	allUrls?: string[];

	/** URL category for pipeline routing */
	extractionTarget?: ExtractionTarget;

	/** Extensible service-specific fields */
	customFields?: TCustomFields;
}

export interface DefaultMetadata {
	title: string;
	tags: string[];
	description: string;
	pageUrl: string;
}

export interface VideosFormat {
	mp4?: VideoSourceOutput[];
	hls?: VideoSourceOutput[];
}

export interface DefaultVideoOutput extends DefaultMetadata {
	poster: string;
	videos: VideosFormat;
}

export interface DefaultFlashVarsVideoOutput extends DefaultVideoOutput {
	videoId: string;
	previews: string[];
	timelineScreenCount?: number;
	timelineScreens?: string[];
	starred?: string[];
	uploader?: string;
}

export type TagKeys =
	| '#'
	| 'A'
	| 'B'
	| 'C'
	| 'D'
	| 'E'
	| 'F'
	| 'G'
	| 'H'
	| 'I'
	| 'J'
	| 'K'
	| 'L'
	| 'M'
	| 'N'
	| 'O'
	| 'P'
	| 'Q'
	| 'R'
	| 'S'
	| 'T'
	| 'U'
	| 'V'
	| 'W'
	| 'X'
	| 'Y'
	| 'Z';
