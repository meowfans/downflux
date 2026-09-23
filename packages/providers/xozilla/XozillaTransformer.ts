import { BaseTransformer } from '@base';
import { type DefaultExecutionResult } from '@contracts';
import { type XozillaExecArgs, type XozillaOutput, type XozillaVideoOutput } from './XozillaContracts';
import { XozillaMethods } from './XozillaTypes';

type XozillaTransformedOutput = DefaultExecutionResult<Partial<XozillaOutput>>;

/**
 * Normalizes parsed Xozilla metadata into the public output shape.
 *
 * @remarks
 * Transformers bridge raw parser fields and typed provider results, including method-specific output mapping.
 */
export class XozillaTransformer extends BaseTransformer<XozillaExecArgs, DefaultExecutionResult | XozillaVideoOutput> {
	public async transform(url: string, request?: XozillaExecArgs): Promise<DefaultExecutionResult | XozillaVideoOutput> {
		const metadata = (await super.transform(url, request)) as XozillaTransformedOutput;

		if (!request?.transformOutput) return metadata;

		switch (request?.method) {
			case XozillaMethods.getVideo:
				return this.defaultFlashVarsVideoOutput({
					...metadata,
					customFields: metadata.customFields as XozillaVideoOutput
				});
			default:
				return metadata;
		}
	}
}
