/**
 * Every import here is type-only on purpose.
 *
 * @remarks
 * `contracts` describes shapes; it must not pull the runtime graph in behind
 * them. Importing these as values made the contracts layer depend on core,
 * engines and base at runtime, which closed a cycle through almost every module
 * in the package and left classes extending an undefined base at load time.
 */
import type { ProviderMetadata } from '@base';
import type { ExecutionCoordinator, TransferCoordinator } from '@core/coordinators';
import type { ProgressManager } from '@core/progress';
import type { StrategyRegistry, TransformerRegistry } from '@core/registries';
import type { CliManager } from '@core/ui';
import type { HttpClient, StreamHttpClient } from '@engine/http';
import { type Provider } from '@types';

export interface CoordinatorDependencies {
	httpClient: HttpClient;
	streamHttpClient: StreamHttpClient;
	transformerRegistry: TransformerRegistry;
	transferCoordinator: TransferCoordinator;
	executionCoordinator: ExecutionCoordinator;
	strategyRegistry: StrategyRegistry;
	progressManager: ProgressManager;
	cliManager: CliManager;
}

export interface RegistryCoordinator {
	name: string;
	parser?: boolean;
	pipeline?: boolean;
	transformer?: boolean;
	strategy?: boolean;
	method?: boolean;
}

export interface ProviderConfig {
	provider: Provider;
	urlPattern: RegExp;
	metadata: ProviderMetadata;
}
