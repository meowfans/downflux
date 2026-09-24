import { Provider, providerPatterns } from '@types';
import { GenericContentProvider } from '@provider/shared';
import { type WikimediaExecArgs } from './WikimediaContracts';
import { WikimediaParser } from './WikimediaParser';
import { WikimediaTransformer } from './WikimediaTransformer';
import { WikimediaPipeline } from './WikimediaPipeline';

export class WikimediaProvider extends GenericContentProvider<WikimediaExecArgs> {
	constructor(url: string) {
		super(url, {
			provider: Provider.Wikimedia,
			urlPattern: providerPatterns[Provider.Wikimedia],
			metadata: {
				hasHls: true,
				type: 'educational',
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
			parser: WikimediaParser,
			transformer: WikimediaTransformer,
			pipeline: WikimediaPipeline
		});
	}
}
