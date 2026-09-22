[**downflux**](../README.md)

***

[downflux](../README.md) / PornDoeExecArgs

# Interface: PornDoeExecArgs

Defined in: [packages/providers/porndoe/PornDoeContracts.ts:3](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/porndoe/PornDoeContracts.ts#L3)

Configuration options for a DownFlux ExecutionCoordinator.
Combines fetch, extraction, pipeline, and output settings.

## Extends

- [`ExecutionArgs`](ExecutionArgs.md)

## Properties

### headers?

> `optional` **headers?**: `Record`\<`string`, `string`\>

Defined in: [packages/contracts/DownloadContracts.ts:127](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/DownloadContracts.ts#L127)

Custom request headers

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`headers`](ExecutionArgs.md#headers)

***

### timeoutMs?

> `optional` **timeoutMs?**: `number`

Defined in: [packages/contracts/DownloadContracts.ts:130](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/DownloadContracts.ts#L130)

Request timeout in milliseconds

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`timeoutMs`](ExecutionArgs.md#timeoutms)

***

### retries?

> `optional` **retries?**: `number`

Defined in: [packages/contracts/DownloadContracts.ts:133](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/DownloadContracts.ts#L133)

Failed request retry count

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`retries`](ExecutionArgs.md#retries)

***

### referer?

> `optional` **referer?**: `string`

Defined in: [packages/contracts/DownloadContracts.ts:136](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/DownloadContracts.ts#L136)

Request referer URL

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`referer`](ExecutionArgs.md#referer)

***

### formData?

> `optional` **formData?**: `Record`\<`string`, `string`\>

Defined in: [packages/contracts/DownloadContracts.ts:139](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/DownloadContracts.ts#L139)

Optional FormData for POST requests

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`formData`](ExecutionArgs.md#formdata)

***

### provider

> **provider**: [`Provider`](../enumerations/Provider.md)

Defined in: [packages/contracts/ExecutionContracts.ts:21](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L21)

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`provider`](ExecutionArgs.md#provider)

***

### method

> **method**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:22](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L22)

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`method`](ExecutionArgs.md#method)

***

### entryUrl

> **entryUrl**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:23](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L23)

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`entryUrl`](ExecutionArgs.md#entryurl)

***

### targets

> **targets**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:24](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L24)

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`targets`](ExecutionArgs.md#targets)

***

### executionShape

> **executionShape**: [`ExecutionShape`](../type-aliases/ExecutionShape.md)

Defined in: [packages/contracts/ExecutionContracts.ts:29](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L29)

Internal runtime metadata describing the structural shape of extracted output.
single -> TResult; multiple -> TResult[]

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`executionShape`](ExecutionArgs.md#executionshape)

***

### executionType?

> `optional` **executionType?**: [`ExecutionType`](../enumerations/ExecutionType.md)

Defined in: [packages/contracts/ExecutionContracts.ts:31](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L31)

Job execution strategy

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`executionType`](ExecutionArgs.md#executiontype)

***

### extractionTarget

> **extractionTarget**: [`ExtractionTarget`](../enumerations/ExtractionTarget.md)

Defined in: [packages/contracts/ExecutionContracts.ts:32](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L32)

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`extractionTarget`](ExecutionArgs.md#extractiontarget)

***

### providerMetadata?

> `optional` **providerMetadata?**: [`ProviderMetadata`](ProviderMetadata.md)

Defined in: [packages/contracts/ExecutionContracts.ts:35](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L35)

Provider capabilities and restrictions

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`providerMetadata`](ExecutionArgs.md#providermetadata)

***

### dirConfig?

> `optional` **dirConfig?**: [`DirectoryOutputOptions`](DirectoryOutputOptions.md)

Defined in: [packages/contracts/ExecutionContracts.ts:68](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L68)

Directory output configuration

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`dirConfig`](ExecutionArgs.md#dirconfig)

***

### allowedExtensions?

> `optional` **allowedExtensions?**: [`AllowedExtension`](../type-aliases/AllowedExtension.md)[]

Defined in: [packages/contracts/ExecutionContracts.ts:71](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L71)

Allowed file extensions

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`allowedExtensions`](ExecutionArgs.md#allowedextensions)

***

### allowedVideoQuality?

> `optional` **allowedVideoQuality?**: [`VideoQuality`](../enumerations/VideoQuality.md)

Defined in: [packages/contracts/ExecutionContracts.ts:74](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L74)

Allowed video quality

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`allowedVideoQuality`](ExecutionArgs.md#allowedvideoquality)

***

### preferredVideoFormat?

> `optional` **preferredVideoFormat?**: [`VideoFormat`](../enumerations/VideoFormat.md)

Defined in: [packages/contracts/ExecutionContracts.ts:77](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L77)

Preferred video format (e.g. hls, mp4)

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`preferredVideoFormat`](ExecutionArgs.md#preferredvideoformat)

***

### preferredVideoCodec?

> `optional` **preferredVideoCodec?**: [`VideoCodec`](../enumerations/VideoCodec.md)

Defined in: [packages/contracts/ExecutionContracts.ts:80](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L80)

Preferred video codec (e.g. h264, av1)

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`preferredVideoCodec`](ExecutionArgs.md#preferredvideocodec)

***

### tagFilterOptions?

> `optional` **tagFilterOptions?**: [`TagFilterOptions`](TagFilterOptions.md)

Defined in: [packages/contracts/ExecutionContracts.ts:83](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L83)

Tag filtering options

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`tagFilterOptions`](ExecutionArgs.md#tagfilteroptions)

***

### maxDownloads?

> `optional` **maxDownloads?**: `number`

Defined in: [packages/contracts/ExecutionContracts.ts:86](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L86)

Maximum number of items to download

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`maxDownloads`](ExecutionArgs.md#maxdownloads)

***

### transformOutput?

> `optional` **transformOutput?**: `boolean`

Defined in: [packages/contracts/ExecutionContracts.ts:89](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L89)

Transform output to service-specific result type

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`transformOutput`](ExecutionArgs.md#transformoutput)

***

### concurrency?

> `optional` **concurrency?**: `number`

Defined in: [packages/contracts/ExecutionContracts.ts:92](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L92)

Download phase concurrency

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`concurrency`](ExecutionArgs.md#concurrency)

***

### noDownload?

> `optional` **noDownload?**: `boolean`

Defined in: [packages/contracts/ExecutionContracts.ts:95](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L95)

Iterate only-- this prop is only used for logging http-services

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`noDownload`](ExecutionArgs.md#nodownload)

***

### extractConcurrency?

> `optional` **extractConcurrency?**: `number`

Defined in: [packages/contracts/ExecutionContracts.ts:98](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L98)

Extraction phase concurrency

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`extractConcurrency`](ExecutionArgs.md#extractconcurrency)

***

### captureConsole?

> `optional` **captureConsole?**: `boolean`

Defined in: [packages/contracts/ExecutionContracts.ts:113](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L113)

Whether progress rendering may take over `stdout`/`stderr`.

#### Remarks

Off by default. Live progress redraws in place, so anything written directly
to the terminal while a job renders is erased by the next frame. Enabling this
patches both streams for the duration of the job so `console.log` survives.

It is opt-in because patching a global belongs to the application that owns
the process, not to a library running inside it.

#### Default Value

```ts
false
```

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`captureConsole`](ExecutionArgs.md#captureconsole)

***

### maxCdnFallbacks?

> `optional` **maxCdnFallbacks?**: `number`

Defined in: [packages/contracts/ExecutionContracts.ts:116](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L116)

Maximum CDN fallback attempts allowed per download item.

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`maxCdnFallbacks`](ExecutionArgs.md#maxcdnfallbacks)

***

### maxReExtractions?

> `optional` **maxReExtractions?**: `number`

Defined in: [packages/contracts/ExecutionContracts.ts:119](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L119)

Maximum expired-URL re-extraction attempts allowed per download item.

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`maxReExtractions`](ExecutionArgs.md#maxreextractions)

***

### transcodeOptions?

> `optional` **transcodeOptions?**: [`TranscodeOptions`](TranscodeOptions.md)

Defined in: [packages/contracts/ExecutionContracts.ts:122](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L122)

Transcoding options

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`transcodeOptions`](ExecutionArgs.md#transcodeoptions)

***

### downloadRetries?

> `optional` **downloadRetries?**: `number`

Defined in: [packages/contracts/ExecutionContracts.ts:125](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L125)

Download retry count

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`downloadRetries`](ExecutionArgs.md#downloadretries)

***

### retryDelayMs?

> `optional` **retryDelayMs?**: `number`

Defined in: [packages/contracts/ExecutionContracts.ts:128](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L128)

Delay between download retries in milliseconds

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`retryDelayMs`](ExecutionArgs.md#retrydelayms)

***

### pipelineHooks?

> `optional` **pipelineHooks?**: [`PipelineHook`](PipelineHook.md)[]

Defined in: [packages/contracts/ExecutionContracts.ts:131](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L131)

PipelineRegistry lifecycle hooks

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`pipelineHooks`](ExecutionArgs.md#pipelinehooks)

***

### onProgress?

> `optional` **onProgress?**: (`event`) => `void`

Defined in: [packages/contracts/ExecutionContracts.ts:134](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L134)

Progress event handler

#### Parameters

##### event

[`JobProgressEvent`](JobProgressEvent.md)

#### Returns

`void`

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`onProgress`](ExecutionArgs.md#onprogress)

***

### logProgress?

> `optional` **logProgress?**: `boolean`

Defined in: [packages/contracts/ExecutionContracts.ts:137](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L137)

Enables console progress logging

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`logProgress`](ExecutionArgs.md#logprogress)

***

### outputType?

> `optional` **outputType?**: [`OutputType`](../enumerations/OutputType.md)

Defined in: [packages/contracts/ExecutionContracts.ts:140](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L140)

Output format for ExecutionCoordinator results

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`outputType`](ExecutionArgs.md#outputtype)

***

### signal?

> `optional` **signal?**: `AbortSignal`

Defined in: [packages/contracts/ExecutionContracts.ts:146](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L146)

Abort signal for cancelling the ExecutionCoordinator

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`signal`](ExecutionArgs.md#signal)

***

### userAgent?

> `optional` **userAgent?**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:150](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L150)

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`userAgent`](ExecutionArgs.md#useragent)

***

### enableSniSpoofing?

> `optional` **enableSniSpoofing?**: `boolean`

Defined in: [packages/contracts/ExecutionContracts.ts:152](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L152)

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`enableSniSpoofing`](ExecutionArgs.md#enablesnispoofing)

***

### proxy?

> `optional` **proxy?**: [`ProxyOptions`](ProxyOptions.md)

Defined in: [packages/contracts/ExecutionContracts.ts:154](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L154)

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`proxy`](ExecutionArgs.md#proxy)

***

### dispatcher?

> `optional` **dispatcher?**: `Dispatcher`

Defined in: [packages/contracts/ExecutionContracts.ts:156](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L156)

#### Inherited from

[`ExecutionArgs`](ExecutionArgs.md).[`dispatcher`](ExecutionArgs.md#dispatcher)
