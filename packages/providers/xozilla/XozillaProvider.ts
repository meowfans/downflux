import { BaseProvider } from '@base';
import { GenericException } from '@core/exceptions';
import { ExtractionTarget, Provider, providerPatterns } from '@types';
import { type XozillaExecArgs, type XozillaVideoOutput } from './XozillaContracts';
import { XozillaParser } from './XozillaParser';
import { XozillaTransformer } from './XozillaTransformer';
import { XozillaPipeline } from './XozillaPipeline';
import { XozillaMethods } from './XozillaTypes';

/**
 * Public Xozilla provider entry point.
 *
 * @remarks
 * The provider owns URL validation, fluent execution options, and provider metadata.
 * Supports integrated MP4 downloads, KVS video fields. Marked under development so callers should expect provider-specific changes.
 * Xozilla supports video downloading (canDownload: true).
 */
export class XozillaProvider extends BaseProvider<XozillaExecArgs> {
	protected readonly provider = Provider.Xozilla;
	private readonly VIDEO_PATH_REGEX = /^https:\/\/(?:www\.)?xozilla\.(?:com|xxx)\/videos\/\d+\/[a-zA-Z0-9_-]+\/(?:\?.*)?/i;

	constructor(url: string) {
		super(url, {
			provider: Provider.Xozilla,
			urlPattern: providerPatterns[Provider.Xozilla],
			metadata: {
				hasHls: false,
				type: 'adult',
				hasMp4: true,
				hasKvs: true,
				canDownload: true,
				hlsIntegrated: false,
				mp4Integrated: true,
				underDevelopment: true,
				requiresBrowser: false,
				sniSpoofing: 'untested',
				underGeoRestriction: false
			},
			parser: XozillaParser,
			transformer: XozillaTransformer,
			pipeline: XozillaPipeline
		});
	}

	private get videoUrl(): string {
		if (this.VIDEO_PATH_REGEX.test(this.url)) return this.url;

		throw new GenericException('Invalid url format', this.provider);
	}

	public async getVideo(): Promise<XozillaVideoOutput> {
		return await this.execute<XozillaVideoOutput>({
			method: XozillaMethods.getVideo,
			extractionTarget: ExtractionTarget.SOURCES,
			provider: this.provider,
			targets: [this.videoUrl],
			executionShape: 'single'
		});
	}
}
