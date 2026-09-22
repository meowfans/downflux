import { BasePipeline } from '@base';
import { NotImplementedException } from '@core/exceptions';
import { IdentifierContext } from '@contracts';
import { Provider } from '@types';
import { BehanceExecArgs, BehanceOutput } from './BehanceContracts';

export class BehancePipeline extends BasePipeline<BehanceExecArgs, BehanceOutput> {
	protected override buildIdentifier(_ctx: IdentifierContext<BehanceOutput>): string {
		/**
		 * Behance is still scaffolding. Failing here keeps the provider honest:
		 * the generated placeholder used to be normalized into a real directory
		 * name, so an unimplemented provider produced output that looked valid.
		 */
		throw new NotImplementedException(Provider.Behance, 'buildIdentifier');
	}

	// override mapping method if needed
}
