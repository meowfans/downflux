import { BaseParser } from '@base';
import { type DefaultExecutionResult } from '@contracts';
import { GenericException } from '@core/exceptions';
import { Provider } from '@types';
import { type TrashRealityOutput } from './TrashRealityContracts';

export class TrashRealityParser extends BaseParser {
	public override transform(html: string, sourceUrl: string): Partial<DefaultExecutionResult<Partial<TrashRealityOutput>>> {
		try {
			return {
				customFields: {} as TrashRealityOutput
			};
		} catch (error) {
			throw new GenericException('Unable to parse some fields:', Provider.TrashReality, 'TrashRealityParser', { cause: error });
		}
	}
}
