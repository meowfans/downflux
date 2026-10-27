import { type CoordinatorDependencies, type ProviderComponents } from '@contracts';
import { ExecutionCoordinator, TaskCoordinator, TransferCoordinator } from '@core/coordinators';
import { PipelineRegistry, StrategyRegistry, TransformerRegistry } from '@core/registries';
import { HlsClient, HttpClient, StreamHttpClient } from '@engine/http';
import { FFmpegEngine, FileManager } from '@storage';
import { SegraProgress } from 'segra-logger';

/**
 * Creates the default service dependency graph.
 *
 * @remarks
 * One graph per provider instance is intentional: `SegraProgress` carries
 * per-job state, so sharing it across providers would interleave progress from
 * unrelated jobs. The graph itself is cheap because the undici connection pools
 * underneath it are process-wide and shared (see `BaseHttpClient`), which is what
 * previously leaked six pools per provider construction.
 *
 * @param components Classes the provider contributes; anything omitted falls back to `Base*`.
 * @returns Default service dependencies
 */
export function createDefaultDependencies(components: ProviderComponents = {}): CoordinatorDependencies {
	const progress = new SegraProgress('Job');

	const ffmpegEngine = new FFmpegEngine(progress);
	const fileManager = new FileManager(ffmpegEngine, progress);

	const strategyRegistry = new StrategyRegistry(progress, components);

	const httpClient = new HttpClient(progress, components);
	const hlsClient = new HlsClient(progress);
	const streamHttpClient = new StreamHttpClient(hlsClient, strategyRegistry, progress);

	const pipelineRegistry = new PipelineRegistry(fileManager, components);

	const transformerRegistry = new TransformerRegistry(httpClient, hlsClient, progress, components);

	const transferCoordinator = new TransferCoordinator(fileManager, streamHttpClient, progress);

	const taskCoordinator = new TaskCoordinator(transferCoordinator, fileManager, transformerRegistry, progress, pipelineRegistry);
	const executionCoordinator = new ExecutionCoordinator(transformerRegistry, taskCoordinator, progress, pipelineRegistry);

	return {
		httpClient,
		streamHttpClient,
		transformerRegistry,
		transferCoordinator,
		strategyRegistry,
		executionCoordinator,
		progress
	};
}
