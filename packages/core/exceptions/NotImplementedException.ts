import { ErrorCodes, Provider } from '@types';
import { BaseException } from './BaseException';

/**
 * @class NotImplementedException
 * @throws When a provider component is still scaffolding and cannot produce real output.
 *
 * @remarks
 * Scaffolded providers are exported and registered like any other provider, so
 * without an explicit guard they fail soft and emit placeholder paths or empty
 * results. Throwing here keeps an unimplemented provider loud instead of
 * producing output that looks valid.
 */
export class NotImplementedException extends BaseException {
	constructor(
		public readonly provider: Provider,
		public readonly method?: string,
		public readonly context: Record<string, any> = {},
		public readonly metadata?: any
	) {
		super({
			errorCode: ErrorCodes.NOT_IMPLEMENTED,
			message: NotImplementedException.buildMessage(provider, method),
			method,
			provider,
			context,
			metadata
		});
	}

	private static buildMessage(provider: Provider, method?: string): string {
		return [
			`ENOSYS: Provider is not implemented yet`,
			`ERROR_CODE=${ErrorCodes.NOT_IMPLEMENTED}`,
			`provider=${provider}`,
			method && `method=${method}`,
			`hint=this provider is still scaffolding, see the provider table in README.md`
		]
			.filter(Boolean)
			.join(' | ');
	}
}
