import { Provider, providerPatterns } from '@types';
import { GenericContentProvider } from '@provider/shared';
import { type UnsplashExecArgs } from './UnsplashContracts';
import { UnsplashParser } from './UnsplashParser';
import { UnsplashTransformer } from './UnsplashTransformer';
import { UnsplashPipeline } from './UnsplashPipeline';

export class UnsplashProvider extends GenericContentProvider<UnsplashExecArgs> {
	constructor(url: string) {
		super(url, {
			provider: Provider.Unsplash,
			urlPattern: providerPatterns[Provider.Unsplash],
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
			parser: UnsplashParser,
			transformer: UnsplashTransformer,
			pipeline: UnsplashPipeline
		});
	}
}
