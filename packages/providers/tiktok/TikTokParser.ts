import { BaseParser } from '@base';
import { type DefaultExecutionResult } from '@contracts';
import { GenericException } from '@core/exceptions';
import { Provider } from '@types';
import { type TikTokOutput } from './TikTokContracts';

export class TikTokParser extends BaseParser {
	public override transform(html: string, sourceUrl: string): Partial<DefaultExecutionResult<Partial<TikTokOutput>>> {
		try {
			return {
				customFields: { sourceUrl, allUrls: this.extractAllUrls(html) } as TikTokOutput
			};
		} catch (error) {
			throw new GenericException('Unable to parse some fields:', Provider.TikTok, 'TikTokParser', { cause: error });
		}
	}
}
