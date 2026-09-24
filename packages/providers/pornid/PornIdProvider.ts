import { BaseProvider } from '@base';
import { GenericException } from '@core/exceptions';
import { ExtractionTarget, Provider, providerPatterns } from '@types';
import { type PornIdExecArgs, type PornIdVideoOutput } from './PornIdContracts';
import { PornIdParser } from './PornIdParser';
import { PornIdTransformer } from './PornIdTransformer';
import { PornIdPipeline } from './PornIdPipeline';
import { PornIdMethods } from './PornIdTypes';

/**
 * Public PornId provider entry point.
 *
 * @remarks
 * The provider owns URL validation, fluent execution options, and provider metadata.
 * Supports integrated MP4 downloads, KVS video fields. Marked under development so callers should expect provider-specific changes.
 * PornId supports video downloading (canDownload: true).
 */
export class PornIdProvider extends BaseProvider<PornIdExecArgs> {
	protected readonly provider = Provider.PornId;
	private readonly VIDEO_URL_REGEX = /^https:\/\/(?:www\.)?pornid\.(?:xxx|name)\/.*\.html(?:\?.*)?$/i;

	constructor(url: string) {
		super(url, {
			provider: Provider.PornId,
			urlPattern: providerPatterns[Provider.PornId],
			metadata: {
				hasHls: false,
				type: 'adult',
				hlsIntegrated: false,
				mp4Integrated: true,
				hasMp4: true,
				hasKvs: true,
				underGeoRestriction: false,
				requiresBrowser: false,
				canDownload: true,
				underDevelopment: true,
				cloudflareChallenge: false,
				sniSpoofing: 'untested'
			},
			parser: PornIdParser,
			transformer: PornIdTransformer,
			pipeline: PornIdPipeline
		});
	}

	private get videoUrl(): string {
		if (this.VIDEO_URL_REGEX.test(this.url)) return this.url;

		throw new GenericException('Invalid video URL', this.provider);
	}

	public async getVideo(): Promise<PornIdVideoOutput> {
		return await this.execute<PornIdVideoOutput>({
			targets: [this.videoUrl],
			provider: this.provider,
			method: PornIdMethods.getVideo,
			executionShape: 'single',
			extractionTarget: ExtractionTarget.SOURCES
		});
	}
}
