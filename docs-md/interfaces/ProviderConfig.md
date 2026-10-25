[**downflux**](../README.md)

***

[downflux](../README.md) / ProviderConfig

# Interface: ProviderConfig

Defined in: [packages/contracts/CoordinatorDependency.ts:39](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/contracts/CoordinatorDependency.ts#L39)

The classes a provider contributes to the execution flow.

## Remarks

Each provider declares its own parts instead of the core layer looking them up
by enum. That inversion is what keeps `core` from importing `providers`: the
registries used to reference all 68 of them, which closed an import cycle
through `base` and made every provider reachable from any entry point, so a
consumer importing one provider still paid for all of them.

Anything omitted falls back to the corresponding `Base*` behaviour.

## Extends

- [`ProviderComponents`](ProviderComponents.md)

## Properties

### provider

> **provider**: [`Provider`](../enumerations/Provider.md)

Defined in: [packages/contracts/CoordinatorDependency.ts:40](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/contracts/CoordinatorDependency.ts#L40)

***

### urlPattern

> **urlPattern**: `RegExp`

Defined in: [packages/contracts/CoordinatorDependency.ts:41](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/contracts/CoordinatorDependency.ts#L41)

***

### metadata

> **metadata**: [`ProviderMetadata`](ProviderMetadata.md)

Defined in: [packages/contracts/CoordinatorDependency.ts:42](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/contracts/CoordinatorDependency.ts#L42)

***

### parser?

> `optional` **parser?**: () => [`BaseParser`](../classes/BaseParser.md)

Defined in: [packages/contracts/ProviderComponents.ts:22](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/contracts/ProviderComponents.ts#L22)

Extracts provider-specific fields out of fetched HTML.

#### Returns

[`BaseParser`](../classes/BaseParser.md)

#### Inherited from

[`ProviderComponents`](ProviderComponents.md).[`parser`](ProviderComponents.md#parser)

***

### transformer?

> `optional` **transformer?**: (`httpClient`, `hlsClient`, `progressManager`, `parser?`) => [`BaseTransformer`](../classes/BaseTransformer.md)\<[`ExecutionArgs`](ExecutionArgs.md)\<[`ExecutionShape`](../type-aliases/ExecutionShape.md)\>, `unknown`\>

Defined in: [packages/contracts/ProviderComponents.ts:25](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/contracts/ProviderComponents.ts#L25)

Fetches a target and normalizes it into the provider's output contract.

#### Parameters

##### httpClient

[`HttpClient`](../classes/HttpClient.md)

##### hlsClient

[`HlsClient`](../classes/HlsClient.md)

##### progressManager

[`ProgressManager`](../classes/ProgressManager.md)

##### parser?

() => [`BaseParser`](../classes/BaseParser.md)

#### Returns

[`BaseTransformer`](../classes/BaseTransformer.md)\<[`ExecutionArgs`](ExecutionArgs.md)\<[`ExecutionShape`](../type-aliases/ExecutionShape.md)\>, `unknown`\>

#### Inherited from

[`ProviderComponents`](ProviderComponents.md).[`transformer`](ProviderComponents.md#transformer)

***

### pipeline?

> `optional` **pipeline?**: (`fileManager`) => [`BasePipeline`](../classes/BasePipeline.md)\<[`ExecutionArgs`](ExecutionArgs.md)\<[`ExecutionShape`](../type-aliases/ExecutionShape.md)\>, `never`\>

Defined in: [packages/contracts/ProviderComponents.ts:33](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/contracts/ProviderComponents.ts#L33)

Turns normalized metadata into downloadable items.

#### Parameters

##### fileManager

[`FileManager`](../classes/FileManager.md)

#### Returns

[`BasePipeline`](../classes/BasePipeline.md)\<[`ExecutionArgs`](ExecutionArgs.md)\<[`ExecutionShape`](../type-aliases/ExecutionShape.md)\>, `never`\>

#### Inherited from

[`ProviderComponents`](ProviderComponents.md).[`pipeline`](ProviderComponents.md#pipeline)

***

### strategy?

> `optional` **strategy?**: (`progressManager`) => [`BaseStrategy`](../classes/BaseStrategy.md)

Defined in: [packages/contracts/ProviderComponents.ts:36](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/contracts/ProviderComponents.ts#L36)

Provider-specific transport behaviour such as CDN fallback.

#### Parameters

##### progressManager

[`ProgressManager`](../classes/ProgressManager.md)

#### Returns

[`BaseStrategy`](../classes/BaseStrategy.md)

#### Inherited from

[`ProviderComponents`](ProviderComponents.md).[`strategy`](ProviderComponents.md#strategy)
