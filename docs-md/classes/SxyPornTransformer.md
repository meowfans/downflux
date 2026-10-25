[**downflux**](../README.md)

***

[downflux](../README.md) / SxyPornTransformer

# Class: SxyPornTransformer

Defined in: [packages/providers/sxyporn/SxyPornTransformer.ts:12](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/providers/sxyporn/SxyPornTransformer.ts#L12)

Normalizes parsed SxyPorn metadata into the public output shape.

## Remarks

Transformers bridge raw parser fields and typed provider results, including method-specific output mapping.

## Extends

- [`BaseTransformer`](BaseTransformer.md)\<[`SxyPornExecArgs`](../interfaces/SxyPornExecArgs.md), [`DefaultExecutionResult`](../interfaces/DefaultExecutionResult.md) \| [`SxyPornVideoOutput`](../interfaces/SxyPornVideoOutput.md)\>

## Constructors

### Constructor

> **new SxyPornTransformer**(`httpClient`, `hlsClient`, `progressManager`, `parser?`): `SxyPornTransformer`

Defined in: [packages/base/BaseTransformer.ts:42](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseTransformer.ts#L42)

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

`SxyPornTransformer`

#### Remarks

Receiving the class removes the last runtime edge from `base` into `core`:
this used to call a registry that imported every provider.

#### Inherited from

[`BaseTransformer`](BaseTransformer.md).[`constructor`](BaseTransformer.md#constructor)

## Properties

### httpClient

> `protected` `readonly` **httpClient**: [`HttpClient`](HttpClient.md)

Defined in: [packages/base/BaseTransformer.ts:43](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseTransformer.ts#L43)

#### Inherited from

[`BaseTransformer`](BaseTransformer.md).[`httpClient`](BaseTransformer.md#httpclient)

***

### hlsClient

> `protected` `readonly` **hlsClient**: [`HlsClient`](HlsClient.md)

Defined in: [packages/base/BaseTransformer.ts:44](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseTransformer.ts#L44)

#### Inherited from

[`BaseTransformer`](BaseTransformer.md).[`hlsClient`](BaseTransformer.md#hlsclient)

***

### progressManager

> `protected` `readonly` **progressManager**: [`ProgressManager`](ProgressManager.md)

Defined in: [packages/base/BaseTransformer.ts:45](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseTransformer.ts#L45)

#### Inherited from

[`BaseTransformer`](BaseTransformer.md).[`progressManager`](BaseTransformer.md#progressmanager)

***

### parser?

> `protected` `readonly` `optional` **parser?**: () => [`BaseParser`](BaseParser.md)

Defined in: [packages/base/BaseTransformer.ts:46](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseTransformer.ts#L46)

Provider parser, injected by the provider that owns it.

#### Returns

[`BaseParser`](BaseParser.md)

#### Inherited from

[`BaseTransformer`](BaseTransformer.md).[`parser`](BaseTransformer.md#parser)

## Methods

### requestData()

> **requestData**(`url`, `opts`): `Promise`\<`any`\>

Defined in: [packages/base/BaseTransformer.ts:77](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseTransformer.ts#L77)

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

#### Inherited from

[`BaseTransformer`](BaseTransformer.md).[`requestData`](BaseTransformer.md#requestdata)

***

### fetchText()

> **fetchText**(`url`, `opts`): `Promise`\<`string`\>

Defined in: [packages/base/BaseTransformer.ts:81](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseTransformer.ts#L81)

#### Parameters

##### url

`string`

##### opts

[`DownloadOptions`](../interfaces/DownloadOptions.md)

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`BaseTransformer`](BaseTransformer.md).[`fetchText`](BaseTransformer.md#fetchtext)

***

### getVariants()

> **getVariants**(`manifest`, `base`): [`M3U8Variant`](../interfaces/M3U8Variant.md)[]

Defined in: [packages/base/BaseTransformer.ts:85](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseTransformer.ts#L85)

#### Parameters

##### manifest

`string`

##### base

`string`

#### Returns

[`M3U8Variant`](../interfaces/M3U8Variant.md)[]

#### Inherited from

[`BaseTransformer`](BaseTransformer.md).[`getVariants`](BaseTransformer.md#getvariants)

***

### uniqueVideos()

> `protected` **uniqueVideos**\<`T`\>(`videos`, `options`): [`VideoSourceOutput`](../interfaces/VideoSourceOutput.md)[]

Defined in: [packages/base/BaseTransformer.ts:96](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseTransformer.ts#L96)

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

#### Inherited from

[`BaseTransformer`](BaseTransformer.md).[`uniqueVideos`](BaseTransformer.md#uniquevideos)

***

### unique()

> `protected` **unique**\<`T`\>(`arr`): `T`[]

Defined in: [packages/base/BaseTransformer.ts:113](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseTransformer.ts#L113)

#### Type Parameters

##### T

`T`

#### Parameters

##### arr

`T`[]

#### Returns

`T`[]

#### Inherited from

[`BaseTransformer`](BaseTransformer.md).[`unique`](BaseTransformer.md#unique)

***

### defaultFlashVarsVideoOutput()

> `protected` **defaultFlashVarsVideoOutput**\<`T`\>(`metadata`): [`DefaultFlashVarsVideoOutput`](../interfaces/DefaultFlashVarsVideoOutput.md)

Defined in: [packages/base/BaseTransformer.ts:118](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseTransformer.ts#L118)

#### Type Parameters

##### T

`T` *extends* [`DefaultExecutionResult`](../interfaces/DefaultExecutionResult.md)\<[`DefaultFlashVarsVideoOutput`](../interfaces/DefaultFlashVarsVideoOutput.md)\>

#### Parameters

##### metadata

`T`

#### Returns

[`DefaultFlashVarsVideoOutput`](../interfaces/DefaultFlashVarsVideoOutput.md)

#### Inherited from

[`BaseTransformer`](BaseTransformer.md).[`defaultFlashVarsVideoOutput`](BaseTransformer.md#defaultflashvarsvideooutput)

***

### mapSources()

> `protected` **mapSources**(`sources`, `quality?`, `filter?`): [`VideosFormat`](../interfaces/VideosFormat.md)

Defined in: [packages/base/BaseTransformer.ts:138](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseTransformer.ts#L138)

#### Parameters

##### sources

`string`[]

##### quality?

`string` = `VideoQuality.QUnknown`

##### filter?

(`src`) => `boolean`

#### Returns

[`VideosFormat`](../interfaces/VideosFormat.md)

#### Inherited from

[`BaseTransformer`](BaseTransformer.md).[`mapSources`](BaseTransformer.md#mapsources)

***

### defaultVideoOutput()

> `protected` **defaultVideoOutput**\<`T`\>(`metadata`, `options?`): `T`

Defined in: [packages/base/BaseTransformer.ts:156](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseTransformer.ts#L156)

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

#### Inherited from

[`BaseTransformer`](BaseTransformer.md).[`defaultVideoOutput`](BaseTransformer.md#defaultvideooutput)

***

### transform()

> **transform**(`url`, `request?`): `Promise`\<[`DefaultExecutionResult`](../interfaces/DefaultExecutionResult.md)\<`unknown`\> \| [`SxyPornVideoOutput`](../interfaces/SxyPornVideoOutput.md)\>

Defined in: [packages/providers/sxyporn/SxyPornTransformer.ts:13](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/providers/sxyporn/SxyPornTransformer.ts#L13)

Fetches HTML and merges default metadata with provider-specific metadata.

#### Parameters

##### url

`string`

Target page to fetch.

##### request?

[`SxyPornExecArgs`](../interfaces/SxyPornExecArgs.md)

Execution request that identifies the provider and options.

#### Returns

`Promise`\<[`DefaultExecutionResult`](../interfaces/DefaultExecutionResult.md)\<`unknown`\> \| [`SxyPornVideoOutput`](../interfaces/SxyPornVideoOutput.md)\>

Parsed metadata ready for provider-specific output mapping.

#### Overrides

[`BaseTransformer`](BaseTransformer.md).[`transform`](BaseTransformer.md#transform)
