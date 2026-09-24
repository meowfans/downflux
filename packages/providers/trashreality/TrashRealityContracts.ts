import { type DefaultExecutionResult, type DefaultVideoOutput, type ExecutionArgs } from '@contracts';

export interface TrashRealityExecArgs extends ExecutionArgs {}
export interface TrashRealityOutput extends DefaultExecutionResult, TrashRealityVideoOutput {}

export interface TrashRealityVideoOutput extends DefaultVideoOutput {}
