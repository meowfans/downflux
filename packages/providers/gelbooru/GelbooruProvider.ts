import { Provider } from '@types';
import { GenericContentProvider } from '@provider/shared';
import { type GelbooruExecArgs } from './GelbooruContracts';
import { GelbooruParser } from './GelbooruParser';
import { GelbooruTransformer } from './GelbooruTransformer';

export class GelbooruProvider extends GenericContentProvider<GelbooruExecArgs> {
	constructor(url: string) {
		super(url, {
			provider: Provider.Gelbooru,
			urlPattern: /^(?:www\.)?gelbooru\.com$/i,
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
			parser: GelbooruParser,
			transformer: GelbooruTransformer
		});
	}
}
