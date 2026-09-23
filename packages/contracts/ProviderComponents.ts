import type { BaseParser, BasePipeline, BaseProvider, BaseStrategy, BaseTransformer } from '@base';
import type { ProgressManager } from '@core/progress';
import type { HttpClient } from '@engine/http';
import type { FileManager } from '@storage';
import type { ExecutionShape } from '@types';
import type { ExecutionArgs } from './ExecutionContracts';

/**
 * The classes a provider contributes to the execution flow.
 *
 * @remarks
 * Each provider declares its own parts instead of the core layer looking them up
 * by enum. That inversion is what keeps `core` from importing `providers`: the
 * registries used to reference all 68 of them, which closed an import cycle
 * through `base` and made every provider reachable from any entry point, so a
 * consumer importing one provider still paid for all of them.
 *
 * Anything omitted falls back to the corresponding `Base*` behaviour.
 */
export interface ProviderComponents {
	/** Extracts provider-specific fields out of fetched HTML. */
	parser?: new () => BaseParser;

	/** Fetches a target and normalizes it into the provider's output contract. */
	transformer?: new (
		httpClient: HttpClient,
		progressManager: ProgressManager,
		parser?: new () => BaseParser
	) => BaseTransformer<ExecutionArgs<ExecutionShape>, unknown>;

	/** Turns normalized metadata into downloadable items. */
	pipeline?: new (fileManager: FileManager) => BasePipeline<ExecutionArgs<ExecutionShape>, never>;

	/** Provider-specific transport behaviour such as CDN fallback. */
	strategy?: new (progressManager: ProgressManager) => BaseStrategy;
}

/** Narrow alias used where only the provider class itself is needed. */
export type AnyProvider = BaseProvider<ExecutionArgs<ExecutionShape>>;
