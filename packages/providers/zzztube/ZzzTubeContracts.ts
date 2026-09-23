import { type DefaultExecutionResult, type DefaultVideoOutput, type ExecutionArgs } from '@contracts';

export interface ZzzTubeExecArgs extends ExecutionArgs {}
export interface ZzzTubeOutput extends DefaultExecutionResult, ZzzTubeVideoOutput {}

export interface ZzzTubeVideoOutput extends DefaultVideoOutput {
	uploader: string;
	videoId: string;
}
