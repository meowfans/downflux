import { BaseTransformer } from '@base';
import { type DefaultExecutionResult } from '@contracts';
import { type MegaTubeExecArgs, type MegaTubeOutput, type MegaTubeVideoOutput } from './MegaTubeContracts';
import { MegaTubeMethods } from './MegaTubeTypes';

/**
 * Normalizes parsed MegaTube metadata into the public output shape.
 *
 * @remarks
 * Transformers bridge raw parser fields and typed provider results, including method-specific output mapping.
 */
export class MegaTubeTransformer extends BaseTransformer<MegaTubeExecArgs, DefaultExecutionResult | MegaTubeVideoOutput> {
	public async transform(url: string, request?: MegaTubeExecArgs): Promise<DefaultExecutionResult | MegaTubeVideoOutput> {
		const metadata = (await super.transform(url, request)) as DefaultExecutionResult<Partial<MegaTubeOutput>>;

		if (!request?.transformOutput) return metadata;

		switch (request?.method) {
			case MegaTubeMethods.getVideo:
				return this.defaultFlashVarsVideoOutput({
					...metadata,
					customFields: metadata.customFields as MegaTubeVideoOutput
				});
			default:
				return metadata;
		}
	}
}
