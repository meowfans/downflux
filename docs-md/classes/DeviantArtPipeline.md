[**downflux**](../README.md)

***

[downflux](../README.md) / DeviantArtPipeline

# Class: DeviantArtPipeline

Defined in: [packages/providers/deviantart/DeviantArtPipeline.ts:7](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/providers/deviantart/DeviantArtPipeline.ts#L7)

Converts extracted metadata into downloadable work items.

## Remarks

Pipelines exist because extraction output is descriptive, while downloads
need concrete URLs, media types, file extensions, and stable identifiers.
Provider pipelines decide which media are eligible and how files should be
grouped on disk.

## Extends

- [`BasePipeline`](BasePipeline.md)\<[`DeviantArtExecArgs`](../interfaces/DeviantArtExecArgs.md), [`DeviantArtOutput`](../interfaces/DeviantArtOutput.md)\>

## Constructors

### Constructor

> **new DeviantArtPipeline**(`fileManager`): `DeviantArtPipeline`

Defined in: [packages/base/BasePipeline.ts:28](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BasePipeline.ts#L28)

#### Parameters

##### fileManager

[`FileManager`](FileManager.md)

#### Returns

`DeviantArtPipeline`

#### Inherited from

[`BasePipeline`](BasePipeline.md).[`constructor`](BasePipeline.md#constructor)

## Properties

### pathBuilder

> `protected` `readonly` **pathBuilder**: [`PathBuilder`](PathBuilder.md)

Defined in: [packages/base/BasePipeline.ts:25](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BasePipeline.ts#L25)

#### Inherited from

[`BasePipeline`](BasePipeline.md).[`pathBuilder`](BasePipeline.md#pathbuilder)

***

### helper

> `protected` `readonly` **helper**: [`Helper`](Helper.md)

Defined in: [packages/base/BasePipeline.ts:26](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BasePipeline.ts#L26)

#### Inherited from

[`BasePipeline`](BasePipeline.md).[`helper`](BasePipeline.md#helper)

***

### fileManager

> `protected` **fileManager**: [`FileManager`](FileManager.md)

Defined in: [packages/base/BasePipeline.ts:28](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BasePipeline.ts#L28)

#### Inherited from

[`BasePipeline`](BasePipeline.md).[`fileManager`](BasePipeline.md#filemanager)

## Methods

### build()

> **build**(`metadata`, `request`): [`PipelineItem`](../interfaces/PipelineItem.md)[]

Defined in: [packages/base/BasePipeline.ts:37](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BasePipeline.ts#L37)

Builds filtered, deduplicated pipeline items for a single metadata result.

#### Parameters

##### metadata

[`DeviantArtOutput`](../interfaces/DeviantArtOutput.md)

Extracted provider metadata.

##### request

[`DeviantArtExecArgs`](../interfaces/DeviantArtExecArgs.md)

Execution request with filters and provider options.

#### Returns

[`PipelineItem`](../interfaces/PipelineItem.md)[]

Downloadable pipeline items.

#### Inherited from

[`BasePipeline`](BasePipeline.md).[`build`](BasePipeline.md#build)

***

### filterByExt()

> `protected` **filterByExt**(`request`, `pipelineItems`): [`PipelineItem`](../interfaces/PipelineItem.md)[]

Defined in: [packages/base/BasePipeline.ts:70](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BasePipeline.ts#L70)

#### Parameters

##### request

[`DeviantArtExecArgs`](../interfaces/DeviantArtExecArgs.md)

##### pipelineItems

[`PipelineItem`](../interfaces/PipelineItem.md)[]

#### Returns

[`PipelineItem`](../interfaces/PipelineItem.md)[]

#### Inherited from

[`BasePipeline`](BasePipeline.md).[`filterByExt`](BasePipeline.md#filterbyext)

***

### sliceByMaxDownloads()

> `protected` **sliceByMaxDownloads**(`request`, `items`): [`PipelineItem`](../interfaces/PipelineItem.md)[]

Defined in: [packages/base/BasePipeline.ts:76](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BasePipeline.ts#L76)

#### Parameters

##### request

[`DeviantArtExecArgs`](../interfaces/DeviantArtExecArgs.md)

##### items

[`PipelineItem`](../interfaces/PipelineItem.md)[]

#### Returns

[`PipelineItem`](../interfaces/PipelineItem.md)[]

#### Inherited from

[`BasePipeline`](BasePipeline.md).[`sliceByMaxDownloads`](BasePipeline.md#slicebymaxdownloads)

***

### createMappings()

> `protected` **createMappings**\<`T`\>(`elements`, `handler`): [`PipelineMapping`](../type-aliases/PipelineMapping.md)\<`T`\>

Defined in: [packages/base/BasePipeline.ts:92](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BasePipeline.ts#L92)

#### Type Parameters

##### T

`T`

#### Parameters

##### elements

`T`[] \| `undefined`

##### handler

[`PipelineExtractionHandler`](../interfaces/PipelineExtractionHandler.md)\<`T`\>

#### Returns

[`PipelineMapping`](../type-aliases/PipelineMapping.md)\<`T`\>

#### Inherited from

[`BasePipeline`](BasePipeline.md).[`createMappings`](BasePipeline.md#createmappings)

***

### mapIdentifier()

> `protected` **mapIdentifier**(`request`, `extension`, `defaultPattern`): `string`

Defined in: [packages/base/BasePipeline.ts:98](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BasePipeline.ts#L98)

#### Parameters

##### request

[`DeviantArtExecArgs`](../interfaces/DeviantArtExecArgs.md)

##### extension

[`AllowedExtension`](../type-aliases/AllowedExtension.md)

##### defaultPattern

`string`

#### Returns

`string`

#### Inherited from

[`BasePipeline`](BasePipeline.md).[`mapIdentifier`](BasePipeline.md#mapidentifier)

***

### mappings()

> `protected` **mappings**(`metadata`, `_request`): [`PipelineMappings`](../type-aliases/PipelineMappings.md)

Defined in: [packages/base/BasePipeline.ts:117](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BasePipeline.ts#L117)

Defines which metadata collections should become pipeline items.

#### Parameters

##### metadata

[`DeviantArtOutput`](../interfaces/DeviantArtOutput.md)

Extracted provider metadata.

##### \_request

[`DeviantArtExecArgs`](../interfaces/DeviantArtExecArgs.md)

#### Returns

[`PipelineMappings`](../type-aliases/PipelineMappings.md)

Mapping definitions used by `extract`.

#### Inherited from

[`BasePipeline`](BasePipeline.md).[`mappings`](BasePipeline.md#mappings)

***

### extract()

> `protected` **extract**(`request`, `metadata`): [`PipelineExtractedItem`](../interfaces/PipelineExtractedItem.md)[]

Defined in: [packages/base/BasePipeline.ts:126](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BasePipeline.ts#L126)

#### Parameters

##### request

[`DeviantArtExecArgs`](../interfaces/DeviantArtExecArgs.md)

##### metadata

[`DeviantArtOutput`](../interfaces/DeviantArtOutput.md)

#### Returns

[`PipelineExtractedItem`](../interfaces/PipelineExtractedItem.md)[]

#### Inherited from

[`BasePipeline`](BasePipeline.md).[`extract`](BasePipeline.md#extract)

***

### filterByQuality()

> `protected` **filterByQuality**\<`T`, `TEnum`\>(`items?`, `options`): `T`[]

Defined in: [packages/base/BasePipeline.ts:143](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BasePipeline.ts#L143)

Applies provider quality filtering without changing source order.

#### Type Parameters

##### T

`T`

##### TEnum

`TEnum` = `string` \| `number`

#### Parameters

##### items?

`T`[] = `[]`

Source records to filter.

##### options

Quality selector and requested quality.

###### allowedQuality?

`TEnum`

###### getQuality

(`item`) => `TEnum`

#### Returns

`T`[]

Sources matching the requested quality, or all sources when no quality is requested.

#### Inherited from

[`BasePipeline`](BasePipeline.md).[`filterByQuality`](BasePipeline.md#filterbyquality)

***

### uniquePipelines()

> `protected` **uniquePipelines**(`pipelines`): [`PipelineItem`](../interfaces/PipelineItem.md)[]

Defined in: [packages/base/BasePipeline.ts:157](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BasePipeline.ts#L157)

#### Parameters

##### pipelines

[`PipelineItem`](../interfaces/PipelineItem.md)[]

#### Returns

[`PipelineItem`](../interfaces/PipelineItem.md)[]

#### Inherited from

[`BasePipeline`](BasePipeline.md).[`uniquePipelines`](BasePipeline.md#uniquepipelines)

***

### extractedItems()

> `protected` **extractedItems**\<`T`\>(`targets`, `handlers`, `elements?`): `never`[] \| `undefined`

Defined in: [packages/base/BasePipeline.ts:169](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BasePipeline.ts#L169)

#### Type Parameters

##### T

`T`

#### Parameters

##### targets

[`PipelineExtractedItem`](../interfaces/PipelineExtractedItem.md)[]

##### handlers

[`PipelineExtractionHandler`](../interfaces/PipelineExtractionHandler.md)\<`T`\>

##### elements?

`T`[]

#### Returns

`never`[] \| `undefined`

#### Inherited from

[`BasePipeline`](BasePipeline.md).[`extractedItems`](BasePipeline.md#extracteditems)

***

### buildIdentifier()

> `protected` **buildIdentifier**(`_ctx`): `string`

Defined in: [packages/providers/deviantart/DeviantArtPipeline.ts:8](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/providers/deviantart/DeviantArtPipeline.ts#L8)

Builds the storage identifier used as the logical output path.

#### Parameters

##### \_ctx

[`IdentifierContext`](../interfaces/IdentifierContext.md)\<[`DeviantArtOutput`](../interfaces/DeviantArtOutput.md)\>

#### Returns

`string`

Stable identifier for storage and progress output.

#### Overrides

[`BasePipeline`](BasePipeline.md).[`buildIdentifier`](BasePipeline.md#buildidentifier)
