import { BasePipeline } from '@base';
import { NotImplementedException } from '@core/exceptions';
import { IdentifierContext } from '@contracts';
import { Provider } from '@types';
import { UnsplashExecArgs, UnsplashOutput } from './UnsplashContracts';

export class UnsplashPipeline extends BasePipeline<UnsplashExecArgs, UnsplashOutput> {
	protected override buildIdentifier(_ctx: IdentifierContext<UnsplashOutput>): string {
		/**
		 * Unsplash is still scaffolding. Failing here keeps the provider honest:
		 * the generated placeholder used to be normalized into a real directory
		 * name, so an unimplemented provider produced output that looked valid.
		 */
		throw new NotImplementedException(Provider.Unsplash, 'buildIdentifier');
	}

	// override mapping method if needed
}
