import { BaseTransformer } from '@base';
import { type DefaultExecutionResult } from '@contracts';
import { type UnsplashExecArgs, type UnsplashOutput } from './UnsplashContracts';
import { UnsplashMethods } from './UnsplashTypes';

type UnsplashTransformedOutput = DefaultExecutionResult<Partial<UnsplashOutput>>;

export class UnsplashTransformer extends BaseTransformer<UnsplashExecArgs, DefaultExecutionResult> {
	public async transform(url: string, request?: UnsplashExecArgs): Promise<DefaultExecutionResult> {
		const metadata = (await super.transform(url, request)) as UnsplashTransformedOutput;
		if (!request?.transformOutput) return metadata;

		switch (request?.method) {
			case UnsplashMethods.getVideo:
				return metadata;
			default:
				return metadata;
		}
	}
}
