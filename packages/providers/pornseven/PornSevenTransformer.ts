import { BaseTransformer } from '@base';
import { type DefaultExecutionResult } from '@contracts';
import { type PornSevenExecArgs, type PornSevenOutput, type PornSevenVideoOutput } from './PornSevenContracts';
import { PornSevenMethods } from './PornSevenTypes';

type PornSevenTransformedOutput = DefaultExecutionResult<Partial<PornSevenOutput>>;

/**
 * Normalizes parsed PornSeven metadata into the public output shape.
 *
 * @remarks
 * Transformers bridge raw parser fields and typed provider results, including method-specific output mapping.
 */
export class PornSevenTransformer extends BaseTransformer<PornSevenExecArgs, DefaultExecutionResult | PornSevenVideoOutput> {
	public async transform(url: string, request?: PornSevenExecArgs): Promise<DefaultExecutionResult | PornSevenVideoOutput> {
		const metadata = (await super.transform(url, request)) as PornSevenTransformedOutput;

		if (!request?.transformOutput) return metadata;

		switch (request?.method) {
			case PornSevenMethods.getVideo:
				return this.toVideoOutput(metadata);
			default:
				return metadata;
		}
	}

	private toVideoOutput(metadata: PornSevenTransformedOutput): PornSevenVideoOutput {
		const pornSevenMetadata = metadata.customFields as PornSevenOutput;
		return {
			tags: metadata?.keywords,
			title: metadata?.title,
			description: metadata?.description,
			pageUrl: pornSevenMetadata?.pageUrl,
			poster: pornSevenMetadata?.poster,
			videos: pornSevenMetadata?.videos,
			videoId: pornSevenMetadata?.videoId,
			uploader: pornSevenMetadata?.uploader
		};
	}
}
