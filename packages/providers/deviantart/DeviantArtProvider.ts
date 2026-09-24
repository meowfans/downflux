import { Provider, providerPatterns } from '@types';
import { GenericContentProvider } from '@provider/shared';
import { type DeviantArtExecArgs } from './DeviantArtContracts';
import { DeviantArtParser } from './DeviantArtParser';
import { DeviantArtTransformer } from './DeviantArtTransformer';
import { DeviantArtPipeline } from './DeviantArtPipeline';

export class DeviantArtProvider extends GenericContentProvider<DeviantArtExecArgs> {
	constructor(url: string) {
		super(url, {
			provider: Provider.DeviantArt,
			urlPattern: providerPatterns[Provider.DeviantArt],
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
				requiresLogin: false,
				cloudflareChallenge: false,
				sniSpoofing: 'untested'
			},
			parser: DeviantArtParser,
			transformer: DeviantArtTransformer,
			pipeline: DeviantArtPipeline
		});
	}
}
