import { type DefaultExecutionResult, type DefaultFlashVarsVideoOutput, type ExecutionArgs } from '@contracts';

export interface MegaTubeExecArgs extends ExecutionArgs {}
export interface MegaTubeOutput extends DefaultExecutionResult, MegaTubeVideoOutput {}

export interface MegaTubeVideoOutput extends DefaultFlashVarsVideoOutput {}
