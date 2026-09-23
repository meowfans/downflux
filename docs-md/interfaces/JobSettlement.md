[**downflux**](../README.md)

***

[downflux](../README.md) / JobSettlement

# Interface: JobSettlement

Defined in: [packages/contracts/ExecutionContracts.ts:216](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L216)

Outcome of a job's download phase.

## Remarks

Resolves rather than rejects when individual items fail, because a partial
batch is a normal result: inspect `failed` and `errors` to decide. The promise
only rejects if the download pipeline itself could not run.

## Properties

### downloaded

> **downloaded**: `number`

Defined in: [packages/contracts/ExecutionContracts.ts:217](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L217)

***

### failed

> **failed**: `number`

Defined in: [packages/contracts/ExecutionContracts.ts:218](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L218)

***

### errors

> **errors**: `Error`[]

Defined in: [packages/contracts/ExecutionContracts.ts:219](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L219)
