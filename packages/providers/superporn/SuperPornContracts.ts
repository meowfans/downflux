import { type DefaultExecutionResult, type DefaultVideoOutput, type ExecutionArgs } from '@contracts';

export interface SuperPornExecArgs extends ExecutionArgs {}
export interface SuperPornOutput extends DefaultExecutionResult, SuperPornVideoOutput {}

export interface SuperPornVideoOutput extends DefaultVideoOutput {
	duration: string;
	uploader: string;
	uploadedAt: string;
	width: number;
	height: number;
	quality: string;
}
