import { type CoordinatorDependencies, type ProviderComponents } from '@contracts';
import { ExecutionCoordinator, TaskCoordinator, TransferCoordinator } from '@core/coordinators';
import { ProgressManager } from '@core/progress';
import { PipelineRegistry, StrategyRegistry, TransformerRegistry } from '@core/registries';
import { CliManager } from '@core/ui';
import { HlsClient, HttpClient, StreamHttpClient } from '@engine/http';
import { FFmpegEngine, FileManager } from '@storage';

/**
 * Creates the default service dependency graph.
 *
 * @remarks
 * One graph per provider instance is intentional: `ProgressManager` carries
 * per-job state, so sharing it across providers would interleave progress from
 * unrelated jobs. The graph itself is cheap because the undici connection pools
 * underneath it are process-wide and shared (see `BaseHttpClient`), which is what
 * previously leaked six pools per provider construction.
 *
 * @param components Classes the provider contributes; anything omitted falls back to `Base*`.
 * @returns Default service dependencies
 */
export function createDefaultDependencies(components: ProviderComponents = {}): CoordinatorDependencies {
	const progressManager = new ProgressManager();

	const cliManager = new CliManager(progressManager);

	const ffmpegEngine = new FFmpegEngine(progressManager);
	const fileManager = new FileManager(ffmpegEngine, progressManager);

	const strategyRegistry = new StrategyRegistry(progressManager, components);

	const httpClient = new HttpClient(progressManager, components);
	const hlsClient = new HlsClient(progressManager);
	const streamHttpClient = new StreamHttpClient(hlsClient, strategyRegistry, progressManager);

	const pipelineRegistry = new PipelineRegistry(fileManager, components);

	const transformerRegistry = new TransformerRegistry(httpClient, progressManager, components);

	const transferCoordinator = new TransferCoordinator(fileManager, streamHttpClient, progressManager);

	const taskCoordinator = new TaskCoordinator(transferCoordinator, fileManager, transformerRegistry, progressManager, pipelineRegistry);
	const executionCoordinator = new ExecutionCoordinator(transformerRegistry, taskCoordinator, progressManager, pipelineRegistry);

	return {
		httpClient,
		streamHttpClient,
		transformerRegistry,
		transferCoordinator,
		strategyRegistry,
		executionCoordinator,
		progressManager,
		cliManager
	};
}
