import { type DefaultExecutionResult, type DefaultVideoOutput, type ExecutionArgs } from '@contracts';

export interface SxyPornExecArgs extends ExecutionArgs {}
export interface SxyPornOutput extends DefaultExecutionResult, SxyPornVideoOutput {}

export interface SxyPornVideoOutput extends DefaultVideoOutput {
	duration: string;
	uploader: string;
}
