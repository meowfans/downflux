import { BaseProvider } from '@base';
import { ExtractionTarget, Provider, type VideoQuality } from '@types';
import { type PornsOkExecArgs, type PornsOkVideoOutput } from './PornsOkContracts';
import { PornsOkParser } from './PornsOkParser';
import { PornsOkTransformer } from './PornsOkTransformer';
import { PornsOkPipeline } from './PornsOkPipeline';
import { PornsOkMethods } from './PornsOkTypes';

/**
 * @class PornsOkProvider
 * Provides video operations for PornsOk.
 * remarks The provider validates URLs to ensure they belong to the PornsOk domain and supports fetching video sources based on specified quality.
 * Provides direct mp4 links
 * PornsOk supports video downloading (canDownload: true).
 */
export class PornsOkProvider extends BaseProvider<PornsOkExecArgs> {
	protected readonly provider = Provider.PornsOk;

	constructor(url: string) {
		super(url, {
			provider: Provider.PornsOk,
			urlPattern: /^(?:www\.)?pornsok\.(?:com)$/i,
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
			parser: PornsOkParser,
			transformer: PornsOkTransformer,
			pipeline: PornsOkPipeline
		});
	}

	/**
	 * Gets video sources based on the specified quality.
	 * remarks The method will extract video sources from the provided URL and filter them based on the specified quality, returning the relevant metadata and source URLs.
	 * true
	 * @returns `PornsOkVideoOutput` containing video metadata and source URLs.
	 * If the specified quality is not available, the method will return all available sources without filtering.
	 */
	public async getVideo(quality?: VideoQuality): Promise<PornsOkVideoOutput> {
		return await this.execute<PornsOkVideoOutput>({
			targets: [this.url],
			provider: this.provider,
			allowedVideoQuality: quality,
			executionShape: 'single',
			method: PornsOkMethods.getVideo,
			extractionTarget: ExtractionTarget.SOURCES
		});
	}
}
