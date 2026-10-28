import { BaseStrategy } from '@base';

/**
 * Provides MyLust-specific HTTP behavior.
 *
 * @remarks
 * Strategies isolate host fallbacks, headers, and transport quirks from shared HTTP clients.
 */
export class MyLustStrategy extends BaseStrategy {
	private SUB_DOMAINS = ['mylust.com', 'ru.mylust.com', 'de.mylust.com'];

	public override candidateUrls(url: string): string[] {
		return super.candidateUrls(url, this.SUB_DOMAINS);
	}
}
