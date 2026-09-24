import { Provider, providerPatterns } from '@types';
import { GenericContentProvider } from '@provider/shared';
import { type TumblrExecArgs } from './TumblrContracts';
import { TumblrParser } from './TumblrParser';
import { TumblrTransformer } from './TumblrTransformer';
import { TumblrPipeline } from './TumblrPipeline';

export class TumblrProvider extends GenericContentProvider<TumblrExecArgs> {
	constructor(url: string) {
		super(url, {
			provider: Provider.Tumblr,
			urlPattern: providerPatterns[Provider.Tumblr],
			metadata: {
				hasHls: true,
				type: 'socialmedia',
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
			parser: TumblrParser,
			transformer: TumblrTransformer,
			pipeline: TumblrPipeline
		});
	}
}
