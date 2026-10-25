[**downflux**](../README.md)

***

[downflux](../README.md) / StrategyRegistry

# Class: StrategyRegistry

Defined in: [packages/core/registries/StrategyRegistry.ts:12](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/core/registries/StrategyRegistry.ts#L12)

Supplies the transport strategy for the running job.

## Remarks

Most providers need no strategy at all, so the default is [BaseStrategy](BaseStrategy.md).
The instance is created once and reused; strategies are stateless helpers.

## Constructors

### Constructor

> **new StrategyRegistry**(`progressManager`, `components?`): `StrategyRegistry`

Defined in: [packages/core/registries/StrategyRegistry.ts:15](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/core/registries/StrategyRegistry.ts#L15)

#### Parameters

##### progressManager

[`ProgressManager`](ProgressManager.md)

##### components?

[`ProviderComponents`](../interfaces/ProviderComponents.md) = `{}`

#### Returns

`StrategyRegistry`

## Methods

### getStrategy()

> **getStrategy**(): `Promise`\<[`BaseStrategy`](BaseStrategy.md)\>

Defined in: [packages/core/registries/StrategyRegistry.ts:20](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/core/registries/StrategyRegistry.ts#L20)

#### Returns

`Promise`\<[`BaseStrategy`](BaseStrategy.md)\>
