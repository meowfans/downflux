import { type AuthenticatedCrawlOptions, type DefaultExecutionResult, type ExecutionArgs } from '@contracts';

export interface PinterestExecArgs extends ExecutionArgs {
	auth?: AuthenticatedCrawlOptions;
}
export interface PinterestOutput extends DefaultExecutionResult {}
