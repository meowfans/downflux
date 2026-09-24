import { Provider, providerPatterns } from '@types';
import { GenericContentProvider } from '@provider/shared';
import { type InstagramExecArgs } from './InstagramContracts';
import { InstagramParser } from './InstagramParser';
import { InstagramTransformer } from './InstagramTransformer';
import { InstagramPipeline } from './InstagramPipeline';

export class InstagramProvider extends GenericContentProvider<InstagramExecArgs> {
	constructor(url: string) {
		super(url, {
			provider: Provider.Instagram,
			urlPattern: providerPatterns[Provider.Instagram],
			metadata: {
				hasHls: true,
				type: 'socialmedia',
				hlsIntegrated: false,
				hasMp4: true,
				mp4Integrated: false,
				hasKvs: false,
				underGeoRestriction: false,
				requiresBrowser: true,
				canDownload: true,
				underDevelopment: true,
				needsExternalAPI: true,
				requiresLogin: true,
				cloudflareChallenge: true,
				sniSpoofing: 'untested'
			},
			parser: InstagramParser,
			transformer: InstagramTransformer,
			pipeline: InstagramPipeline
		});
	}
}
