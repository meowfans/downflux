import { BaseParser } from '@base';
import { type DefaultExecutionResult } from '@contracts';
import { GenericException } from '@core/exceptions';
import { Provider } from '@types';
import { type PinterestOutput } from './PinterestContracts';

export class PinterestParser extends BaseParser {
	public override transform(html: string, sourceUrl: string): Partial<DefaultExecutionResult<Partial<PinterestOutput>>> {
		try {
			return {
				customFields: { sourceUrl, allUrls: this.extractAllUrls(html) } as PinterestOutput
			};
		} catch (error) {
			throw new GenericException('Unable to parse some fields:', Provider.Pinterest, 'PinterestParser', { cause: error });
		}
	}
}
