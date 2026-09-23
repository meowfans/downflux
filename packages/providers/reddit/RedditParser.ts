import { BaseParser } from '@base';
import { type DefaultExecutionResult } from '@contracts';
import { GenericException } from '@core/exceptions';
import { Provider } from '@types';
import { type RedditOutput } from './RedditContracts';

export class RedditParser extends BaseParser {
	public override transform(html: string, sourceUrl: string): Partial<DefaultExecutionResult<Partial<RedditOutput>>> {
		try {
			return {
				customFields: { sourceUrl, allUrls: this.extractAllUrls(html) } as RedditOutput
			};
		} catch (error) {
			throw new GenericException('Unable to parse some fields:', Provider.Reddit, 'RedditParser', { cause: error });
		}
	}
}
