import { Provider, providerPatterns } from '@types';
import { GenericContentProvider } from '@provider/shared';
import { type PinterestExecArgs } from './PinterestContracts';
import { PinterestParser } from './PinterestParser';
import { PinterestTransformer } from './PinterestTransformer';
import { PinterestPipeline } from './PinterestPipeline';

export class PinterestProvider extends GenericContentProvider<PinterestExecArgs> {
	constructor(url: string) {
		super(url, {
			provider: Provider.Pinterest,
			urlPattern: providerPatterns[Provider.Pinterest],
			metadata: {
				hasHls: true,
				type: 'gallery',
				hlsIntegrated: false,
				hasMp4: true,
				mp4Integrated: false,
				hasKvs: false,
				underGeoRestriction: false,
				requiresBrowser: true,
				canDownload: true,
				underDevelopment: true,
				needsExternalAPI: true,
				requiresLogin: false,
				cloudflareChallenge: true,
				sniSpoofing: 'untested'
			},
			parser: PinterestParser,
			transformer: PinterestTransformer,
			pipeline: PinterestPipeline
		});
	}
}
