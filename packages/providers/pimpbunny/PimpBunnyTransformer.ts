import { BaseTransformer } from '@base';
import { type DefaultExecutionResult } from '@contracts';
import { type PimpBunnyExecArgs, type PimpBunnyOutput, type PimpBunnyVideoOutput } from './PimpBunnyContracts';
import { PimpBunnyMethods } from './PimpBunnyTypes';

type PimpBunnyTransformedOutput = DefaultExecutionResult<Partial<PimpBunnyOutput>>;

export class PimpBunnyTransformer extends BaseTransformer<PimpBunnyExecArgs, DefaultExecutionResult | PimpBunnyVideoOutput> {
	public async transform(url: string, request?: PimpBunnyExecArgs): Promise<DefaultExecutionResult | PimpBunnyVideoOutput> {
		const metadata = (await super.transform(url, request)) as PimpBunnyTransformedOutput;

		if (!request?.transformOutput) return metadata;

		switch (request?.method) {
			case PimpBunnyMethods.getVideo:
				return this.defaultFlashVarsVideoOutput({
					...metadata,
					customFields: metadata.customFields as PimpBunnyVideoOutput
				});
			default:
				return metadata;
		}
	}
}
