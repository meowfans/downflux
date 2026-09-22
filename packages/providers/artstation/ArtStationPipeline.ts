import { BasePipeline } from '@base';
import { NotImplementedException } from '@core/exceptions';
import { IdentifierContext } from '@contracts';
import { Provider } from '@types';
import { ArtStationExecArgs, ArtStationOutput } from './ArtStationContracts';

export class ArtStationPipeline extends BasePipeline<ArtStationExecArgs, ArtStationOutput> {
	protected override buildIdentifier(_ctx: IdentifierContext<ArtStationOutput>): string {
		/**
		 * ArtStation is still scaffolding. Failing here keeps the provider honest:
		 * the generated placeholder used to be normalized into a real directory
		 * name, so an unimplemented provider produced output that looked valid.
		 */
		throw new NotImplementedException(Provider.ArtStation, 'buildIdentifier');
	}

	// override mapping method if needed
}
