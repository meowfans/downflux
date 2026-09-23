import { BasePipeline } from '@base';
import type { ExecutionArgs, PipelineItem, ProviderComponents } from '@contracts';
import type { FileManager } from '@storage';

/**
 * Builds downloadable items using the pipeline the provider supplied.
 *
 * @remarks
 * Falls back to {@link BasePipeline} when a provider declares none.
 */
export class PipelineRegistry {
	constructor(
		protected readonly fileManager: FileManager,
		private readonly components: ProviderComponents = {}
	) {}

	/**
	 * Converts normalized metadata into pipeline items.
	 *
	 * @param metadata Output of the transformer.
	 * @param request Execution request for the current job.
	 */
	public async build<TResult, TExec extends ExecutionArgs>(metadata: TResult, request: TExec): Promise<PipelineItem[]> {
		const PipelineClass = this.components.pipeline ?? BasePipeline;

		const pipeline = new PipelineClass(this.fileManager);

		return pipeline.build(metadata as never, request as never);
	}
}
