import { BaseTransformer } from '@base';
import { type DefaultExecutionResult } from '@contracts';
import { type RedditExecArgs, type RedditOutput } from './RedditContracts';
import { RedditMethods } from './RedditTypes';

type RedditTransformedOutput = DefaultExecutionResult<Partial<RedditOutput>>;

export class RedditTransformer extends BaseTransformer<RedditExecArgs, DefaultExecutionResult> {
	public async transform(url: string, request?: RedditExecArgs): Promise<DefaultExecutionResult> {
		const metadata = (await super.transform(url, request)) as RedditTransformedOutput;
		if (!request?.transformOutput) return metadata;

		switch (request?.method) {
			case RedditMethods.getVideo:
				return metadata;
			default:
				return metadata;
		}
	}
}
