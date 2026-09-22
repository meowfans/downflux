import { ErrorCodes, Provider } from '@types';
import { BaseException } from './BaseException';

/**
 * @class UnsupportedOperationException
 * @throws When provider metadata declares that the requested operation cannot work.
 *
 * @remarks
 * `ProviderMetadata` documents capabilities such as `canDownload`, `requiresBrowser`
 * and `nonFunctional`. This exception is what turns those flags into enforced
 * behavior so the execution layer refuses impossible work up front instead of
 * failing deep inside the transport or storage layers.
 */
export class UnsupportedOperationException extends BaseException {
	constructor(
		public readonly reason: string,
		public readonly provider: Provider,
		public readonly method?: string,
		public readonly context: Record<string, any> = {},
		public readonly metadata?: any
	) {
		super({
			errorCode: ErrorCodes.UNSUPPORTED_OPERATION,
			message: UnsupportedOperationException.buildMessage(reason, provider, method),
			method,
			provider,
			context,
			metadata
		});
	}

	private static buildMessage(reason: string, provider: Provider, method?: string): string {
		return [
			`ENOTSUP: Unsupported operation for this provider`,
			`ERROR_CODE=${ErrorCodes.UNSUPPORTED_OPERATION}`,
			`reason=${reason}`,
			`provider=${provider}`,
			method && `method=${method}`
		]
			.filter(Boolean)
			.join(' | ');
	}
}
