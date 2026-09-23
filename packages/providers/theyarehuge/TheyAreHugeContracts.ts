import { type DefaultExecutionResult, type DefaultFlashVarsVideoOutput, type ExecutionArgs } from '@contracts';

export interface TheyAreHugeExecArgs extends ExecutionArgs {}
export interface TheyAreHugeOutput extends DefaultExecutionResult, TheyAreHugeVideoOutput {}

export interface TheyAreHugeVideoOutput extends DefaultFlashVarsVideoOutput {}
