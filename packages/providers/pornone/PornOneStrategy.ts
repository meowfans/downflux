import { BaseStrategy } from '@base';

/**
 * Provides PornOne-specific HTTP behavior.
 *
 * @remarks
 * Strategies isolate host fallbacks, headers, and transport quirks from shared HTTP clients.
 */
export class PornOneStrategy extends BaseStrategy {
	private readonly SUB_DOMAINS = ['pornone.com'];

	public override candidateUrls(url: string): string[] {
		return super.candidateUrls(url, this.SUB_DOMAINS);
	}
}
