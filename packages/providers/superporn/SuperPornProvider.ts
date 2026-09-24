import { BaseProvider } from '@base';
import { GenericException } from '@core/exceptions';
import { ExtractionTarget, Provider, providerPatterns } from '@types';
import { type SuperPornExecArgs, type SuperPornVideoOutput } from './SuperPornContracts';
import { SuperPornParser } from './SuperPornParser';
import { SuperPornTransformer } from './SuperPornTransformer';
import { SuperPornPipeline } from './SuperPornPipeline';
import { SuperPornMethods } from './SuperPornTypes';

/**
 * @class SuperPornProvider
 * @extends BaseProvider
 * Provider for SuperPorn video downloader.
 * Provides direct mp4 links
 *
 * @remarks
 * SuperPorn supports video downloading (canDownload: true).
 */
export class SuperPornProvider extends BaseProvider<SuperPornExecArgs> {
	protected readonly provider = Provider.SuperPorn;
	private readonly VIDEO_PATH_REGEX = /^https:\/\/(?:www\.)?superporn\.(?:com)\/video\/([a-zA-Z0-9-]+)$/i;

	constructor(url: string) {
		super(url, {
			provider: Provider.SuperPorn,
			urlPattern: providerPatterns[Provider.SuperPorn],
			metadata: {
				hasHls: false,
				type: 'adult',
				hlsIntegrated: false,
				mp4Integrated: true,
				requiresLogin: false,
				hasMp4: true,
				hasKvs: false,
				underGeoRestriction: false,
				requiresBrowser: false,
				canDownload: true,
				underDevelopment: true,
				cloudflareChallenge: false,
				sniSpoofing: 'untested'
			},
			parser: SuperPornParser,
			transformer: SuperPornTransformer,
			pipeline: SuperPornPipeline
		});
	}

	private get videoUrl(): string {
		if (this.VIDEO_PATH_REGEX.test(this.url)) return this.url;
		throw new GenericException('Invalid SuperPorn video URL', this.provider, SuperPornMethods.getVideo);
	}

	/**
	 * @returns `SuperPornVideoOutput` with video metadata and source URLs.
	 * Fetches video sources from the provided URL.
	 * @throws `GenericException` when the video sources cannot be extracted
	 * `true`
	 */
	public async getVideo(): Promise<SuperPornVideoOutput> {
		return await this.execute<SuperPornVideoOutput>({
			targets: [this.videoUrl],
			provider: this.provider,
			method: SuperPornMethods.getVideo,
			extractionTarget: ExtractionTarget.SOURCES,
			executionShape: 'single'
		});
	}
}
