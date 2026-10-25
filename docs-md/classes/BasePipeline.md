[**downflux**](../README.md)

***

[downflux](../README.md) / BasePipeline

# Class: BasePipeline\<TExec, TResult\>

Defined in: [packages/base/BasePipeline.ts:24](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BasePipeline.ts#L24)

Converts extracted metadata into downloadable work items.

## Remarks

Pipelines exist because extraction output is descriptive, while downloads
need concrete URLs, media types, file extensions, and stable identifiers.
Provider pipelines decide which media are eligible and how files should be
grouped on disk.

## Extended by

- [`AnalRzPipeline`](AnalRzPipeline.md)
- [`ArtStationPipeline`](ArtStationPipeline.md)
- [`BeegPipeline`](BeegPipeline.md)
- [`BehancePipeline`](BehancePipeline.md)
- [`BlackPornPipeline`](BlackPornPipeline.md)
- [`BlueskyPipeline`](BlueskyPipeline.md)
- [`BoKepPornPipeline`](BoKepPornPipeline.md)
- [`ColliderPornPipeline`](ColliderPornPipeline.md)
- [`CumLouderPipeline`](CumLouderPipeline.md)
- [`DaFreePornPipeline`](DaFreePornPipeline.md)
- [`DanbooruPipeline`](DanbooruPipeline.md)
- [`DaNudePipeline`](DaNudePipeline.md)
- [`DeviantArtPipeline`](DeviantArtPipeline.md)
- [`EpicGfsPipeline`](EpicGfsPipeline.md)
- [`EPornerPipeline`](EPornerPipeline.md)
- [`FlickrPipeline`](FlickrPipeline.md)
- [`HqPornPipeline`](HqPornPipeline.md)
- [`ImgurPipeline`](ImgurPipeline.md)
- [`InstagramPipeline`](InstagramPipeline.md)
- [`InterracialPipeline`](InterracialPipeline.md)
- [`ItsPornPipeline`](ItsPornPipeline.md)
- [`Lesbian8Pipeline`](Lesbian8Pipeline.md)
- [`MangaDexPipeline`](MangaDexPipeline.md)
- [`MastodonPipeline`](MastodonPipeline.md)
- [`MegaTubePipeline`](MegaTubePipeline.md)
- [`MomVidsPipeline`](MomVidsPipeline.md)
- [`MyLustPipeline`](MyLustPipeline.md)
- [`NewgroundsPipeline`](NewgroundsPipeline.md)
- [`OkPornPipeline`](OkPornPipeline.md)
- [`PerfectGirlsPipeline`](PerfectGirlsPipeline.md)
- [`PexelsPipeline`](PexelsPipeline.md)
- [`PimpBunnyPipeline`](PimpBunnyPipeline.md)
- [`PinterestPipeline`](PinterestPipeline.md)
- [`PixivPipeline`](PixivPipeline.md)
- [`Porn300Pipeline`](Porn300Pipeline.md)
- [`PornDoePipeline`](PornDoePipeline.md)
- [`PornHubPipeline`](PornHubPipeline.md)
- [`PornIdPipeline`](PornIdPipeline.md)
- [`PornOnePipeline`](PornOnePipeline.md)
- [`PornSevenPipeline`](PornSevenPipeline.md)
- [`PornsOkPipeline`](PornsOkPipeline.md)
- [`PussySpacePipeline`](PussySpacePipeline.md)
- [`RedditPipeline`](RedditPipeline.md)
- [`SexVidPipeline`](SexVidPipeline.md)
- [`ShamelessPipeline`](ShamelessPipeline.md)
- [`SuperPornPipeline`](SuperPornPipeline.md)
- [`SxyPornPipeline`](SxyPornPipeline.md)
- [`TheyAreHugePipeline`](TheyAreHugePipeline.md)
- [`TnAFlixPipeline`](TnAFlixPipeline.md)
- [`TrashRealityPipeline`](TrashRealityPipeline.md)
- [`TubeVSexPipeline`](TubeVSexPipeline.md)
- [`TumblrPipeline`](TumblrPipeline.md)
- [`TwitterPipeline`](TwitterPipeline.md)
- [`UnsplashPipeline`](UnsplashPipeline.md)
- [`WallHavenPipeline`](WallHavenPipeline.md)
- [`WikiArtPipeline`](WikiArtPipeline.md)
- [`WikimediaPipeline`](WikimediaPipeline.md)
- [`XCafePipeline`](XCafePipeline.md)
- [`XDeguPipeline`](XDeguPipeline.md)
- [`XGroovyPipeline`](XGroovyPipeline.md)
- [`XHamsterPipeline`](XHamsterPipeline.md)
- [`XnXXPipeline`](XnXXPipeline.md)
- [`XozillaPipeline`](XozillaPipeline.md)
- [`XVideosPipeline`](XVideosPipeline.md)
- [`ZbPornPipeline`](ZbPornPipeline.md)
- [`ZzzTubePipeline`](ZzzTubePipeline.md)

## Type Parameters

### TExec

`TExec` *extends* [`ExecutionArgs`](../interfaces/ExecutionArgs.md)

### TResult

`TResult` *extends* [`DefaultExecutionResult`](../interfaces/DefaultExecutionResult.md) = [`DefaultExecutionResult`](../interfaces/DefaultExecutionResult.md)

## Constructors

### Constructor

> **new BasePipeline**\<`TExec`, `TResult`\>(`fileManager`): `BasePipeline`\<`TExec`, `TResult`\>

Defined in: [packages/base/BasePipeline.ts:28](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BasePipeline.ts#L28)

#### Parameters

##### fileManager

[`FileManager`](FileManager.md)

#### Returns

`BasePipeline`\<`TExec`, `TResult`\>

## Properties

### pathBuilder

> `protected` `readonly` **pathBuilder**: [`PathBuilder`](PathBuilder.md)

Defined in: [packages/base/BasePipeline.ts:25](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BasePipeline.ts#L25)

***

### helper

> `protected` `readonly` **helper**: [`Helper`](Helper.md)

Defined in: [packages/base/BasePipeline.ts:26](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BasePipeline.ts#L26)

***

### fileManager

> `protected` **fileManager**: [`FileManager`](FileManager.md)

Defined in: [packages/base/BasePipeline.ts:28](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BasePipeline.ts#L28)

## Methods

### build()

> **build**(`metadata`, `request`): [`PipelineItem`](../interfaces/PipelineItem.md)[]

Defined in: [packages/base/BasePipeline.ts:37](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BasePipeline.ts#L37)

Builds filtered, deduplicated pipeline items for a single metadata result.

#### Parameters

##### metadata

`TResult`

Extracted provider metadata.

##### request

`TExec`

Execution request with filters and provider options.

#### Returns

[`PipelineItem`](../interfaces/PipelineItem.md)[]

Downloadable pipeline items.

***

### filterByExt()

> `protected` **filterByExt**(`request`, `pipelineItems`): [`PipelineItem`](../interfaces/PipelineItem.md)[]

Defined in: [packages/base/BasePipeline.ts:70](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BasePipeline.ts#L70)

#### Parameters

##### request

`TExec`

##### pipelineItems

[`PipelineItem`](../interfaces/PipelineItem.md)[]

#### Returns

[`PipelineItem`](../interfaces/PipelineItem.md)[]

***

### sliceByMaxDownloads()

> `protected` **sliceByMaxDownloads**(`request`, `items`): [`PipelineItem`](../interfaces/PipelineItem.md)[]

Defined in: [packages/base/BasePipeline.ts:76](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BasePipeline.ts#L76)

#### Parameters

##### request

`TExec`

##### items

[`PipelineItem`](../interfaces/PipelineItem.md)[]

#### Returns

[`PipelineItem`](../interfaces/PipelineItem.md)[]

***

### buildIdentifier()

> `protected` **buildIdentifier**(`ctx`): `string`

Defined in: [packages/base/BasePipeline.ts:86](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BasePipeline.ts#L86)

Builds the storage identifier used as the logical output path.

#### Parameters

##### ctx

[`IdentifierContext`](../interfaces/IdentifierContext.md)\<`TResult`\>

Media item context and source metadata.

#### Returns

`string`

Stable identifier for storage and progress output.

***

### createMappings()

> `protected` **createMappings**\<`T`\>(`elements`, `handler`): [`PipelineMapping`](../type-aliases/PipelineMapping.md)\<`T`\>

Defined in: [packages/base/BasePipeline.ts:92](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BasePipeline.ts#L92)

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

***

### mapIdentifier()

> `protected` **mapIdentifier**(`request`, `extension`, `defaultPattern`): `string`

Defined in: [packages/base/BasePipeline.ts:98](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BasePipeline.ts#L98)

#### Parameters

##### request

`TExec`

##### extension

[`AllowedExtension`](../type-aliases/AllowedExtension.md)

##### defaultPattern

`string`

#### Returns

`string`

***

### mappings()

> `protected` **mappings**(`metadata`, `_request`): [`PipelineMappings`](../type-aliases/PipelineMappings.md)

Defined in: [packages/base/BasePipeline.ts:117](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BasePipeline.ts#L117)

Defines which metadata collections should become pipeline items.

#### Parameters

##### metadata

`TResult`

Extracted provider metadata.

##### \_request

`TExec`

#### Returns

[`PipelineMappings`](../type-aliases/PipelineMappings.md)

Mapping definitions used by `extract`.

***

### extract()

> `protected` **extract**(`request`, `metadata`): [`PipelineExtractedItem`](../interfaces/PipelineExtractedItem.md)[]

Defined in: [packages/base/BasePipeline.ts:126](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BasePipeline.ts#L126)

#### Parameters

##### request

`TExec`

##### metadata

`TResult`

#### Returns

[`PipelineExtractedItem`](../interfaces/PipelineExtractedItem.md)[]

***

### filterByQuality()

> `protected` **filterByQuality**\<`T`, `TEnum`\>(`items?`, `options`): `T`[]

Defined in: [packages/base/BasePipeline.ts:143](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BasePipeline.ts#L143)

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

***

### uniquePipelines()

> `protected` **uniquePipelines**(`pipelines`): [`PipelineItem`](../interfaces/PipelineItem.md)[]

Defined in: [packages/base/BasePipeline.ts:157](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BasePipeline.ts#L157)

#### Parameters

##### pipelines

[`PipelineItem`](../interfaces/PipelineItem.md)[]

#### Returns

[`PipelineItem`](../interfaces/PipelineItem.md)[]

***

### extractedItems()

> `protected` **extractedItems**\<`T`\>(`targets`, `handlers`, `elements?`): `never`[] \| `undefined`

Defined in: [packages/base/BasePipeline.ts:169](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BasePipeline.ts#L169)

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
