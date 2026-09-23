import { type DefaultExecutionResult, type DefaultFlashVarsVideoOutput, type ExecutionArgs } from '@contracts';

export interface EpicGfsExecArgs extends ExecutionArgs {}
export interface EpicGfsOutput extends DefaultExecutionResult, EpicGfsVideoOutput {}

export interface EpicGfsVideoOutput extends DefaultFlashVarsVideoOutput {}
