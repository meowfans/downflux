import { type DefaultExecutionResult, type DefaultFlashVarsVideoOutput, type ExecutionArgs } from '@contracts';

export interface DaNudeExecArgs extends ExecutionArgs {}
export interface DaNudeOutput extends DefaultExecutionResult, DaNudeVideoOutput {}

export interface DaNudeVideoOutput extends DefaultFlashVarsVideoOutput {}
