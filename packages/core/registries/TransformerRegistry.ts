import { BaseTransformer } from '@base';
import type { ExecutionArgs, ProviderComponents } from '@contracts';
import type { ProgressManager } from '@core/progress';
import type { HttpClient } from '@engine/http';

/**
 * Resolves the transformer for the running job.
 *
 * @remarks
 * The transformer class is supplied by the provider rather than looked up from a
 * table of every provider. That is what keeps this layer free of provider
 * imports; the previous table referenced all 68, which made them mutually
 * reachable and impossible to tree-shake.
 */
export class TransformerRegistry {
	constructor(
		private readonly httpClient: HttpClient,
		private readonly progressManager: ProgressManager,
		private readonly components: ProviderComponents = {}
	) {}

	/**
	 * Fetches and normalizes one target.
	 *
	 * @param url Target to transform.
	 * @param request Execution request for the current job.
	 * @returns Provider-shaped metadata, or the default shape when the provider ships no transformer.
	 */
	public async transform<TArgs extends ExecutionArgs, TResult>(url: string, request: TArgs): Promise<TResult> {
		const TransformerClass = this.components.transformer ?? BaseTransformer;

		const transformer = new TransformerClass(this.httpClient, this.progressManager, this.components.parser);

		return (await transformer.transform(url, request)) as TResult;
	}
}
