[**downflux**](../README.md)

***

[downflux](../README.md) / createDefaultDependencies

# Function: createDefaultDependencies()

> **createDefaultDependencies**(`components?`): [`CoordinatorDependencies`](../interfaces/CoordinatorDependencies.md)

Defined in: [packages/core/dependency/dependency.ts:22](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/core/dependency/dependency.ts#L22)

Creates the default service dependency graph.

## Parameters

### components?

[`ProviderComponents`](../interfaces/ProviderComponents.md) = `{}`

Classes the provider contributes; anything omitted falls back to `Base*`.

## Returns

[`CoordinatorDependencies`](../interfaces/CoordinatorDependencies.md)

Default service dependencies

## Remarks

One graph per provider instance is intentional: `ProgressManager` carries
per-job state, so sharing it across providers would interleave progress from
unrelated jobs. The graph itself is cheap because the undici connection pools
underneath it are process-wide and shared (see `BaseHttpClient`), which is what
previously leaked six pools per provider construction.
