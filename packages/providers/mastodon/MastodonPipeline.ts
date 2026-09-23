import { BasePipeline } from '@base';
import { NotImplementedException } from '@core/exceptions';
import { type IdentifierContext } from '@contracts';
import { Provider } from '@types';
import { type MastodonExecArgs, type MastodonOutput } from './MastodonContracts';

export class MastodonPipeline extends BasePipeline<MastodonExecArgs, MastodonOutput> {
	protected override buildIdentifier(_ctx: IdentifierContext<MastodonOutput>): string {
		/**
		 * Mastodon is still scaffolding. Failing here keeps the provider honest:
		 * the generated placeholder used to be normalized into a real directory
		 * name, so an unimplemented provider produced output that looked valid.
		 */
		throw new NotImplementedException(Provider.Mastodon, 'buildIdentifier');
	}

	// override mapping method if needed
}
