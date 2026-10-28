import { type CoordinatorDependencies, type ProviderComponents } from '@contracts';
import { ExecutionCoordinator, TaskCoordinator } from '@core/coordinators';
import { PipelineRegistry, StrategyRegistry, TransformerRegistry } from '@core/registries';
import { HttpClient } from '@engine/http';
import { FileManager } from '@storage';
import { InumakiProgress } from 'inumaki';
import { Charanko, FFmpegEngine, HlsClient, StreamHttpClient } from 'charanko';

/**
 * Creates the default service dependency graph.
 *
 * @remarks
 * One graph per provider instance is intentional: `InumakiProgress` carries
 * per-job state, so sharing it across providers would interleave progress from
 * unrelated jobs. The graph itself is cheap because the undici connection pools
 * underneath it are process-wide and shared (see charanko's `BaseHttpClient`),
 * which is what previously leaked six pools per provider construction. Downloads
 * go through charanko; DownFlux keeps page fetching, extraction and scheduling.
 *
 * @param components Classes the provider contributes; anything omitted falls back to `Base*`.
 * @returns Default service dependencies
 */
export function createDefaultDependencies(components: ProviderComponents = {}): CoordinatorDependencies {
	const progress = new InumakiProgress('Job');

	const fileManager = new FileManager(new FFmpegEngine(progress), progress);

	const strategyRegistry = new StrategyRegistry(progress, components);

	const httpClient = new HttpClient(progress, components);
	const hlsClient = new HlsClient(progress);
	const charanko = new Charanko(fileManager, new StreamHttpClient(hlsClient, progress, strategyRegistry.strategy), progress);

	const pipelineRegistry = new PipelineRegistry(fileManager, components);

	const transformerRegistry = new TransformerRegistry(httpClient, hlsClient, progress, components);

	const taskCoordinator = new TaskCoordinator(charanko, fileManager, transformerRegistry, progress, pipelineRegistry);
	const executionCoordinator = new ExecutionCoordinator(transformerRegistry, taskCoordinator, progress, pipelineRegistry);

	return {
		httpClient,
		charanko,
		transformerRegistry,
		strategyRegistry,
		executionCoordinator,
		progress
	};
}
