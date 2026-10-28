import { BaseStrategy } from '@base';

/**
 * Provides PerfectGirls-specific HTTP behavior.
 *
 * @remarks
 * Strategies isolate host fallbacks, headers, and transport quirks from shared HTTP clients.
 */
export class PerfectGirlsStrategy extends BaseStrategy {
	private readonly SUB_DOMAINS = ['perfectdamen.co', 'perfectgirls.xxx'];

	public override candidateUrls(url: string): string[] {
		return super.candidateUrls(url, this.SUB_DOMAINS);
	}
}
