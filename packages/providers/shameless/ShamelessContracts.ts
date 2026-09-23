import { type DefaultExecutionResult, type DefaultFlashVarsVideoOutput, type ExecutionArgs } from '@contracts';

export interface ShamelessExecArgs extends ExecutionArgs {}
export interface ShamelessOutput extends DefaultExecutionResult, ShamelessVideoOutput {}

export interface ShamelessVideoOutput extends DefaultFlashVarsVideoOutput {}
