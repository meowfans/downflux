import { BasePipeline } from '@base';
import { type IdentifierContext } from '@contracts';
import { NotImplementedException } from '@core/exceptions';
import { Provider } from '@types';
import { type TrashRealityExecArgs, type TrashRealityOutput } from './TrashRealityContracts';

export class TrashRealityPipeline extends BasePipeline<TrashRealityExecArgs, TrashRealityOutput> {
	protected override buildIdentifier(_ctx: IdentifierContext<TrashRealityOutput>): string {
		/**
		 * Replace this with the real identifier once extraction is implemented.
		 *
		 * Scaffolded providers throw instead of emitting a placeholder path, so an
		 * unfinished provider fails loudly rather than writing output that looks valid.
		 *
		 * A finished implementation looks like:
		 *   const { mediaType, id } = _ctx;
		 *   return this.pathBuilder.join('TrashReality', `${mediaType}/${id}`);
		 */
		throw new NotImplementedException(Provider.TrashReality, 'buildIdentifier');
	}

	// override mappings() to declare which URLs become downloadable items
}
