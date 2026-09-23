import { BaseTransformer } from '@base';
import { type DefaultExecutionResult } from '@contracts';
import { type PinterestExecArgs, type PinterestOutput } from './PinterestContracts';
import { PinterestMethods } from './PinterestTypes';

type PinterestTransformedOutput = DefaultExecutionResult<Partial<PinterestOutput>>;

export class PinterestTransformer extends BaseTransformer<PinterestExecArgs, DefaultExecutionResult> {
	public async transform(url: string, request?: PinterestExecArgs): Promise<DefaultExecutionResult> {
		const metadata = (await super.transform(url, request)) as PinterestTransformedOutput;
		if (!request?.transformOutput) return metadata;

		switch (request?.method) {
			case PinterestMethods.getVideo:
				return metadata;
			default:
				return metadata;
		}
	}
}
