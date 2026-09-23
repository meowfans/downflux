import { type DefaultExecutionResult, type DefaultVideoOutput, type ExecutionArgs } from '@contracts';

export interface ColliderPornExecArgs extends ExecutionArgs {}
export interface ColliderPornOutput extends DefaultExecutionResult, ColliderPornVideoOutput {}

export interface ColliderPornVideoOutput extends DefaultVideoOutput {
	videoId: string;
	uploader: string;
}
