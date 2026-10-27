import { BaseTransformer } from '@base';
import { type DefaultExecutionResult } from '@contracts';
import { type OutputType, type VideoQuality } from '@types';
import { SegraLogger } from 'segra-logger';
import { type BeegExecArgs, type BeegOutput, type BeegVideoOutput } from './BeegContracts';
import { BeegMethods } from './BeegTypes';

type BeegTransformedOutput = DefaultExecutionResult<Partial<BeegOutput>>;

/**
 * @class `BeegTransformer`
 * Transforms raw data fetched from the Beeg API into a structured format suitable for video downloading.
 * The transformer is designed to work with the Beeg API's response structure and may need adjustments if the API changes.
 * Provides all quality videos along with posters
 */
export class BeegTransformer extends BaseTransformer<BeegExecArgs, DefaultExecutionResult | BeegVideoOutput> {
	private readonly REFERER = 'https://beeg.com/';
	private readonly VIDEO_ORIGIN = 'https://video.beeg.com';
	private readonly API_URL = 'https://store.externulls.com/video/play_url';

	public async transform(url: string, request?: BeegExecArgs): Promise<DefaultExecutionResult | BeegVideoOutput> {
		const metadata = (await super.transform(url, request)) as BeegTransformedOutput;
		if (!request?.transformOutput) return metadata;

		switch (request?.method) {
			case BeegMethods.getVideo:
				return await this.toVideoOutput(request, metadata);
			default:
				return {
					title: 'Beeg_title_not_found',
					description: 'Beeg_description_not_found',
					keywords: [],
					status: 200,
					anchors: [],
					images: [],
					links: [],
					sources: [],
					sourceUrl: url,
					videoSources: []
				};
		}
	}

	private async toVideoOutput(request: BeegExecArgs, metadata: BeegTransformedOutput): Promise<BeegVideoOutput> {
		const requestOptions = {
			...request,
			referer: this.REFERER,
			outputType: request.outputType as OutputType
		};

		const urlPath = await this.fetchText(`${this.API_URL}/${request.id}`, requestOptions);

		const videoUrl = new URL(urlPath, this.VIDEO_ORIGIN).toString();

		const manifest = await this.fetchText(videoUrl, requestOptions);

		const variants = this.getVariants(manifest, this.VIDEO_ORIGIN);

		SegraLogger.debug('%o', { urlPath, videoUrl, manifest, variants });

		return {
			description: metadata?.description ?? 'Beeg_description_not_found',
			username: metadata?.customFields?.username ?? 'unknown',
			title: metadata?.title ?? 'Beeg_title_not_found',
			poster: '',
			tags: [],
			videoId: request.id,
			pageUrl: request.entryUrl,
			videos: {
				hls: this.uniqueVideos(variants, {
					getQuality(video) {
						return `${video.height}p` as VideoQuality;
					},
					getUrl(video) {
						return video.url;
					}
				})
			}
		};
	}
}
