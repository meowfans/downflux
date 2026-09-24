import { Provider, providerPatterns } from '@types';
import { GenericContentProvider } from '@provider/shared';
import { type PexelsExecArgs } from './PexelsContracts';
import { PexelsParser } from './PexelsParser';
import { PexelsTransformer } from './PexelsTransformer';
import { PexelsPipeline } from './PexelsPipeline';

export class PexelsProvider extends GenericContentProvider<PexelsExecArgs> {
	constructor(url: string) {
		super(url, {
			provider: Provider.Pexels,
			urlPattern: providerPatterns[Provider.Pexels],
			metadata: {
				hasHls: true,
				type: 'gallery',
				hlsIntegrated: false,
				hasMp4: true,
				mp4Integrated: false,
				hasKvs: false,
				underGeoRestriction: false,
				requiresBrowser: false,
				canDownload: true,
				underDevelopment: true,
				needsExternalAPI: false,
				requiresLogin: false,
				cloudflareChallenge: false,
				sniSpoofing: 'untested'
			},
			parser: PexelsParser,
			transformer: PexelsTransformer,
			pipeline: PexelsPipeline
		});
	}
}
