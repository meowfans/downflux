[**downflux**](../README.md)

***

[downflux](../README.md) / BaseTransformer

# Class: BaseTransformer\<TExec, TResult\>

Defined in: [packages/base/BaseTransformer.ts:34](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseTransformer.ts#L34)

Fetches a target URL and converts parser output into execution metadata.

## Remarks

Transformers sit between HTTP fetching and pipeline building. They combine
common parser output with provider-specific parser output, then provider
subclasses can map those raw fields into stable public result types.

## Extended by

- [`AnalRzTransformer`](AnalRzTransformer.md)
- [`ArtStationTransformer`](ArtStationTransformer.md)
- [`BeegTransformer`](BeegTransformer.md)
- [`BehanceTransformer`](BehanceTransformer.md)
- [`BlackPornTransformer`](BlackPornTransformer.md)
- [`BlueskyTransformer`](BlueskyTransformer.md)
- [`BoKepPornTransformer`](BoKepPornTransformer.md)
- [`ColliderPornTransformer`](ColliderPornTransformer.md)
- [`CumLouderTransformer`](CumLouderTransformer.md)
- [`DaFreePornTransformer`](DaFreePornTransformer.md)
- [`DanbooruTransformer`](DanbooruTransformer.md)
- [`DaNudeTransformer`](DaNudeTransformer.md)
- [`DeviantArtTransformer`](DeviantArtTransformer.md)
- [`EpicGfsTransformer`](EpicGfsTransformer.md)
- [`EPornerTransformer`](EPornerTransformer.md)
- [`FlickrTransformer`](FlickrTransformer.md)
- [`GelbooruTransformer`](GelbooruTransformer.md)
- [`HqPornTransformer`](HqPornTransformer.md)
- [`ImgurTransformer`](ImgurTransformer.md)
- [`InstagramTransformer`](InstagramTransformer.md)
- [`InterracialTransformer`](InterracialTransformer.md)
- [`ItsPornTransformer`](ItsPornTransformer.md)
- [`Lesbian8Transformer`](Lesbian8Transformer.md)
- [`MangaDexTransformer`](MangaDexTransformer.md)
- [`MastodonTransformer`](MastodonTransformer.md)
- [`MegaTubeTransformer`](MegaTubeTransformer.md)
- [`MomVidsTransformer`](MomVidsTransformer.md)
- [`MyLustTransformer`](MyLustTransformer.md)
- [`NewgroundsTransformer`](NewgroundsTransformer.md)
- [`OkPornTransformer`](OkPornTransformer.md)
- [`PerfectGirlsTransformer`](PerfectGirlsTransformer.md)
- [`PexelsTransformer`](PexelsTransformer.md)
- [`PimpBunnyTransformer`](PimpBunnyTransformer.md)
- [`PinterestTransformer`](PinterestTransformer.md)
- [`PixivTransformer`](PixivTransformer.md)
- [`Porn300Transformer`](Porn300Transformer.md)
- [`PornDoeTransformer`](PornDoeTransformer.md)
- [`PornHubTransformer`](PornHubTransformer.md)
- [`PornIdTransformer`](PornIdTransformer.md)
- [`PornOneTransformer`](PornOneTransformer.md)
- [`PornSevenTransformer`](PornSevenTransformer.md)
- [`PornsOkTransformer`](PornsOkTransformer.md)
- [`PussySpaceTransformer`](PussySpaceTransformer.md)
- [`RedditTransformer`](RedditTransformer.md)
- [`SexVidTransformer`](SexVidTransformer.md)
- [`ShamelessTransformer`](ShamelessTransformer.md)
- [`SuperPornTransformer`](SuperPornTransformer.md)
- [`SxyPornTransformer`](SxyPornTransformer.md)
- [`TheyAreHugeTransformer`](TheyAreHugeTransformer.md)
- [`TikTokTransformer`](TikTokTransformer.md)
- [`TnAFlixTransformer`](TnAFlixTransformer.md)
- [`TrashRealityTransformer`](TrashRealityTransformer.md)
- [`TubeVSexTransformer`](TubeVSexTransformer.md)
- [`TumblrTransformer`](TumblrTransformer.md)
- [`TwitterTransformer`](TwitterTransformer.md)
- [`UnsplashTransformer`](UnsplashTransformer.md)
- [`WallHavenTransformer`](WallHavenTransformer.md)
- [`WikiArtTransformer`](WikiArtTransformer.md)
- [`WikimediaTransformer`](WikimediaTransformer.md)
- [`XCafeTransformer`](XCafeTransformer.md)
- [`XDeguTransformer`](XDeguTransformer.md)
- [`XGroovyTransformer`](XGroovyTransformer.md)
- [`XHamsterTransformer`](XHamsterTransformer.md)
- [`XnXXTransformer`](XnXXTransformer.md)
- [`XozillaTransformer`](XozillaTransformer.md)
- [`XVideosTransformer`](XVideosTransformer.md)
- [`ZbPornTransformer`](ZbPornTransformer.md)
- [`ZzzTubeTransformer`](ZzzTubeTransformer.md)

## Type Parameters

### TExec

`TExec` *extends* [`ExecutionArgs`](../interfaces/ExecutionArgs.md)

### TResult

`TResult` = [`DefaultExecutionResult`](../interfaces/DefaultExecutionResult.md)

## Constructors

### Constructor

> **new BaseTransformer**\<`TExec`, `TResult`\>(`httpClient`, `hlsClient`, `progressManager`, `parser?`): `BaseTransformer`\<`TExec`, `TResult`\>

Defined in: [packages/base/BaseTransformer.ts:42](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseTransformer.ts#L42)

#### Parameters

##### httpClient

[`HttpClient`](HttpClient.md)

##### hlsClient

[`HlsClient`](HlsClient.md)

##### progressManager

[`ProgressManager`](ProgressManager.md)

##### parser?

() => [`BaseParser`](BaseParser.md)

Provider parser, injected by the provider that owns it.

#### Returns

`BaseTransformer`\<`TExec`, `TResult`\>

#### Remarks

Receiving the class removes the last runtime edge from `base` into `core`:
this used to call a registry that imported every provider.

## Properties

### httpClient

> `protected` `readonly` **httpClient**: [`HttpClient`](HttpClient.md)

Defined in: [packages/base/BaseTransformer.ts:43](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseTransformer.ts#L43)

***

### hlsClient

> `protected` `readonly` **hlsClient**: [`HlsClient`](HlsClient.md)

Defined in: [packages/base/BaseTransformer.ts:44](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseTransformer.ts#L44)

***

### progressManager

> `protected` `readonly` **progressManager**: [`ProgressManager`](ProgressManager.md)

Defined in: [packages/base/BaseTransformer.ts:45](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseTransformer.ts#L45)

***

### parser?

> `protected` `readonly` `optional` **parser?**: () => [`BaseParser`](BaseParser.md)

Defined in: [packages/base/BaseTransformer.ts:46](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseTransformer.ts#L46)

Provider parser, injected by the provider that owns it.

#### Returns

[`BaseParser`](BaseParser.md)

## Methods

### transform()

> **transform**(`url`, `request?`): `Promise`\<`TResult`\>

Defined in: [packages/base/BaseTransformer.ts:56](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseTransformer.ts#L56)

Fetches HTML and merges default metadata with provider-specific metadata.

#### Parameters

##### url

`string`

Target page to fetch.

##### request?

`TExec`

Execution request that identifies the provider and options.

#### Returns

`Promise`\<`TResult`\>

Parsed metadata ready for provider-specific output mapping.

***

### requestData()

> **requestData**(`url`, `opts`): `Promise`\<`any`\>

Defined in: [packages/base/BaseTransformer.ts:77](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseTransformer.ts#L77)

Fetches JSON data for providers that expose API-backed metadata.

#### Parameters

##### url

`string`

API endpoint to request.

##### opts

[`DownloadOptions`](../interfaces/DownloadOptions.md)

HTTP and provider options.

#### Returns

`Promise`\<`any`\>

Parsed JSON response.

***

### fetchText()

> **fetchText**(`url`, `opts`): `Promise`\<`string`\>

Defined in: [packages/base/BaseTransformer.ts:81](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseTransformer.ts#L81)

#### Parameters

##### url

`string`

##### opts

[`DownloadOptions`](../interfaces/DownloadOptions.md)

#### Returns

`Promise`\<`string`\>

***

### getVariants()

> **getVariants**(`manifest`, `base`): [`M3U8Variant`](../interfaces/M3U8Variant.md)[]

Defined in: [packages/base/BaseTransformer.ts:85](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseTransformer.ts#L85)

#### Parameters

##### manifest

`string`

##### base

`string`

#### Returns

[`M3U8Variant`](../interfaces/M3U8Variant.md)[]

***

### uniqueVideos()

> `protected` **uniqueVideos**\<`T`\>(`videos`, `options`): [`VideoSourceOutput`](../interfaces/VideoSourceOutput.md)[]

Defined in: [packages/base/BaseTransformer.ts:96](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseTransformer.ts#L96)

Removes duplicate video URLs while preserving quality information.

#### Type Parameters

##### T

`T`

#### Parameters

##### videos

`T`[]

Provider-specific video source records.

##### options

[`UniqueVideosProps`](../interfaces/UniqueVideosProps.md)\<`T`\>

URL and quality selectors.

#### Returns

[`VideoSourceOutput`](../interfaces/VideoSourceOutput.md)[]

Unique video sources in the shared shape.

***

### unique()

> `protected` **unique**\<`T`\>(`arr`): `T`[]

Defined in: [packages/base/BaseTransformer.ts:113](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseTransformer.ts#L113)

#### Type Parameters

##### T

`T`

#### Parameters

##### arr

`T`[]

#### Returns

`T`[]

***

### defaultFlashVarsVideoOutput()

> `protected` **defaultFlashVarsVideoOutput**\<`T`\>(`metadata`): [`DefaultFlashVarsVideoOutput`](../interfaces/DefaultFlashVarsVideoOutput.md)

Defined in: [packages/base/BaseTransformer.ts:118](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseTransformer.ts#L118)

#### Type Parameters

##### T

`T` *extends* [`DefaultExecutionResult`](../interfaces/DefaultExecutionResult.md)\<[`DefaultFlashVarsVideoOutput`](../interfaces/DefaultFlashVarsVideoOutput.md)\>

#### Parameters

##### metadata

`T`

#### Returns

[`DefaultFlashVarsVideoOutput`](../interfaces/DefaultFlashVarsVideoOutput.md)

***

### mapSources()

> `protected` **mapSources**(`sources`, `quality?`, `filter?`): [`VideosFormat`](../interfaces/VideosFormat.md)

Defined in: [packages/base/BaseTransformer.ts:138](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseTransformer.ts#L138)

#### Parameters

##### sources

`string`[]

##### quality?

`string` = `VideoQuality.QUnknown`

##### filter?

(`src`) => `boolean`

#### Returns

[`VideosFormat`](../interfaces/VideosFormat.md)

***

### defaultVideoOutput()

> `protected` **defaultVideoOutput**\<`T`\>(`metadata`, `options?`): `T`

Defined in: [packages/base/BaseTransformer.ts:156](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseTransformer.ts#L156)

#### Type Parameters

##### T

`T` *extends* `Partial`\<[`DefaultVideoOutput`](../interfaces/DefaultVideoOutput.md)\> = `Partial`\<[`DefaultVideoOutput`](../interfaces/DefaultVideoOutput.md)\>

#### Parameters

##### metadata

[`DefaultExecutionResult`](../interfaces/DefaultExecutionResult.md)\<`Partial`\<`T`\>\>

##### options?

###### filter?

(`src`) => `boolean`

###### quality?

`string`

###### extraFields?

`Partial`\<`T`\>

#### Returns

`T`
