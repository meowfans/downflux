import { type DefaultExecutionResult, type DefaultFlashVarsVideoOutput, type ExecutionArgs } from '@contracts';

export interface PimpBunnyExecArgs extends ExecutionArgs {}
export interface PimpBunnyOutput extends DefaultExecutionResult, PimpBunnyVideoOutput {}

export interface PimpBunnyVideoOutput extends DefaultFlashVarsVideoOutput {}
