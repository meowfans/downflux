import { BaseProvider } from '@base';
import { GenericException } from '@core/exceptions';
import { ExtractionTarget, Provider, providerPatterns } from '@types';
import { type BlackPornExecArgs, type BlackPornVideoOutput } from './BlackPornContracts';
import { BlackPornParser } from './BlackPornParser';
import { BlackPornTransformer } from './BlackPornTransformer';
import { BlackPornPipeline } from './BlackPornPipeline';
import { BlackPornMethods } from './BlackPornTypes';

/**
 * Provider for BlackPorn video platform.
 * Handles URL validation and video extraction for blackporn.com domain.
 *
 * @remarks
 * This provider manages the interaction with BlackPorn's platform and handles specific URL patterns
 * for video identification and metadata retrieval.
 * BlackPorn does not support video downloading (canDownload: false).
 */
export class BlackPornProvider extends BaseProvider<BlackPornExecArgs> {
	protected readonly provider = Provider.BlackPorn;
	private readonly VIDEO_PATH_REGEX = /^https:\/\/(?:www\.)?blackporn\.(?:tube)\/video\/\d+\/[a-zA-Z0-9_-]+\/(?:\?.*)?$/i;

	constructor(url: string) {
		super(url, {
			provider: Provider.BlackPorn,
			urlPattern: providerPatterns[Provider.BlackPorn],
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
				canDownload: false
			},
			parser: BlackPornParser,
			transformer: BlackPornTransformer,
			pipeline: BlackPornPipeline
		});
	}

	private get videoUrl(): string {
		if (this.VIDEO_PATH_REGEX.test(this.url)) return this.url;

		throw new GenericException('Invalid url format', this.provider);
	}

	public async getVideo(): Promise<BlackPornVideoOutput> {
		return await this.execute<BlackPornVideoOutput>({
			method: BlackPornMethods.getVideo,
			provider: this.provider,
			targets: [this.videoUrl],
			extractionTarget: ExtractionTarget.SOURCES,
			executionShape: 'single'
		});
	}
}
