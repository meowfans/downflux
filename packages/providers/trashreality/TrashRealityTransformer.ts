import { BaseTransformer } from '@base';
import { type DefaultExecutionResult } from '@contracts';
import { type TrashRealityExecArgs, type TrashRealityOutput, type TrashRealityVideoOutput } from './TrashRealityContracts';
import { TrashRealityMethods } from './TrashRealityTypes';

type TrashRealityTransformedOutput = DefaultExecutionResult<Partial<TrashRealityOutput>>;

export class TrashRealityTransformer extends BaseTransformer<TrashRealityExecArgs, DefaultExecutionResult> {
	public async transform(url: string, request?: TrashRealityExecArgs): Promise<DefaultExecutionResult> {
		const metadata = (await super.transform(url, request)) as TrashRealityTransformedOutput;
		if (!request?.transformOutput) return metadata;

		switch (request?.method) {
			case TrashRealityMethods.getVideo:
				return metadata;
			default:
				return metadata;
		}
	}

	private toVideoOutput(request: TrashRealityExecArgs, metadata: TrashRealityTransformedOutput): TrashRealityVideoOutput {
		const trf = metadata.customFields as TrashRealityOutput;
		return {
			...trf
		};
	}
}
