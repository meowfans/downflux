[**downflux**](../README.md)

***

[downflux](../README.md) / TransformerRegistry

# Class: TransformerRegistry

Defined in: [packages/core/registries/TransformerRegistry.ts:15](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/core/registries/TransformerRegistry.ts#L15)

Resolves the transformer for the running job.

## Remarks

The transformer class is supplied by the provider rather than looked up from a
table of every provider. That is what keeps this layer free of provider
imports; the previous table referenced all 68, which made them mutually
reachable and impossible to tree-shake.

## Constructors

### Constructor

> **new TransformerRegistry**(`httpClient`, `hlsClient`, `progressManager`, `components?`): `TransformerRegistry`

Defined in: [packages/core/registries/TransformerRegistry.ts:16](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/core/registries/TransformerRegistry.ts#L16)

#### Parameters

##### httpClient

[`HttpClient`](HttpClient.md)

##### hlsClient

[`HlsClient`](HlsClient.md)

##### progressManager

[`ProgressManager`](ProgressManager.md)

##### components?

[`ProviderComponents`](../interfaces/ProviderComponents.md) = `{}`

#### Returns

`TransformerRegistry`

## Methods

### transform()

> **transform**\<`TArgs`, `TResult`\>(`url`, `request`): `Promise`\<`TResult`\>

Defined in: [packages/core/registries/TransformerRegistry.ts:30](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/core/registries/TransformerRegistry.ts#L30)

Fetches and normalizes one target.

#### Type Parameters

##### TArgs

`TArgs` *extends* [`ExecutionArgs`](../interfaces/ExecutionArgs.md)\<[`ExecutionShape`](../type-aliases/ExecutionShape.md)\>

##### TResult

`TResult`

#### Parameters

##### url

`string`

Target to transform.

##### request

`TArgs`

Execution request for the current job.

#### Returns

`Promise`\<`TResult`\>

Provider-shaped metadata, or the default shape when the provider ships no transformer.
