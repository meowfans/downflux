import { Provider, providerPatterns } from '@types';
import { GenericContentProvider } from '@provider/shared';
import { type DanbooruExecArgs } from './DanbooruContracts';
import { DanbooruParser } from './DanbooruParser';
import { DanbooruTransformer } from './DanbooruTransformer';
import { DanbooruPipeline } from './DanbooruPipeline';

export class DanbooruProvider extends GenericContentProvider<DanbooruExecArgs> {
	constructor(url: string) {
		super(url, {
			provider: Provider.Danbooru,
			urlPattern: providerPatterns[Provider.Danbooru],
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
			parser: DanbooruParser,
			transformer: DanbooruTransformer,
			pipeline: DanbooruPipeline
		});
	}
}
