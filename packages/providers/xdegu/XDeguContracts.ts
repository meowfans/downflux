import { type DefaultExecutionResult, type DefaultFlashVarsVideoOutput, type ExecutionArgs } from '@contracts';

export interface XDeguExecArgs extends ExecutionArgs {}
export interface XDeguOutput extends DefaultExecutionResult, XDeguVideoOutput {}

export interface XDeguVideoOutput extends DefaultFlashVarsVideoOutput {}
