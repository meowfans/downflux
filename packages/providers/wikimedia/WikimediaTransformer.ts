import { BaseTransformer } from '@base';
import { type DefaultExecutionResult } from '@contracts';
import { type WikimediaExecArgs, type WikimediaOutput } from './WikimediaContracts';
import { WikimediaMethods } from './WikimediaTypes';

type WikimediaTransformedOutput = DefaultExecutionResult<Partial<WikimediaOutput>>;

export class WikimediaTransformer extends BaseTransformer<WikimediaExecArgs, DefaultExecutionResult> {
	public async transform(url: string, request?: WikimediaExecArgs): Promise<DefaultExecutionResult> {
		const metadata = (await super.transform(url, request)) as WikimediaTransformedOutput;
		if (!request?.transformOutput) return metadata;

		switch (request?.method) {
			case WikimediaMethods.getVideo:
				return metadata;
			default:
				return metadata;
		}
	}
}
