import { BasePipeline } from '@base';
import { NotImplementedException } from '@core/exceptions';
import { type IdentifierContext } from '@contracts';
import { Provider } from '@types';
import { type PixivExecArgs, type PixivOutput } from './PixivContracts';

export class PixivPipeline extends BasePipeline<PixivExecArgs, PixivOutput> {
	protected override buildIdentifier(_ctx: IdentifierContext<PixivOutput>): string {
		/**
		 * Pixiv is still scaffolding. Failing here keeps the provider honest:
		 * the generated placeholder used to be normalized into a real directory
		 * name, so an unimplemented provider produced output that looked valid.
		 */
		throw new NotImplementedException(Provider.Pixiv, 'buildIdentifier');
	}

	// override mapping method if needed
}
