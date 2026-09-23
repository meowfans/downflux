import { BasePipeline } from '@base';
import { NotImplementedException } from '@core/exceptions';
import { type IdentifierContext } from '@contracts';
import { Provider } from '@types';
import { type WikiArtExecArgs, type WikiArtOutput } from './WikiArtContracts';

export class WikiArtPipeline extends BasePipeline<WikiArtExecArgs, WikiArtOutput> {
	protected override buildIdentifier(_ctx: IdentifierContext<WikiArtOutput>): string {
		/**
		 * WikiArt is still scaffolding. Failing here keeps the provider honest:
		 * the generated placeholder used to be normalized into a real directory
		 * name, so an unimplemented provider produced output that looked valid.
		 */
		throw new NotImplementedException(Provider.WikiArt, 'buildIdentifier');
	}

	// override mapping method if needed
}
