import { JobProgressStatus, ProgressDestination } from '@types';
import { DownloadResult } from './DownloadContracts';
import { PipelineItem } from './PipelineContracts';

/**
 * Progress for a single download item.
 *
 * @remarks
 * Downloads run concurrently, so byte counts, segment counts and transfer rates
 * belong to an item rather than to the job. Tracking them per item is what keeps
 * three simultaneous downloads from overwriting each other's numbers in the flat
 * job fields.
 */
export interface ItemProgressSnapshot {
	/** Stable identity of the pipeline item. */
	key: string;

	/** Short human label, typically the filename. */
	label: string;

	/** Whether the item is still transferring. */
	status: 'DOWNLOADING' | 'DOWNLOADED' | 'FAILED';

	downloadedBytes: number;

	/** Expected size, or 0 when the source declares none (segmented streams). */
	totalBytes: number;

	/** Bytes per second for this item. */
	speed: number;

	/** Seconds remaining for this item, or 0 when not estimable. */
	eta: number;

	totalSegments: number;
	resolvedSegments: number;
}

export interface JobProgressEvent {
	status: JobProgressStatus;
	progress: ProgressDestination;

	// Service targets
	currentTarget: string;
	totalTargets: number;
	resolvedTargets: number;

	// PipelineRegistry targets or to be downloaded items
	currentItem: string;
	totalItems: number;
	resolvedItems: number;

	// Redirected URL
	redirectedUrl: string;

	// HLS segments
	hlsPlaylistUrl: string;
	currentSegment: string;
	totalSegments: number;
	resolvedSegments: number;

	// Per item progress, aggregated across every active item
	downloadProgress: number; // %
	downloadedBytes: number;
	totalBytes: number;

	/**
	 * Identity of the item an update belongs to.
	 *
	 * @remarks
	 * Set by the transport layer so byte and segment counts land on the right item.
	 * Updates without it are treated as job-level.
	 */
	itemKey: string;

	/** Display label for {@link JobProgressEvent.itemKey}. */
	itemLabel: string;

	/** Every item currently transferring, plus the most recently finished ones. */
	activeItems: ItemProgressSnapshot[];

	// emitter start time
	startTime: number;
	lastUpdateTime: number;

	// metrics
	prevBytes: number;
	speed: number;
	eta: number;

	// Failed items (PipelineRegistry items)
	failed: number;

	// Error thrown in service
	error: Error;

	// Any custom message
	message: string;

	// On getting 404 status we need to fetch the url based on service
	item: PipelineItem;

	result: Omit<DownloadResult, 'buffer'>;
}
