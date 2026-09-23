import { type DefaultExecutionResult, type DefaultFlashVarsVideoOutput, type ExecutionArgs } from '@contracts';

export interface ZbPornExecArgs extends ExecutionArgs {}
export interface ZbPornOutput extends DefaultExecutionResult, ZbPornVideoOutput {}

export interface ZbPornVideoOutput extends DefaultFlashVarsVideoOutput {}
