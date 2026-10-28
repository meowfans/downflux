import { BaseStrategy } from '@base';

/**
 * Provides EPorner-specific HTTP behavior.
 *
 * @remarks
 * Strategies isolate host fallbacks, headers, and transport quirks from shared HTTP clients.
 */
export class EPornerStrategy extends BaseStrategy {
	private readonly SUB_DOMAINS = [
		'eporner.com',
		'fr.eporner.com',
		'pt.eporner.com',
		'jp.eporner.com',
		'ph.eporner.com',
		'de.eporner.com',
		'es.eporner.com',
		'it.eporner.com',
		'nl.eporner.com'
	];

	public override candidateUrls(url: string): string[] {
		return super.candidateUrls(url, this.SUB_DOMAINS);
	}
}
