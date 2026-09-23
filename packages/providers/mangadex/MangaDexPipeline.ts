import { BasePipeline } from '@base';
import { NotImplementedException } from '@core/exceptions';
import { type IdentifierContext } from '@contracts';
import { Provider } from '@types';
import { type MangaDexExecArgs, type MangaDexOutput } from './MangaDexContracts';

export class MangaDexPipeline extends BasePipeline<MangaDexExecArgs, MangaDexOutput> {
	protected override buildIdentifier(_ctx: IdentifierContext<MangaDexOutput>): string {
		/**
		 * MangaDex is still scaffolding. Failing here keeps the provider honest:
		 * the generated placeholder used to be normalized into a real directory
		 * name, so an unimplemented provider produced output that looked valid.
		 */
		throw new NotImplementedException(Provider.MangaDex, 'buildIdentifier');
	}

	// override mapping method if needed
}
