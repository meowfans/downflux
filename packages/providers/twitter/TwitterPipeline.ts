import { BasePipeline } from '@base';
import { NotImplementedException } from '@core/exceptions';
import { type IdentifierContext } from '@contracts';
import { Provider } from '@types';
import { type TwitterExecArgs, type TwitterOutput } from './TwitterContracts';

export class TwitterPipeline extends BasePipeline<TwitterExecArgs, TwitterOutput> {
	protected override buildIdentifier(_ctx: IdentifierContext<TwitterOutput>): string {
		/**
		 * Twitter is still scaffolding. Failing here keeps the provider honest:
		 * the generated placeholder used to be normalized into a real directory
		 * name, so an unimplemented provider produced output that looked valid.
		 */
		throw new NotImplementedException(Provider.Twitter, 'buildIdentifier');
	}

	// override mapping method if needed
}
