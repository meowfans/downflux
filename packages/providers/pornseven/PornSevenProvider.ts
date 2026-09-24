import { BaseProvider } from '@base';
import { GenericException } from '@core/exceptions';
import { ExtractionTarget, Provider, providerPatterns } from '@types';
import { type PornSevenExecArgs, type PornSevenVideoOutput } from './PornSevenContracts';
import { PornSevenParser } from './PornSevenParser';
import { PornSevenTransformer } from './PornSevenTransformer';
import { PornSevenPipeline } from './PornSevenPipeline';
import { PornSevenMethods } from './PornSevenTypes';

/**
 * This website uses their own custom video player which makes it difficult to extract the video sources.
 * The player is also heavily obfuscated, making it hard to reverse engineer.
 *
 * We will resolve this later.
 *
 * @remarks
 * PornSeven does not support video downloading (canDownload: false).
 */
export class PornSevenProvider extends BaseProvider<PornSevenExecArgs> {
	protected readonly provider = Provider.PornSeven;
	private readonly VIDEO_PATH_REGEX = /^https:\/\/(?:www\.)?porn7\.(?:xxx)\/v\/(?:old|new)-archive\/\d+\/.*$/i;

	constructor(url: string) {
		super(url, {
			provider: Provider.PornSeven,
			urlPattern: providerPatterns[Provider.PornSeven],
			metadata: {
				hasHls: false,
				type: 'adult',
				hasMp4: true,
				mp4Integrated: false,
				hlsIntegrated: false,
				hasKvs: false,
				requiresBrowser: false,
				sniSpoofing: 'untested',
				underGeoRestriction: false,
				underDevelopment: true,
				canDownload: false
			},
			parser: PornSevenParser,
			transformer: PornSevenTransformer,
			pipeline: PornSevenPipeline
		});
	}

	private get videoUrl(): string {
		if (this.VIDEO_PATH_REGEX.test(this.url)) return this.url;

		throw new GenericException('Invalid video URL', this.provider);
	}

	public async getVideo(): Promise<PornSevenVideoOutput> {
		return await this.execute<PornSevenVideoOutput>({
			provider: this.provider,
			targets: [this.videoUrl],
			executionShape: 'single',
			extractionTarget: ExtractionTarget.SOURCES,
			method: PornSevenMethods.getVideo
		});
	}
}
