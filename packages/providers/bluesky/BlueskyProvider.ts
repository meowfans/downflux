import { Provider } from '@types';
import { GenericContentProvider } from '@provider/shared';
import { type BlueskyExecArgs } from './BlueskyContracts';
import { BlueskyParser } from './BlueskyParser';
import { BlueskyTransformer } from './BlueskyTransformer';
import { BlueskyPipeline } from './BlueskyPipeline';

export class BlueskyProvider extends GenericContentProvider<BlueskyExecArgs> {
	constructor(url: string) {
		super(url, {
			provider: Provider.Bluesky,
			urlPattern: /^(?:bsky\.app|(?:[a-z0-9-]+\.)*bsky\.social)$/i,
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
				needsExternalAPI: true,
				requiresLogin: false,
				cloudflareChallenge: false,
				sniSpoofing: 'untested'
			},
			parser: BlueskyParser,
			transformer: BlueskyTransformer,
			pipeline: BlueskyPipeline
		});
	}
}
