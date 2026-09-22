import { BasePipeline } from '@base';
import { NotImplementedException } from '@core/exceptions';
import { IdentifierContext } from '@contracts';
import { Provider } from '@types';
import { InstagramExecArgs, InstagramOutput } from './InstagramContracts';

export class InstagramPipeline extends BasePipeline<InstagramExecArgs, InstagramOutput> {
	protected override buildIdentifier(_ctx: IdentifierContext<InstagramOutput>): string {
		/**
		 * Instagram is still scaffolding. Failing here keeps the provider honest:
		 * the generated placeholder used to be normalized into a real directory
		 * name, so an unimplemented provider produced output that looked valid.
		 */
		throw new NotImplementedException(Provider.Instagram, 'buildIdentifier');
	}

	// override mapping method if needed
}
