import { BaseProvider } from '@base';
import { GenericException } from '@core/exceptions';
import { ExtractionTarget, Provider, providerPatterns, type VideoQuality } from '@types';
import { type PimpBunnyExecArgs, type PimpBunnyVideoOutput } from './PimpBunnyContracts';
import { PimpBunnyParser } from './PimpBunnyParser';
import { PimpBunnyPipeline } from './PimpBunnyPipeline';
import { PimpBunnyTransformer } from './PimpBunnyTransformer';
import { PimpBunnyMethods } from './PimpBunnyTypes';

/**
 * Public PimpBunny provider entry point.
 *
 * @remarks
 * The provider owns URL validation, fluent execution options, and provider metadata.
 * Supports integrated MP4 downloads, KVS video fields. Marked under development so callers should expect provider-specific changes.
 * PimpBunny supports video downloading (canDownload: true).
 */
export class PimpBunnyProvider extends BaseProvider<PimpBunnyExecArgs> {
	protected readonly provider = Provider.PimpBunny;
	private readonly VIDEO_URL_REGEX = /^https:\/\/(?:www\.)?pimpbunny\.com\/videos\/[\w]+\/?(?:\?.*)?/i;

	constructor(url: string) {
		super(url, {
			provider: Provider.PimpBunny,
			urlPattern: providerPatterns[Provider.PimpBunny],
			metadata: {
				hasHls: false,
				type: 'adult',
				hasMp4: true,
				hasKvs: true,
				requiresBrowser: false,
				mp4Integrated: true,
				sniSpoofing: 'untested',
				underGeoRestriction: false,
				underDevelopment: true,
				needsExternalAPI: false,
				canDownload: true
			},
			parser: PimpBunnyParser,
			transformer: PimpBunnyTransformer,
			pipeline: PimpBunnyPipeline
		});
	}

	private get videoUrl(): string {
		if (!this.VIDEO_URL_REGEX.test(this.url)) throw new GenericException('Invalid video url', this.provider);

		return this.url;
	}

	public async getVideo(quality?: VideoQuality): Promise<PimpBunnyVideoOutput> {
		return await this.execute({
			targets: [this.videoUrl],
			method: PimpBunnyMethods.getVideo,
			executionShape: 'single',
			extractionTarget: ExtractionTarget.SOURCES,
			provider: this.provider,
			allowedVideoQuality: quality
		});
	}
}
