import { type DefaultExecutionResult, type DefaultVideoOutput, type ExecutionArgs } from '@contracts';

export interface PornOneOutput extends DefaultExecutionResult, PornOneVideoOutput {
	quality?: string;
}

export interface PornOneExecArgs extends ExecutionArgs {}

export interface PornOneVideoOutput extends DefaultVideoOutput {
	categories?: string[];
	uploader: string;
	pornStars?: string[];
}
