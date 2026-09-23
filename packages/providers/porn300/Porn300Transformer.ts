import { BaseTransformer } from '@base';
import { type DefaultExecutionResult } from '@contracts';
import { type Porn300ExecArgs, type Porn300Output, type Porn300VideoOutput } from './Porn300Contracts';
import { Porn300Methods } from './Porn300Types';

/**
 * Normalizes parsed Porn300 metadata into the public output shape.
 *
 * @remarks
 * Transformers bridge raw parser fields and typed provider results, including method-specific output mapping.
 */
export class Porn300Transformer extends BaseTransformer<Porn300ExecArgs, DefaultExecutionResult | Porn300VideoOutput> {
	public async transform(url: string, request?: Porn300ExecArgs): Promise<DefaultExecutionResult | Porn300VideoOutput> {
		const metadata = (await super.transform(url, request)) as DefaultExecutionResult<Partial<Porn300Output>>;

		if (!request?.transformOutput) return metadata;

		switch (request?.method) {
			case Porn300Methods.getVideo:
				return this.defaultVideoOutput(metadata, { filter: (source) => source?.includes('porn300') });
			default:
				return metadata;
		}
	}
}
