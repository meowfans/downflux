import { BaseStrategy } from '@base';
import type { ProviderComponents } from '@contracts';
import type { ProgressManager } from '@core/progress';

/**
 * Supplies the transport strategy for the running job.
 *
 * @remarks
 * Most providers need no strategy at all, so the default is {@link BaseStrategy}.
 * The instance is created once and reused; strategies are stateless helpers.
 */
export class StrategyRegistry {
	private strategy: BaseStrategy | null = null;

	constructor(
		private readonly progressManager: ProgressManager,
		private readonly components: ProviderComponents = {}
	) {}

	public async getStrategy(): Promise<BaseStrategy> {
		if (this.strategy) return this.strategy;

		const StrategyClass = this.components.strategy ?? BaseStrategy;

		this.strategy = new StrategyClass(this.progressManager);

		return this.strategy;
	}
}
