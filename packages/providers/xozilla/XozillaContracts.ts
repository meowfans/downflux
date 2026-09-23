import { type DefaultExecutionResult, type DefaultFlashVarsVideoOutput, type ExecutionArgs } from '@contracts';

export interface XozillaExecArgs extends ExecutionArgs {}
export interface XozillaOutput extends DefaultExecutionResult, XozillaVideoOutput {}

export interface XozillaVideoOutput extends DefaultFlashVarsVideoOutput {}
