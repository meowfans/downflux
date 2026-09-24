import { Provider, providerPatterns } from '@types';
import { GenericContentProvider } from '@provider/shared';
import { type MangaDexExecArgs } from './MangaDexContracts';
import { MangaDexParser } from './MangaDexParser';
import { MangaDexTransformer } from './MangaDexTransformer';
import { MangaDexPipeline } from './MangaDexPipeline';

export class MangaDexProvider extends GenericContentProvider<MangaDexExecArgs> {
	constructor(url: string) {
		super(url, {
			provider: Provider.MangaDex,
			urlPattern: providerPatterns[Provider.MangaDex],
			metadata: {
				hasHls: true,
				type: 'manga',
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
			parser: MangaDexParser,
			transformer: MangaDexTransformer,
			pipeline: MangaDexPipeline
		});
	}
}
