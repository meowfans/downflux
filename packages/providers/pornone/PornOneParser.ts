import { BaseParser } from '@base';
import { type DefaultExecutionResult } from '@contracts';
import { GenericException } from '@core/exceptions';
import { Provider, VideoQuality } from '@types';
import { type PornOneOutput } from './PornOneContracts';

/**
 * Extracts PornOne-specific metadata from fetched HTML.
 *
 * @remarks
 * Parsers keep DOM/string extraction separate from network and download code so provider page changes can be fixed in one place.
 */
export class PornOneParser extends BaseParser {
	public override transform(html: string, sourceUrl: string): Partial<DefaultExecutionResult<Partial<PornOneOutput>>> {
		try {
			return {
				customFields: {
					quality:
						this.collectByClassNames(html, 'vjs-tech', { includeInnerHTML: true })?.[0].innerHTML.match(
							/label="([^"]+)"/i
						)?.[1] ?? VideoQuality.QUnknown,
					pageUrl: sourceUrl,
					poster: this.extractMetaPropertyContent(html, 'og:image')
				} as PornOneOutput
			};
		} catch (error) {
			throw new GenericException('Unable to parse some fields:', Provider.PornOne, 'PornOneParser', { cause: error });
		}
	}
}
