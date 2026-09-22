[**downflux**](../README.md)

***

[downflux](../README.md) / createDefaultDependencies

# Function: createDefaultDependencies()

> **createDefaultDependencies**(): [`CoordinatorDependencies`](../interfaces/CoordinatorDependencies.md)

Defined in: [packages/core/dependency/dependency.ts:21](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/core/dependency/dependency.ts#L21)

Creates the default service dependency graph.

## Returns

[`CoordinatorDependencies`](../interfaces/CoordinatorDependencies.md)

Default service dependencies

## Remarks

One graph per provider instance is intentional: `ProgressManager` carries
per-job state, so sharing it across providers would interleave progress from
unrelated jobs. The graph itself is cheap because the undici connection pools
underneath it are process-wide and shared (see `BaseHttpClient`), which is what
previously leaked six pools per provider construction.
