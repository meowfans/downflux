import { BasePipeline } from '@base';
import { NotImplementedException } from '@core/exceptions';
import { IdentifierContext } from '@contracts';
import { Provider } from '@types';
import { TumblrExecArgs, TumblrOutput } from './TumblrContracts';

export class TumblrPipeline extends BasePipeline<TumblrExecArgs, TumblrOutput> {
	protected override buildIdentifier(_ctx: IdentifierContext<TumblrOutput>): string {
		/**
		 * Tumblr is still scaffolding. Failing here keeps the provider honest:
		 * the generated placeholder used to be normalized into a real directory
		 * name, so an unimplemented provider produced output that looked valid.
		 */
		throw new NotImplementedException(Provider.Tumblr, 'buildIdentifier');
	}

	// override mapping method if needed
}
