import { Provider, providerPatterns } from '@types';
import { GenericContentProvider } from '@provider/shared';
import { type FlickrExecArgs } from './FlickrContracts';
import { FlickrParser } from './FlickrParser';
import { FlickrTransformer } from './FlickrTransformer';
import { FlickrPipeline } from './FlickrPipeline';

export class FlickrProvider extends GenericContentProvider<FlickrExecArgs> {
	constructor(url: string) {
		super(url, {
			provider: Provider.Flickr,
			urlPattern: providerPatterns[Provider.Flickr],
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
			parser: FlickrParser,
			transformer: FlickrTransformer,
			pipeline: FlickrPipeline
		});
	}
}
