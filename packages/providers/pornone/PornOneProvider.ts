import { BaseProvider } from '@base';
import { Provider, providerPatterns } from '@types';
import { type PornOneExecArgs, type PornOneVideoOutput } from './PornOneContracts';
import { PornOneParser } from './PornOneParser';
import { PornOneTransformer } from './PornOneTransformer';
import { PornOnePipeline } from './PornOnePipeline';
import { PornOneStrategy } from './PornOneStrategy';
import { PornOneMethods } from './PornOneTypes';

/**
 * @class PornOneProvider
 * Provider for PornOne video downloader.
 * Still under `development` due to cloudflare challenge.
 * Provides direct mp4 links
 * Currently it does not downloads
 *
 * @remarks
 * PornOne does not support video downloading (canDownload: false).
 */
export class PornOneProvider extends BaseProvider<PornOneExecArgs> {
	protected readonly provider = Provider.PornOne;

	constructor(url: string) {
		super(url, {
			provider: Provider.PornOne,
			urlPattern: providerPatterns[Provider.PornOne],
			metadata: {
				hasHls: false,
				type: 'adult',
				hasMp4: true,
				hlsIntegrated: false,
				mp4Integrated: true,
				hasKvs: false,
				underGeoRestriction: false,
				requiresBrowser: false,
				canDownload: false,
				underDevelopment: true,
				cloudflareChallenge: true,
				sniSpoofing: 'untested'
			},
			parser: PornOneParser,
			transformer: PornOneTransformer,
			pipeline: PornOnePipeline,
			strategy: PornOneStrategy
		});
	}

	public async getVideo(): Promise<PornOneVideoOutput> {
		return await this.execute<PornOneVideoOutput>({
			targets: [this.url],
			provider: this.provider,
			method: PornOneMethods.getVideo,
			executionShape: 'single'
		});
	}
}
