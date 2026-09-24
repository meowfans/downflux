import { BaseProvider } from '@base';
import { GenericException } from '@core/exceptions';
import { ExtractionTarget, Provider, providerPatterns, type VideoQuality } from '@types';
import { type TrashRealityExecArgs, type TrashRealityVideoOutput } from './TrashRealityContracts';
import { TrashRealityParser } from './TrashRealityParser';
import { TrashRealityPipeline } from './TrashRealityPipeline';
import { TrashRealityTransformer } from './TrashRealityTransformer';
import { TrashRealityMethods } from './TrashRealityTypes';

export class TrashRealityProvider extends BaseProvider<TrashRealityExecArgs> {
	protected readonly provider = Provider.TrashReality;
	private readonly VIDEO_URL_PATTERN = /^https:\/\/(?:www\.)?trashreality\.com\/videos\/[\d]+\/?$/i;

	constructor(url: string) {
		super(url, {
			provider: Provider.TrashReality,
			/**
			 * The host pattern lives in `providerPatterns` so extraction and URL
			 * matching read the same regex. Replace the generated placeholder there,
			 * not here.
			 */
			urlPattern: providerPatterns[Provider.TrashReality],
			metadata: {
				hasHls: false,
				type: 'adult',
				hasMp4: true,
				hasKvs: false,
				requiresBrowser: false,
				sniSpoofing: 'untested',
				underGeoRestriction: false,
				underDevelopment: true,
				needsExternalAPI: false,
				canDownload: true
			},
			/**
			 * The provider supplies its own components. Core resolves them from here
			 * rather than from a registry, which is what keeps the core layer free of
			 * provider imports. Drop any line whose file you did not generate.
			 */
			parser: TrashRealityParser,
			transformer: TrashRealityTransformer,
			pipeline: TrashRealityPipeline
		});
	}

	private get videoUrl(): string {
		if (this.VIDEO_URL_PATTERN.test(this.url)) return this.url;
		throw new GenericException('Invalid TrashReality video URL', this.provider, TrashRealityMethods.getVideo);
	}

	public async getVideo(quality?: VideoQuality): Promise<TrashRealityVideoOutput> {
		return await this.execute<TrashRealityVideoOutput>({
			provider: this.provider,
			method: TrashRealityMethods.getVideo,
			executionShape: 'single',
			extractionTarget: ExtractionTarget.SOURCES,
			targets: [this.videoUrl],
			allowedVideoQuality: quality
		});
	}
}
