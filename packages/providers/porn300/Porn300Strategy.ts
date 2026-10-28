import { BaseStrategy } from '@base';

/**
 * Provides Porn300-specific HTTP behavior.
 *
 * @remarks
 * Strategies isolate host fallbacks, headers, and transport quirks from shared HTTP clients.
 */
export class Porn300Strategy extends BaseStrategy {
	private SUB_DOMAINS = ['porn300.com', 'porn300.net'];

	public override candidateUrls(url: string): string[] {
		return super.candidateUrls(url, this.SUB_DOMAINS);
	}
}
