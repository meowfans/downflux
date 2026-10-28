import { BaseStrategy } from '@base';
import type { ProviderComponents } from '@contracts';
import type { InumakiProgress } from 'inumaki';

/**
 * Supplies the transport strategy for the running job.
 *
 * @remarks
 * Most providers need no strategy at all, so the default is {@link BaseStrategy}.
 * The instance is created once and reused; strategies are stateless helpers.
 */
export class StrategyRegistry {
	private instance: BaseStrategy | null = null;

	constructor(
		private readonly progress: InumakiProgress,
		private readonly components: ProviderComponents = {}
	) {}

	/** The provider's strategy, created on first use. */
	public get strategy(): BaseStrategy {
		const StrategyClass = this.components.strategy ?? BaseStrategy;

		return (this.instance ??= new StrategyClass(this.progress));
	}
}
