import { type InumakiProgress } from 'inumaki';
import { TransferStrategy } from 'charanko';

/**
 * Default provider transport strategy.
 *
 * @remarks
 * Strategies exist for provider-specific HTTP behavior that does not belong in
 * parsers or pipelines, such as host fallbacks, direct URL resolution, expired
 * URL re-extraction, or text responses that should be treated as redirects.
 * The hooks themselves are charanko's `TransferStrategy`; this base only hands
 * providers the job's progress.
 */
export class BaseStrategy extends TransferStrategy {
	constructor(protected readonly progress: InumakiProgress) {
		super();
	}
}
