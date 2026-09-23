import { BasePipeline } from '@base';
import { NotImplementedException } from '@core/exceptions';
import { type IdentifierContext } from '@contracts';
import { Provider } from '@types';
import { type DanbooruExecArgs, type DanbooruOutput } from './DanbooruContracts';

export class DanbooruPipeline extends BasePipeline<DanbooruExecArgs, DanbooruOutput> {
	protected override buildIdentifier(_ctx: IdentifierContext<DanbooruOutput>): string {
		/**
		 * Danbooru is still scaffolding. Failing here keeps the provider honest:
		 * the generated placeholder used to be normalized into a real directory
		 * name, so an unimplemented provider produced output that looked valid.
		 */
		throw new NotImplementedException(Provider.Danbooru, 'buildIdentifier');
	}

	// override mapping method if needed
}
