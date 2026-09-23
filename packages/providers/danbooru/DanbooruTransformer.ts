import { BaseTransformer } from '@base';
import { type DefaultExecutionResult } from '@contracts';
import { type DanbooruExecArgs, type DanbooruOutput } from './DanbooruContracts';
import { DanbooruMethods } from './DanbooruTypes';

type DanbooruTransformedOutput = DefaultExecutionResult<Partial<DanbooruOutput>>;

export class DanbooruTransformer extends BaseTransformer<DanbooruExecArgs, DefaultExecutionResult> {
	public async transform(url: string, request?: DanbooruExecArgs): Promise<DefaultExecutionResult> {
		const metadata = (await super.transform(url, request)) as DanbooruTransformedOutput;
		if (!request?.transformOutput) return metadata;

		switch (request?.method) {
			case DanbooruMethods.getVideo:
				return metadata;
			default:
				return metadata;
		}
	}
}
