import { BaseParser } from '@base';
import { type DefaultExecutionResult } from '@contracts';
import { GenericException } from '@core/exceptions';
import { Provider } from '@types';
import { type XDeguOutput } from './XDeguContracts';

/**
 * Extracts XDegu-specific metadata from fetched HTML.
 *
 * @remarks
 * Parsers keep DOM/string extraction separate from network and download code so provider page changes can be fixed in one place.
 */
export class XDeguParser extends BaseParser {
	public override transform(html: string, sourceUrl: string): Partial<DefaultExecutionResult<Partial<XDeguOutput>>> {
		try {
			return {
				customFields: {
					...this.getFlashVarsVideo(html, sourceUrl)
				} as XDeguOutput
			};
		} catch (error) {
			throw new GenericException('Unable to parse some fields:', Provider.XDegu, 'XDeguParser', { cause: error });
		}
	}
}
