import { BasePipeline } from '@base';
import { NotImplementedException } from '@core/exceptions';
import { type IdentifierContext } from '@contracts';
import { Provider } from '@types';
import { type NewgroundsExecArgs, type NewgroundsOutput } from './NewgroundsContracts';

export class NewgroundsPipeline extends BasePipeline<NewgroundsExecArgs, NewgroundsOutput> {
	protected override buildIdentifier(_ctx: IdentifierContext<NewgroundsOutput>): string {
		/**
		 * Newgrounds is still scaffolding. Failing here keeps the provider honest:
		 * the generated placeholder used to be normalized into a real directory
		 * name, so an unimplemented provider produced output that looked valid.
		 */
		throw new NotImplementedException(Provider.Newgrounds, 'buildIdentifier');
	}

	// override mapping method if needed
}
