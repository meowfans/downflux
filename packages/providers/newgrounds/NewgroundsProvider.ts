import { Provider } from '@types';
import { GenericContentProvider } from '@provider/shared';
import { type NewgroundsExecArgs } from './NewgroundsContracts';
import { NewgroundsParser } from './NewgroundsParser';
import { NewgroundsTransformer } from './NewgroundsTransformer';
import { NewgroundsPipeline } from './NewgroundsPipeline';

export class NewgroundsProvider extends GenericContentProvider<NewgroundsExecArgs> {
	constructor(url: string) {
		super(url, {
			provider: Provider.Newgrounds,
			urlPattern: /^(?:www\.)?newgrounds\.com$/i,
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
				needsExternalAPI: false,
				requiresLogin: false,
				cloudflareChallenge: false,
				sniSpoofing: 'untested'
			},
			parser: NewgroundsParser,
			transformer: NewgroundsTransformer,
			pipeline: NewgroundsPipeline
		});
	}
}
