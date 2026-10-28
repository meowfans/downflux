import { BaseStrategy } from '@base';

/**
 * Provides XGroovy-specific HTTP behavior.
 *
 * @remarks
 * Strategies isolate host fallbacks, headers, and transport quirks from shared HTTP clients.
 */
export class XGroovyStrategy extends BaseStrategy {
	private SUB_DOMAINS = [
		'xgroovy.com',
		'rt.xgroovy.com',
		'pt.xgroovy.com',
		'de.xgroovy.com',
		'es.xgroovy.com',
		'it.xgroovy.com',
		'jp.xgroovy.com',
		'ko.xgroovy.com',
		'nl.xgroovy.com',
		'pl.xgroovy.com',
		'fr.xgroovy.com',
		'xgroovy-fr.com'
	];

	public override candidateUrls(url: string): string[] {
		return super.candidateUrls(url, this.SUB_DOMAINS);
	}
}
