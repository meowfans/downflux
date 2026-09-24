import { BaseProvider } from '@base';
import { GenericException } from '@core/exceptions';
import { ExtractionTarget, Provider, providerPatterns } from '@types';
import { type PornDoeExecArgs, type PornDoeVideoOutput } from './PornDoeContracts';
import { PornDoeParser } from './PornDoeParser';
import { PornDoeTransformer } from './PornDoeTransformer';
import { PornDoePipeline } from './PornDoePipeline';
import { PornDoeStrategy } from './PornDoeStrategy';
import { PornDoeMethods } from './PornDoeTypes';

/**
 * Public PornDoe provider entry point.
 *
 * @remarks
 * The provider owns URL validation, fluent execution options, and provider metadata.
 * Supports integrated MP4 downloads. Requires an external API. Marked under development so callers should expect provider-specific changes.
 * PornDoe supports video downloading (canDownload: true).
 */
export class PornDoeProvider extends BaseProvider<PornDoeExecArgs> {
	protected readonly provider = Provider.PornDoe;
	private readonly VIDEO_PATH_REGEX = /^https:\/\/(?:(?:www|de|en|fs|pt|es|fr|it)\.)?porndoe\.com\/watch\/([A-Za-z0-9]+)$/i;

	constructor(url: string) {
		super(url, {
			provider: Provider.PornDoe,
			urlPattern: providerPatterns[Provider.PornDoe],
			metadata: {
				hasHls: false,
				type: 'adult',
				hlsIntegrated: false,
				mp4Integrated: true,
				needsExternalAPI: true,
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
			parser: PornDoeParser,
			transformer: PornDoeTransformer,
			pipeline: PornDoePipeline,
			strategy: PornDoeStrategy
		});
	}

	private get videoUrl(): string {
		if (this.VIDEO_PATH_REGEX.test(this.url)) return this.url;

		throw new GenericException('Invalid video url', this.provider);
	}

	public async getVideo(): Promise<PornDoeVideoOutput> {
		return await this.execute<PornDoeVideoOutput>({
			targets: [this.videoUrl],
			provider: this.provider,
			method: PornDoeMethods.getVideo,
			executionShape: 'single',
			extractionTarget: ExtractionTarget.SOURCES
		});
	}
}
