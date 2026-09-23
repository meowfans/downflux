import { type ExecutionOptions, type ItemProgressSnapshot, type JobProgressEvent } from '@contracts';
import { type JobProgressStatus } from '@types';
import EventEmitter from 'events';

export interface ProgressEvents {
	progress: (state: Partial<JobProgressEvent>) => void;
}

/**
 * Manages progress updates during ExecutionCoordinator execution.
 *
 * Emits 'progress' events with the current state of the ExecutionCoordinator,
 * which can be used for rendering progress in the UI or CLI.
 *
 * The `update` method is used to update the current state of the ExecutionCoordinator
 * and emit progress events at a controlled interval to avoid excessive updates.
 *
 * `Requires`: must call `init` with ExecutionOptions before use to set up callbacks and options
 */
export class ProgressManager extends EventEmitter {
	private lastRender = 0;
	private readonly RENDER_INTERVAL = 500;

	/** Weight of the newest sample in the smoothed transfer rate. */
	private static readonly SPEED_SMOOTHING = 0.3;

	/** Live per-item progress, keyed by pipeline item identity. */
	private readonly items = new Map<string, ItemProgressSnapshot & { startedAt: number; lastUpdate: number }>();

	/** How many finished items stay visible after completing. */
	private static readonly FINISHED_RETENTION = 3;

	private options?: ExecutionOptions;

	private state: Partial<JobProgressEvent> = ProgressManager.initialState();

	private static initialState(): Partial<JobProgressEvent> {
		return {
			startTime: Date.now(),
			lastUpdateTime: Date.now(),
			downloadedBytes: 0,
			downloadProgress: 0,
			eta: 0,
			failed: 0,
			prevBytes: 0,
			resolvedItems: 0,
			resolvedSegments: 0,
			resolvedTargets: 0,
			speed: 0,
			totalBytes: 0,
			totalItems: 0,
			totalSegments: 0,
			totalTargets: 0,
			activeItems: []
		};
	}

	public override on<E extends keyof ProgressEvents>(eventName: E, listener: ProgressEvents[E]): this {
		return super.on(eventName, listener);
	}

	public override emit<E extends keyof ProgressEvents>(eventName: E, ...args: Parameters<ProgressEvents[E]>): boolean {
		return super.emit(eventName, ...args);
	}

	public override off<E extends keyof ProgressEvents>(eventName: E, listener: ProgressEvents[E]): this {
		return super.off(eventName, listener);
	}

	public override once<E extends keyof ProgressEvents>(eventName: E, listener: ProgressEvents[E]): this {
		return super.once(eventName, listener);
	}

	/**
	 * Binds a new job to this manager.
	 *
	 * @remarks
	 * State is cleared as well as options: counters, byte totals and the last error
	 * are cumulative within a job, so leaving them in place made a second run on the
	 * same provider instance start from the previous run's numbers.
	 */
	public init(options: ExecutionOptions) {
		this.options = options;
		this.state = ProgressManager.initialState();
		this.lastRender = 0;
		this.items.clear();
	}

	/** Rendering preferences for the current job. */
	public get renderOptions(): { captureConsole?: boolean } {
		return { captureConsole: this.options?.captureConsole };
	}

	private shouldRender(state: JobProgressStatus, now: number): boolean {
		return now - this.lastRender > this.RENDER_INTERVAL || state === 'COMPLETED' || state === 'ABORTED' || state === 'FAILED';
	}

	/**
	 * Records an update against one item and recomputes its rate and ETA.
	 *
	 * @remarks
	 * Rate is smoothed per item with an exponential moving average. ETA prefers
	 * bytes remaining, and falls back to the item's observed segments-per-second
	 * when the source declares no overall length, which is the normal case for HLS.
	 */
	private trackItem(params: Partial<JobProgressEvent>, now: number): void {
		const key = params.itemKey;

		if (!key) return;

		const existing = this.items.get(key);

		const entry = existing ?? {
			key,
			label: params.itemLabel ?? key,
			status: 'DOWNLOADING' as const,
			downloadedBytes: 0,
			totalBytes: 0,
			speed: 0,
			eta: 0,
			totalSegments: 0,
			resolvedSegments: 0,
			startedAt: now,
			lastUpdate: now
		};

		if (params.itemLabel) entry.label = params.itemLabel;
		if (params.totalBytes !== undefined) entry.totalBytes = params.totalBytes;
		if (params.totalSegments !== undefined) entry.totalSegments = params.totalSegments;
		if (params.resolvedSegments !== undefined) entry.resolvedSegments = params.resolvedSegments;

		if (params.status === 'DOWNLOADED' || params.status === 'FAILED') entry.status = params.status;

		if (params.downloadedBytes !== undefined) {
			const elapsedMs = now - entry.lastUpdate;
			const delta = params.downloadedBytes - entry.downloadedBytes;

			if (elapsedMs > 0 && delta >= 0) {
				const instant = (delta / elapsedMs) * 1000;

				entry.speed =
					entry.speed > 0
						? entry.speed * (1 - ProgressManager.SPEED_SMOOTHING) + instant * ProgressManager.SPEED_SMOOTHING
						: instant;
			}

			entry.downloadedBytes = params.downloadedBytes;
		}

		entry.eta = this.itemEta(entry, now);
		entry.lastUpdate = now;

		this.items.set(key, entry);

		this.retireFinishedItems();
	}

	private itemEta(entry: ItemProgressSnapshot & { startedAt: number }, now: number): number {
		if (entry.status !== 'DOWNLOADING') return 0;

		const remainingBytes = entry.totalBytes > 0 ? Math.max(entry.totalBytes - entry.downloadedBytes, 0) : 0;

		if (entry.speed > 0 && remainingBytes > 0) return remainingBytes / entry.speed;

		if (!entry.totalSegments || entry.resolvedSegments <= 0) return 0;

		const elapsedSeconds = (now - entry.startedAt) / 1000;

		if (elapsedSeconds <= 0) return 0;

		const segmentsPerSecond = entry.resolvedSegments / elapsedSeconds;

		if (segmentsPerSecond <= 0) return 0;

		return Math.max(entry.totalSegments - entry.resolvedSegments, 0) / segmentsPerSecond;
	}

	/** Keeps the finished tail short so the panel does not grow without bound. */
	private retireFinishedItems(): void {
		const finished = [...this.items.values()].filter((item) => item.status !== 'DOWNLOADING');

		if (finished.length <= ProgressManager.FINISHED_RETENTION) return;

		finished
			.sort((a, b) => a.lastUpdate - b.lastUpdate)
			.slice(0, finished.length - ProgressManager.FINISHED_RETENTION)
			.forEach((item) => this.items.delete(item.key));
	}

	/**
	 * Strips fields that the aggregate owns.
	 *
	 * @remarks
	 * Byte and segment counts belong to an item. Letting a raw update write them
	 * straight onto the job state is what made whichever item reported last
	 * overwrite the numbers for every other item in flight.
	 */
	private static withoutItemFields(params: Partial<JobProgressEvent>): Partial<JobProgressEvent> {
		const owned: Array<keyof JobProgressEvent> = ['downloadedBytes', 'totalBytes', 'totalSegments', 'resolvedSegments'];

		const jobParams: Partial<JobProgressEvent> = { ...params };

		for (const field of owned) delete jobParams[field];

		/**
		 * One item finishing is not the job finishing. Without this, the header
		 * flipped to DOWNLOADED as soon as the first of several concurrent files
		 * completed, while the rest were still transferring.
		 */
		if (params.itemKey && (params.status === 'DOWNLOADED' || params.status === 'FAILED')) delete jobParams.status;

		return jobParams;
	}

	/**
	 * Rolls per-item numbers up into the flat job fields.
	 *
	 * @remarks
	 * The flat fields stay on the event for consumers that only want one number.
	 * Totals are only meaningful when every active item declares its size, so a
	 * single unknown collapses the aggregate total to 0 rather than inventing one.
	 */
	private aggregate(): Partial<JobProgressEvent> {
		const snapshots = [...this.items.values()];

		if (!snapshots.length) return {};

		const active = snapshots.filter((item) => item.status === 'DOWNLOADING');

		// rate is a property of what is still moving; finished items contribute none
		const rated = active.length ? active : snapshots;

		/**
		 * Byte totals are counted over the same set as the bytes themselves.
		 * Summing progress across every item while testing sizes across only the
		 * active ones let a finished unsized download count toward the numerator
		 * and vanish from the denominator, reporting "587 MB / 22 KB" at 100%.
		 */
		const downloadedBytes = snapshots.reduce((sum, item) => sum + item.downloadedBytes, 0);
		const allSized = snapshots.every((item) => item.totalBytes > 0);
		const totalBytes = allSized ? snapshots.reduce((sum, item) => sum + item.totalBytes, 0) : 0;

		const totalSegments = snapshots.reduce((sum, item) => sum + item.totalSegments, 0);
		const resolvedSegments = snapshots.reduce((sum, item) => sum + item.resolvedSegments, 0);

		return {
			downloadedBytes,
			totalBytes,
			totalSegments,
			resolvedSegments,
			speed: rated.reduce((sum, item) => sum + item.speed, 0),
			// the job ends when its slowest item does
			eta: rated.reduce((slowest, item) => Math.max(slowest, item.eta), 0),
			downloadProgress: totalBytes > 0 ? (downloadedBytes / totalBytes) * 100 : 0,
			activeItems: snapshots.map(({ startedAt: _s, lastUpdate: _l, ...snapshot }) => snapshot)
		};
	}

	public update(params: Partial<JobProgressEvent>): void {
		const now = Date.now();

		this.trackItem(params, now);

		this.state = {
			...this.state,
			...ProgressManager.withoutItemFields(params),
			...this.aggregate(),
			lastUpdateTime: now
		};

		this.options?.onProgress?.(this.state as JobProgressEvent);

		if (!this.options?.logProgress) return;

		if (this.state?.status && this.shouldRender(this.state.status, now)) {
			this.emit('progress', Object.freeze({ ...this.state }));
			this.lastRender = now;
		}
	}
}
