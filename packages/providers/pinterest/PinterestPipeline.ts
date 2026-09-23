import { BasePipeline } from '@base';
import { NotImplementedException } from '@core/exceptions';
import { type IdentifierContext } from '@contracts';
import { Provider } from '@types';
import { type PinterestExecArgs, type PinterestOutput } from './PinterestContracts';

export class PinterestPipeline extends BasePipeline<PinterestExecArgs, PinterestOutput> {
	protected override buildIdentifier(_ctx: IdentifierContext<PinterestOutput>): string {
		/**
		 * Pinterest is still scaffolding. Failing here keeps the provider honest:
		 * the generated placeholder used to be normalized into a real directory
		 * name, so an unimplemented provider produced output that looked valid.
		 */
		throw new NotImplementedException(Provider.Pinterest, 'buildIdentifier');
	}

	// override mapping method if needed
}
