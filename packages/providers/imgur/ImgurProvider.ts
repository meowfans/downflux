import { Provider, providerPatterns } from '@types';
import { GenericContentProvider } from '@provider/shared';
import { type ImgurExecArgs } from './ImgurContracts';
import { ImgurParser } from './ImgurParser';
import { ImgurTransformer } from './ImgurTransformer';
import { ImgurPipeline } from './ImgurPipeline';

export class ImgurProvider extends GenericContentProvider<ImgurExecArgs> {
	constructor(url: string) {
		super(url, {
			provider: Provider.Imgur,
			urlPattern: providerPatterns[Provider.Imgur],
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
			parser: ImgurParser,
			transformer: ImgurTransformer,
			pipeline: ImgurPipeline
		});
	}
}
