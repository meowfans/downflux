import { type DefaultExecutionResult, type DefaultVideoOutput, type ExecutionArgs } from '@contracts';

export interface CumLouderExecArgs extends ExecutionArgs {}
export interface CumLouderOutput extends DefaultExecutionResult, CumLouderVideoOutput {}

export interface CumLouderVideoOutput extends DefaultVideoOutput {}
