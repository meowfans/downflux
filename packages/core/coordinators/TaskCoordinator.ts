import {
	type DownloadResult,
	type ExecutionArgs,
	type ExecutionOptions,
	type ExecutionResult,
	type JobSettlement,
	type PipelineHook,
	type PipelineItem
} from '@contracts';
import { type PipelineRegistry, type TransformerRegistry } from '@core/registries';
import { type FileManager } from '@storage';
import { type ExecutionShape, type OutputType } from '@types';
import { type SegraProgress } from 'segra-logger';
import { type TransferCoordinator } from './TransferCoordinator';

/**
 * Coordinates concurrent work within an execution result.
 *
 * @remarks
 * The task coordinator owns concurrency, hooks, progress updates, and output
 * mode behavior. It keeps download scheduling separate from provider methods
 * and from the lower-level transfer code that writes individual items.
 */
export class TaskCoordinator {
	private static readonly Default_DOWNLOAD_CONCURRENCY = 5;

	constructor(
		private readonly transferCoordinator: TransferCoordinator,
		private readonly fileManager: FileManager,
		private readonly transformerRegistry: TransformerRegistry,
		private readonly progress: SegraProgress,
		private readonly pipelineRegistry: PipelineRegistry
	) {}

	private async processDownloadsInBackground<T, S extends ExecutionShape>(
		options: ExecutionOptions,
		outputType: OutputType,
		request: ExecutionArgs,
		pipelineHooks: PipelineHook[],
		result: ExecutionResult<T, S>
	): Promise<void> {
		const downloadConcurrency = options.concurrency ?? TaskCoordinator.Default_DOWNLOAD_CONCURRENCY;

		/**
		 * Items still outstanding per target. A target is only resolved once every
		 * item extracted from it has downloaded or failed; counting it on its first
		 * finished item showed `Targets 1/1` while most of its files were in flight.
		 */
		const pending = new Map(result.targets.map((target) => [target, 0]));

		for (const item of result.pipelineItems) pending.set(item.sourceUrl, (pending.get(item.sourceUrl) ?? 0) + 1);

		const settle = (item: PipelineItem) => pending.set(item.sourceUrl, (pending.get(item.sourceUrl) ?? 1) - 1);

		await this.runWithConcurrency(result.pipelineItems, downloadConcurrency, async (pipelineItem) => {
			if (options?.signal?.aborted) {
				this.progress.status('ABORTED', 'warn');
				this.reportCounts(result, pending, pipelineItem);
				return;
			}

			this.runExtractHooks(pipelineHooks, pipelineItem);

			this.progress.status('DOWNLOADING');
			this.reportCounts(result, pending, pipelineItem);

			try {
				const downloadResult = await this.transferCoordinator.download(pipelineItem, {
					...options,
					outputType,
					provider: request.provider,
					cdnFallbackBudget: options.maxCdnFallbacks,
					reExtractBudget: options.maxReExtractions,
					reExtract: async (item) => {
						const result = await this.transformerRegistry.transform(item.sourceUrl, { ...request, entryUrl: item.sourceUrl });

						const newItems = await this.pipelineRegistry.build(result, request);

						/**
						 * Re-extraction has to return the replacement for *this* item. Taking
						 * the first rebuilt item would silently swap quality or media type
						 * whenever a page yields more than one download.
						 */
						return (
							newItems.find((candidate) => candidate.identifier.key === item.identifier.key) ??
							newItems.find((candidate) => candidate.identifier.mediaType === item.identifier.mediaType) ??
							null
						);
					}
				});

				this.runDownloadHooks(pipelineHooks, pipelineItem, downloadResult);

				result.downloaded++;

				// one item finishing is not the job finishing, so only the item is marked done
				this.progress.transfer(pipelineItem.downloadUrl, { status: 'done' });
				settle(pipelineItem);
				this.reportCounts(result, pending, pipelineItem);
			} catch (err) {
				const normalizedError = err instanceof Error ? err : new Error(String(err));

				/**
				 * A cancelled transfer is not a failure. Counting it as one made an
				 * interrupted run look like a broken provider, and the partial file has
				 * already been removed by the transfer's own cleanup.
				 */
				if (options?.signal?.aborted) {
					this.progress.status('ABORTED', 'warn');
					this.progress.transfer(pipelineItem.downloadUrl, { status: 'failed' });
					this.reportCounts(result, pending, pipelineItem);

					return;
				}

				result.errors.push(normalizedError);
				result.failed++;

				this.progress.transfer(pipelineItem.downloadUrl, { status: 'failed' });
				this.progress.detail('Error', normalizedError.message, 'danger');
				settle(pipelineItem);
				this.reportCounts(result, pending, pipelineItem);
			}
		});

		this.reportCounts(result, pending);

		// a cancelled run did not complete, whatever the loop did on its way out
		if (options?.signal?.aborted) this.progress.end('ABORTED', 'warn');
		else this.progress.end('COMPLETED', 'success');
	}

	/**
	 * Mirrors the job counters onto the progress panel.
	 *
	 * @param pending Items still outstanding per target; a target with none left is resolved.
	 */
	private reportCounts<T, S extends ExecutionShape>(
		result: ExecutionResult<T, S>,
		pending: Map<string, number>,
		item?: PipelineItem
	): void {
		const resolvedTargets = result.targets.filter((target) => (pending.get(target) ?? 0) <= 0).length;

		if (item) {
			this.progress.detail('Source', item.sourceUrl);
			this.progress.detail('File', item.downloadUrl);
		}

		// items first, so no update shows a target resolved ahead of its last item
		this.progress.count('Items', result.downloaded, result.pipelineItems.length);
		this.progress.detail('Failed', result.failed || undefined, 'danger');
		this.progress.count('Targets', resolvedTargets, result.targets.length);
	}

	private runExtractHooks(hooks: PipelineHook[], item: PipelineItem): void {
		void Promise.allSettled(hooks.map((hook) => hook.onExtract?.(item))).then((results) => {
			for (const hookResult of results) {
				if (hookResult.status === 'rejected') {
					this.progress.detail(
						'Hook error',
						`extraction hook: ${String(hookResult.reason?.message ?? hookResult.reason)}`,
						'danger'
					);
				}
			}
		});
	}

	private runDownloadHooks(hooks: PipelineHook[], item: PipelineItem, result: DownloadResult): void {
		void Promise.allSettled(hooks.map((hook) => hook.onDownload?.({ item, result }))).then((results) => {
			for (const hookResult of results) {
				if (hookResult.status === 'rejected') {
					this.progress.detail(
						'Hook error',
						`download hook: ${String(hookResult.reason?.message ?? hookResult.reason)}`,
						'danger'
					);
				}
			}
		});
	}

	/**
	 * Runs asynchronous workers with a bounded concurrency limit.
	 *
	 * @param items Items to process.
	 * @param concurrency Maximum number of active workers.
	 * @param worker Async item handler.
	 */
	public async runWithConcurrency<T>(items: T[], concurrency: number, worker: (item: T, index: number) => Promise<void>): Promise<void> {
		if (!items.length) return;

		const workerCount = Math.max(1, Math.min(concurrency, items.length));
		let currentIndex = 0;

		const runners = Array.from({ length: workerCount }, async () => {
			while (true) {
				const index = currentIndex++;
				if (index >= items.length) return;
				await worker(items[index], index);
			}
		});

		await Promise.all(runners);
	}

	/**
	 * Persists a JSON execution result.
	 *
	 * @param result Execution result to serialize.
	 * @param options Output options containing directory configuration.
	 * @returns The original execution result.
	 */
	public async handleJsonOutput<T, S extends ExecutionShape>(
		result: ExecutionResult<T, S>,
		options: ExecutionOptions
	): Promise<ExecutionResult<T, S>> {
		this.fileManager.toJSON(result, options?.dirConfig?.directoryPath);
		return result;
	}

	/**
	 * Starts background download processing for device or buffer output.
	 *
	 * @param options Execution options.
	 * @param outputType Output mode.
	 * @param request Original execution request.
	 * @param pipelineHooks Hooks fired around extraction/download events.
	 * @param result Execution result to update while downloads progress.
	 */
	public handleDeviceOutputAsync<T, S extends ExecutionShape>(
		options: ExecutionOptions,
		outputType: OutputType,
		request: ExecutionArgs,
		pipelineHooks: PipelineHook[],
		result: ExecutionResult<T, S>
	): Promise<JobSettlement> {
		return this.processDownloadsInBackground<T, S>(options, outputType, request, pipelineHooks, result).then(
			() => ({ downloaded: result.downloaded, failed: result.failed, errors: result.errors }),
			(err) => {
				this.progress.detail(
					'Error',
					`Background download pipeline error: ${err instanceof Error ? err.message : String(err)}`,
					'danger'
				);
				this.progress.end('FAILED', 'danger');

				throw err instanceof Error ? err : new Error(String(err));
			}
		);
	}
}
