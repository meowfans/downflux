[**downflux**](../README.md)

***

[downflux](../README.md) / PipelineRegistry

# Class: PipelineRegistry

Defined in: [packages/core/registries/PipelineRegistry.ts:11](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/core/registries/PipelineRegistry.ts#L11)

Builds downloadable items using the pipeline the provider supplied.

## Remarks

Falls back to [BasePipeline](BasePipeline.md) when a provider declares none.

## Constructors

### Constructor

> **new PipelineRegistry**(`fileManager`, `components?`): `PipelineRegistry`

Defined in: [packages/core/registries/PipelineRegistry.ts:12](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/core/registries/PipelineRegistry.ts#L12)

#### Parameters

##### fileManager

[`FileManager`](FileManager.md)

##### components?

[`ProviderComponents`](../interfaces/ProviderComponents.md) = `{}`

#### Returns

`PipelineRegistry`

## Properties

### fileManager

> `protected` `readonly` **fileManager**: [`FileManager`](FileManager.md)

Defined in: [packages/core/registries/PipelineRegistry.ts:13](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/core/registries/PipelineRegistry.ts#L13)

## Methods

### build()

> **build**\<`TResult`, `TExec`\>(`metadata`, `request`): `Promise`\<[`PipelineItem`](../interfaces/PipelineItem.md)[]\>

Defined in: [packages/core/registries/PipelineRegistry.ts:23](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/core/registries/PipelineRegistry.ts#L23)

Converts normalized metadata into pipeline items.

#### Type Parameters

##### TResult

`TResult`

##### TExec

`TExec` *extends* [`ExecutionArgs`](../interfaces/ExecutionArgs.md)\<[`ExecutionShape`](../type-aliases/ExecutionShape.md)\>

#### Parameters

##### metadata

`TResult`

Output of the transformer.

##### request

`TExec`

Execution request for the current job.

#### Returns

`Promise`\<[`PipelineItem`](../interfaces/PipelineItem.md)[]\>
