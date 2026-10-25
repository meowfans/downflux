import { BaseParser } from '@base';
import { type DefaultExecutionResult } from '@contracts';
import { GenericException } from '@core/exceptions';
import { Provider } from '@types';
import { type PimpBunnyOutput } from './PimpBunnyContracts';

export class PimpBunnyParser extends BaseParser {
	public override transform(html: string, sourceUrl: string): Partial<DefaultExecutionResult<Partial<PimpBunnyOutput>>> {
		try {
			return {
				customFields: {
					...this.getFlashVarsVideo(html, sourceUrl)
				} as PimpBunnyOutput
			};
		} catch (error) {
			throw new GenericException('Unable to parse some fields:', Provider.PimpBunny, 'PimpBunnyParser', { cause: error });
		}
	}
}
