[**downflux**](../README.md)

***

[downflux](../README.md) / AnalRzPipeline

# Class: AnalRzPipeline

Defined in: [packages/providers/analrz/AnalRzPipeline.ts:14](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/providers/analrz/AnalRzPipeline.ts#L14)

Pipeline for organizing AnalRz video media files.
Manages the routing and organization of different media types (videos, posters, etc.).

## Remarks

Pipelines handle the organization of extracted media files into a structured
hierarchy. They determine how files are mapped, identified, and stored for later retrieval.

## Extends

- [`BasePipeline`](BasePipeline.md)\<[`AnalRzExecArgs`](../interfaces/AnalRzExecArgs.md), [`AnalRzOutput`](../interfaces/AnalRzOutput.md)\>

## Constructors

### Constructor

> **new AnalRzPipeline**(`fileManager`): `AnalRzPipeline`

Defined in: [packages/base/BasePipeline.ts:28](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BasePipeline.ts#L28)

#### Parameters

##### fileManager

[`FileManager`](FileManager.md)

#### Returns

`AnalRzPipeline`

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

[`AnalRzOutput`](../interfaces/AnalRzOutput.md)

Extracted provider metadata.

##### request

[`AnalRzExecArgs`](../interfaces/AnalRzExecArgs.md)

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

[`AnalRzExecArgs`](../interfaces/AnalRzExecArgs.md)

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

[`AnalRzExecArgs`](../interfaces/AnalRzExecArgs.md)

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

[`AnalRzExecArgs`](../interfaces/AnalRzExecArgs.md)

##### extension

[`AllowedExtension`](../type-aliases/AllowedExtension.md)

##### defaultPattern

`string`

#### Returns

`string`

#### Inherited from

[`BasePipeline`](BasePipeline.md).[`mapIdentifier`](BasePipeline.md#mapidentifier)

***

### extract()

> `protected` **extract**(`request`, `metadata`): [`PipelineExtractedItem`](../interfaces/PipelineExtractedItem.md)[]

Defined in: [packages/base/BasePipeline.ts:126](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BasePipeline.ts#L126)

#### Parameters

##### request

[`AnalRzExecArgs`](../interfaces/AnalRzExecArgs.md)

##### metadata

[`AnalRzOutput`](../interfaces/AnalRzOutput.md)

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

> `protected` **buildIdentifier**(`ctx`): `string`

Defined in: [packages/providers/analrz/AnalRzPipeline.ts:15](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/providers/analrz/AnalRzPipeline.ts#L15)

Builds the storage identifier used as the logical output path.

#### Parameters

##### ctx

[`IdentifierContext`](../interfaces/IdentifierContext.md)\<[`AnalRzOutput`](../interfaces/AnalRzOutput.md)\>

Media item context and source metadata.

#### Returns

`string`

Stable identifier for storage and progress output.

#### Overrides

[`BasePipeline`](BasePipeline.md).[`buildIdentifier`](BasePipeline.md#buildidentifier)

***

### mappings()

> `protected` **mappings**(`metadata`, `request`): [`PipelineMappings`](../type-aliases/PipelineMappings.md)

Defined in: [packages/providers/analrz/AnalRzPipeline.ts:43](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/providers/analrz/AnalRzPipeline.ts#L43)

Defines which metadata collections should become pipeline items.

#### Parameters

##### metadata

[`AnalRzOutput`](../interfaces/AnalRzOutput.md)

Extracted provider metadata.

##### request

[`AnalRzExecArgs`](../interfaces/AnalRzExecArgs.md)

Execution request with provider filters.

#### Returns

[`PipelineMappings`](../type-aliases/PipelineMappings.md)

Mapping definitions used by `extract`.

#### Overrides

[`BasePipeline`](BasePipeline.md).[`mappings`](BasePipeline.md#mappings)
