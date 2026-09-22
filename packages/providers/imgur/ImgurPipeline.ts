import { BasePipeline } from '@base';
import { NotImplementedException } from '@core/exceptions';
import { IdentifierContext } from '@contracts';
import { Provider } from '@types';
import { ImgurExecArgs, ImgurOutput } from './ImgurContracts';

export class ImgurPipeline extends BasePipeline<ImgurExecArgs, ImgurOutput> {
	protected override buildIdentifier(_ctx: IdentifierContext<ImgurOutput>): string {
		/**
		 * Imgur is still scaffolding. Failing here keeps the provider honest:
		 * the generated placeholder used to be normalized into a real directory
		 * name, so an unimplemented provider produced output that looked valid.
		 */
		throw new NotImplementedException(Provider.Imgur, 'buildIdentifier');
	}

	// override mapping method if needed
}
