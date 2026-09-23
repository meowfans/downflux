import { type DefaultExecutionResult, type DefaultFlashVarsVideoOutput, type ExecutionArgs } from '@contracts';

export interface MomVidsExecArgs extends ExecutionArgs {}
export interface MomVidsOutput extends DefaultExecutionResult, MomVidsVideoOutput {}

export interface MomVidsVideoOutput extends DefaultFlashVarsVideoOutput {}
