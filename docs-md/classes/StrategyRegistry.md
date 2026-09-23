[**downflux**](../README.md)

***

[downflux](../README.md) / StrategyRegistry

# Class: StrategyRegistry

Defined in: [packages/core/registries/StrategyRegistry.ts:99](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/core/registries/StrategyRegistry.ts#L99)

Resolves provider transport strategies for HTTP clients.

## Remarks

The strategy registry keeps HTTP engines generic. Engines ask for the current
provider strategy and then apply provider-specific fallback, redirect, or
re-extraction behavior without importing provider modules themselves.

## Constructors

### Constructor

> **new StrategyRegistry**(`progressManager`): `StrategyRegistry`

Defined in: [packages/core/registries/StrategyRegistry.ts:102](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/core/registries/StrategyRegistry.ts#L102)

#### Parameters

##### progressManager

[`ProgressManager`](ProgressManager.md)

#### Returns

`StrategyRegistry`

## Methods

### getStrategy()

> **getStrategy**(`provider`): `Promise`\<[`BaseStrategy`](BaseStrategy.md)\>

Defined in: [packages/core/registries/StrategyRegistry.ts:131](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/core/registries/StrategyRegistry.ts#L131)

Creates a strategy instance for the requested provider.

#### Parameters

##### provider

[`Provider`](../enumerations/Provider.md)

Provider whose transport strategy should be loaded.

#### Returns

`Promise`\<[`BaseStrategy`](BaseStrategy.md)\>

Provider strategy, or the default strategy fallback.
