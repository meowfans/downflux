import { BaseTransformer } from '@base';
import { type DefaultExecutionResult } from '@contracts';
import { type TumblrExecArgs, type TumblrOutput } from './TumblrContracts';
import { TumblrMethods } from './TumblrTypes';

type TumblrTransformedOutput = DefaultExecutionResult<Partial<TumblrOutput>>;

export class TumblrTransformer extends BaseTransformer<TumblrExecArgs, DefaultExecutionResult> {
	public async transform(url: string, request?: TumblrExecArgs): Promise<DefaultExecutionResult> {
		const metadata = (await super.transform(url, request)) as TumblrTransformedOutput;
		if (!request?.transformOutput) return metadata;

		switch (request?.method) {
			case TumblrMethods.getVideo:
				return metadata;
			default:
				return metadata;
		}
	}
}
