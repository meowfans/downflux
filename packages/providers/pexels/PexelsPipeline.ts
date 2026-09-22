import { BasePipeline } from '@base';
import { NotImplementedException } from '@core/exceptions';
import { IdentifierContext } from '@contracts';
import { Provider } from '@types';
import { PexelsExecArgs, PexelsOutput } from './PexelsContracts';

export class PexelsPipeline extends BasePipeline<PexelsExecArgs, PexelsOutput> {
	protected override buildIdentifier(_ctx: IdentifierContext<PexelsOutput>): string {
		/**
		 * Pexels is still scaffolding. Failing here keeps the provider honest:
		 * the generated placeholder used to be normalized into a real directory
		 * name, so an unimplemented provider produced output that looked valid.
		 */
		throw new NotImplementedException(Provider.Pexels, 'buildIdentifier');
	}

	// override mapping method if needed
}
