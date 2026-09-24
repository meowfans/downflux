import { Provider, providerPatterns } from '@types';
import { GenericContentProvider } from '@provider/shared';
import { type ArtStationExecArgs } from './ArtStationContracts';
import { ArtStationParser } from './ArtStationParser';
import { ArtStationTransformer } from './ArtStationTransformer';
import { ArtStationPipeline } from './ArtStationPipeline';

export class ArtStationProvider extends GenericContentProvider<ArtStationExecArgs> {
	constructor(url: string) {
		super(url, {
			provider: Provider.ArtStation,
			urlPattern: providerPatterns[Provider.ArtStation],
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
			parser: ArtStationParser,
			transformer: ArtStationTransformer,
			pipeline: ArtStationPipeline
		});
	}
}
