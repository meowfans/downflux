import { BaseProvider } from '@base';
import { GenericException } from '@core/exceptions';
import { ExtractionTarget, Provider } from '@types';
import { BeegExecArgs, BeegVideoOutput } from './BeegContracts';
import { BeegMethods } from './BeegTypes';

/**
 * @class BeegProvider
 * @extends BaseProvider
 * Provider for Beeg video downloader.
 * Provides m3u8 files and converts them to mp4 using ffmpeg
 * Dependencies: - ffmpeg (for m3u8 to mp4 conversion)
 *
 * @remarks
 * Beeg supports video downloading (canDownload: true).
 */
export class BeegProvider extends BaseProvider<BeegExecArgs> {
	protected readonly provider = Provider.Beeg;
	private readonly VIDEO_PATH_REGEX = /^https:\/\/(?:www\.)?beeg\.com\/-0([0-9]+)\/?$/i;

	constructor(url: string) {
		super(url, {
			provider: Provider.Beeg,
			urlPattern: /^(?:www\.)?beeg\.(?:com)$/i,
			metadata: {
				hasHls: true,
				type: 'adult',
				hasMp4: true,
				hlsIntegrated: true,
				mp4Integrated: true,
				hasKvs: false,
				underGeoRestriction: true,
				requiresBrowser: false,
				canDownload: true,
				underDevelopment: true,
				cloudflareChallenge: false,
				needsExternalAPI: true,
				sniSpoofing: 'working'
			}
		});
	}

	/**
	 * Resolves the video id and its canonical URL together.
	 *
	 * @remarks
	 * These were previously a getter that assigned `this.VIDEO_ID` as a side effect,
	 * which meant `getVideo` only worked because `targets` happened to be evaluated
	 * before `id` in the request literal. Returning both makes the order irrelevant.
	 */
	private resolveVideo(): { videoId: string; videoUrl: string } {
		const matched = this.url.match(this.VIDEO_PATH_REGEX)?.[1];

		if (!matched) throw new GenericException('Video id is missing or not found', this.provider, BeegMethods.getVideo);

		return {
			videoId: matched.replace(/^-0/i, ''),
			videoUrl: `https://beeg.com/${matched}`
		};
	}

	public async getVideo(): Promise<BeegVideoOutput> {
		const { videoId, videoUrl } = this.resolveVideo();

		return await this.execute<BeegVideoOutput>({
			targets: [videoUrl],
			executionShape: 'single',
			provider: this.provider,
			method: BeegMethods.getVideo,
			extractionTarget: ExtractionTarget.SOURCES,
			id: videoId
		});
	}
}
