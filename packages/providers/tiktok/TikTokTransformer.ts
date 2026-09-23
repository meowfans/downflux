import { BaseTransformer } from '@base';
import { type DefaultExecutionResult } from '@contracts';
import { type TikTokExecArgs, type TikTokOutput } from './TikTokContracts';
import { TikTokMethods } from './TikTokTypes';

type TikTokTransformedOutput = DefaultExecutionResult<Partial<TikTokOutput>>;

export class TikTokTransformer extends BaseTransformer<TikTokExecArgs, DefaultExecutionResult> {
	public async transform(url: string, request?: TikTokExecArgs): Promise<DefaultExecutionResult> {
		const metadata = (await super.transform(url, request)) as TikTokTransformedOutput;
		if (!request?.transformOutput) return metadata;

		switch (request?.method) {
			case TikTokMethods.getVideo:
				return metadata;
			default:
				return metadata;
		}
	}
}
