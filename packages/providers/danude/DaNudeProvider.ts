import { BaseProvider } from '@base';
import { GenericException } from '@core/exceptions';
import { ExtractionTarget, Provider, providerPatterns } from '@types';
import { type DaNudeExecArgs, type DaNudeVideoOutput } from './DaNudeContracts';
import { DaNudeParser } from './DaNudeParser';
import { DaNudeTransformer } from './DaNudeTransformer';
import { DaNudePipeline } from './DaNudePipeline';
import { DaNudeMethods } from './DaNudeTypes';

/**
 * Public DaNude provider entry point.
 *
 * @remarks
 * The provider owns URL validation, fluent execution options, and provider metadata.
 * Supports integrated MP4 downloads, KVS video fields. Marked under development so callers should expect provider-specific changes.
 * DaNude supports video downloading (canDownload: true).
 */
export class DaNudeProvider extends BaseProvider<DaNudeExecArgs> {
	protected readonly provider = Provider.DaNude;
	private readonly VIDEO_PATH_REGEX = /^https:\/\/(?:www\.)?danude\.(?:com)\/videos\/\d+\/[a-zA-Z0-9_-]+\/(?:\?.*)?/i;

	constructor(url: string) {
		super(url, {
			provider: Provider.DaNude,
			urlPattern: providerPatterns[Provider.DaNude],
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
			parser: DaNudeParser,
			transformer: DaNudeTransformer,
			pipeline: DaNudePipeline
		});
	}

	private get videoUrl(): string {
		if (this.VIDEO_PATH_REGEX.test(this.url)) return this.url;

		throw new GenericException('Invalid url format', this.provider);
	}

	public async getVideo(): Promise<DaNudeVideoOutput> {
		return await this.execute<DaNudeVideoOutput>({
			method: DaNudeMethods.getVideo,
			extractionTarget: ExtractionTarget.SOURCES,
			provider: this.provider,
			targets: [this.videoUrl],
			executionShape: 'single'
		});
	}
}
