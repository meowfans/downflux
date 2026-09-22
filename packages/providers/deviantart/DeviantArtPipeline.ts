import { BasePipeline } from '@base';
import { NotImplementedException } from '@core/exceptions';
import { IdentifierContext } from '@contracts';
import { Provider } from '@types';
import { DeviantArtExecArgs, DeviantArtOutput } from './DeviantArtContracts';

export class DeviantArtPipeline extends BasePipeline<DeviantArtExecArgs, DeviantArtOutput> {
	protected override buildIdentifier(_ctx: IdentifierContext<DeviantArtOutput>): string {
		/**
		 * DeviantArt is still scaffolding. Failing here keeps the provider honest:
		 * the generated placeholder used to be normalized into a real directory
		 * name, so an unimplemented provider produced output that looked valid.
		 */
		throw new NotImplementedException(Provider.DeviantArt, 'buildIdentifier');
	}

	// override mapping method if needed
}
