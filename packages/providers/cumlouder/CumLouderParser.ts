import { BaseParser } from '@base';
import { type DefaultExecutionResult } from '@contracts';
import { GenericException } from '@core/exceptions';
import { Provider } from '@types';
import { type CumLouderOutput } from './CumLouderContracts';

/**
 * Extracts CumLouder-specific metadata from fetched HTML.
 *
 * @remarks
 * Parsers keep DOM/string extraction separate from network and download code so provider page changes can be fixed in one place.
 */
export class CumLouderParser extends BaseParser {
	public override transform(html: string, sourceUrl: string): Partial<DefaultExecutionResult<Partial<CumLouderOutput>>> {
		try {
			return {
				customFields: {
					pageUrl: sourceUrl,
					poster: this.extractVideoPosters(html)?.[0]
				} as CumLouderOutput
			};
		} catch (error) {
			throw new GenericException('Unable to parse some fields:', Provider.CumLouder, 'CumLouderParser', { cause: error });
		}
	}
}
