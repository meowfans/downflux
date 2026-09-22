[**downflux**](../README.md)

***

[downflux](../README.md) / JobSettlement

# Interface: JobSettlement

Defined in: [packages/contracts/ExecutionContracts.ts:199](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L199)

Outcome of a job's download phase.

## Remarks

Resolves rather than rejects when individual items fail, because a partial
batch is a normal result: inspect `failed` and `errors` to decide. The promise
only rejects if the download pipeline itself could not run.

## Properties

### downloaded

> **downloaded**: `number`

Defined in: [packages/contracts/ExecutionContracts.ts:200](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L200)

***

### failed

> **failed**: `number`

Defined in: [packages/contracts/ExecutionContracts.ts:201](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L201)

***

### errors

> **errors**: `Error`[]

Defined in: [packages/contracts/ExecutionContracts.ts:202](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L202)
