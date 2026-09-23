import { type DefaultExecutionResult, type DefaultFlashVarsVideoOutput, type ExecutionArgs } from '@contracts';

export interface InterracialExecArgs extends ExecutionArgs {}
export interface InterracialOutput extends DefaultExecutionResult, InterracialVideoOutput {}

export interface InterracialVideoOutput extends DefaultFlashVarsVideoOutput {}
