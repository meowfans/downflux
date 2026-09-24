import { Provider, providerPatterns } from '@types';
import { GenericContentProvider } from '@provider/shared';
import { type PixivExecArgs } from './PixivContracts';
import { PixivParser } from './PixivParser';
import { PixivTransformer } from './PixivTransformer';
import { PixivPipeline } from './PixivPipeline';

export class PixivProvider extends GenericContentProvider<PixivExecArgs> {
	constructor(url: string) {
		super(url, {
			provider: Provider.Pixiv,
			urlPattern: providerPatterns[Provider.Pixiv],
			metadata: {
				hasHls: true,
				type: 'art',
				hlsIntegrated: false,
				hasMp4: true,
				mp4Integrated: false,
				hasKvs: false,
				underGeoRestriction: false,
				requiresBrowser: false,
				canDownload: true,
				underDevelopment: true,
				needsExternalAPI: true,
				requiresLogin: true,
				cloudflareChallenge: false,
				sniSpoofing: 'untested'
			},
			parser: PixivParser,
			transformer: PixivTransformer,
			pipeline: PixivPipeline
		});
	}
}
