import { type DefaultExecutionResult, type DefaultFlashVarsVideoOutput, type ExecutionArgs } from '@contracts';

export interface PornIdExecArgs extends ExecutionArgs {}
export interface PornIdOutput extends DefaultExecutionResult, PornIdVideoOutput {}

export interface PornIdVideoOutput extends DefaultFlashVarsVideoOutput {}
