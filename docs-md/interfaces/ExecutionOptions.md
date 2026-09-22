[**downflux**](../README.md)

***

[downflux](../README.md) / ExecutionOptions

# Interface: ExecutionOptions

Defined in: [packages/contracts/ExecutionContracts.ts:66](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L66)

Configuration options for a DownFlux ExecutionCoordinator.
Combines fetch, extraction, pipeline, and output settings.

## Extends

- [`HttpFetchOptions`](HttpFetchOptions.md)

## Extended by

- [`ExecutionArgs`](ExecutionArgs.md)

## Properties

### headers?

> `optional` **headers?**: `Record`\<`string`, `string`\>

Defined in: [packages/contracts/DownloadContracts.ts:127](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/DownloadContracts.ts#L127)

Custom request headers

#### Inherited from

[`HttpFetchOptions`](HttpFetchOptions.md).[`headers`](HttpFetchOptions.md#headers)

***

### timeoutMs?

> `optional` **timeoutMs?**: `number`

Defined in: [packages/contracts/DownloadContracts.ts:130](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/DownloadContracts.ts#L130)

Request timeout in milliseconds

#### Inherited from

[`HttpFetchOptions`](HttpFetchOptions.md).[`timeoutMs`](HttpFetchOptions.md#timeoutms)

***

### retries?

> `optional` **retries?**: `number`

Defined in: [packages/contracts/DownloadContracts.ts:133](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/DownloadContracts.ts#L133)

Failed request retry count

#### Inherited from

[`HttpFetchOptions`](HttpFetchOptions.md).[`retries`](HttpFetchOptions.md#retries)

***

### referer?

> `optional` **referer?**: `string`

Defined in: [packages/contracts/DownloadContracts.ts:136](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/DownloadContracts.ts#L136)

Request referer URL

#### Inherited from

[`HttpFetchOptions`](HttpFetchOptions.md).[`referer`](HttpFetchOptions.md#referer)

***

### formData?

> `optional` **formData?**: `Record`\<`string`, `string`\>

Defined in: [packages/contracts/DownloadContracts.ts:139](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/DownloadContracts.ts#L139)

Optional FormData for POST requests

#### Inherited from

[`HttpFetchOptions`](HttpFetchOptions.md).[`formData`](HttpFetchOptions.md#formdata)

***

### dirConfig?

> `optional` **dirConfig?**: [`DirectoryOutputOptions`](DirectoryOutputOptions.md)

Defined in: [packages/contracts/ExecutionContracts.ts:68](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L68)

Directory output configuration

***

### allowedExtensions?

> `optional` **allowedExtensions?**: [`AllowedExtension`](../type-aliases/AllowedExtension.md)[]

Defined in: [packages/contracts/ExecutionContracts.ts:71](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L71)

Allowed file extensions

***

### allowedVideoQuality?

> `optional` **allowedVideoQuality?**: [`VideoQuality`](../enumerations/VideoQuality.md)

Defined in: [packages/contracts/ExecutionContracts.ts:74](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L74)

Allowed video quality

***

### preferredVideoFormat?

> `optional` **preferredVideoFormat?**: [`VideoFormat`](../enumerations/VideoFormat.md)

Defined in: [packages/contracts/ExecutionContracts.ts:77](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L77)

Preferred video format (e.g. hls, mp4)

***

### preferredVideoCodec?

> `optional` **preferredVideoCodec?**: [`VideoCodec`](../enumerations/VideoCodec.md)

Defined in: [packages/contracts/ExecutionContracts.ts:80](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L80)

Preferred video codec (e.g. h264, av1)

***

### tagFilterOptions?

> `optional` **tagFilterOptions?**: [`TagFilterOptions`](TagFilterOptions.md)

Defined in: [packages/contracts/ExecutionContracts.ts:83](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L83)

Tag filtering options

***

### maxDownloads?

> `optional` **maxDownloads?**: `number`

Defined in: [packages/contracts/ExecutionContracts.ts:86](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L86)

Maximum number of items to download

***

### transformOutput?

> `optional` **transformOutput?**: `boolean`

Defined in: [packages/contracts/ExecutionContracts.ts:89](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L89)

Transform output to service-specific result type

***

### concurrency?

> `optional` **concurrency?**: `number`

Defined in: [packages/contracts/ExecutionContracts.ts:92](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L92)

Download phase concurrency

***

### noDownload?

> `optional` **noDownload?**: `boolean`

Defined in: [packages/contracts/ExecutionContracts.ts:95](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L95)

Iterate only-- this prop is only used for logging http-services

***

### extractConcurrency?

> `optional` **extractConcurrency?**: `number`

Defined in: [packages/contracts/ExecutionContracts.ts:98](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L98)

Extraction phase concurrency

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

***

### maxCdnFallbacks?

> `optional` **maxCdnFallbacks?**: `number`

Defined in: [packages/contracts/ExecutionContracts.ts:116](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L116)

Maximum CDN fallback attempts allowed per download item.

***

### maxReExtractions?

> `optional` **maxReExtractions?**: `number`

Defined in: [packages/contracts/ExecutionContracts.ts:119](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L119)

Maximum expired-URL re-extraction attempts allowed per download item.

***

### transcodeOptions?

> `optional` **transcodeOptions?**: [`TranscodeOptions`](TranscodeOptions.md)

Defined in: [packages/contracts/ExecutionContracts.ts:122](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L122)

Transcoding options

***

### downloadRetries?

> `optional` **downloadRetries?**: `number`

Defined in: [packages/contracts/ExecutionContracts.ts:125](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L125)

Download retry count

***

### retryDelayMs?

> `optional` **retryDelayMs?**: `number`

Defined in: [packages/contracts/ExecutionContracts.ts:128](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L128)

Delay between download retries in milliseconds

***

### pipelineHooks?

> `optional` **pipelineHooks?**: [`PipelineHook`](PipelineHook.md)[]

Defined in: [packages/contracts/ExecutionContracts.ts:131](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L131)

PipelineRegistry lifecycle hooks

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

***

### logProgress?

> `optional` **logProgress?**: `boolean`

Defined in: [packages/contracts/ExecutionContracts.ts:137](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L137)

Enables console progress logging

***

### outputType?

> `optional` **outputType?**: [`OutputType`](../enumerations/OutputType.md)

Defined in: [packages/contracts/ExecutionContracts.ts:140](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L140)

Output format for ExecutionCoordinator results

***

### executionType?

> `optional` **executionType?**: [`ExecutionType`](../enumerations/ExecutionType.md)

Defined in: [packages/contracts/ExecutionContracts.ts:143](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L143)

Job execution strategy

***

### signal?

> `optional` **signal?**: `AbortSignal`

Defined in: [packages/contracts/ExecutionContracts.ts:146](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L146)

Abort signal for cancelling the ExecutionCoordinator

#### Overrides

[`HttpFetchOptions`](HttpFetchOptions.md).[`signal`](HttpFetchOptions.md#signal)

***

### userAgent?

> `optional` **userAgent?**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:150](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L150)

#### Inherited from

[`HttpFetchOptions`](HttpFetchOptions.md).[`userAgent`](HttpFetchOptions.md#useragent)

***

### enableSniSpoofing?

> `optional` **enableSniSpoofing?**: `boolean`

Defined in: [packages/contracts/ExecutionContracts.ts:152](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L152)

#### Inherited from

[`HttpFetchOptions`](HttpFetchOptions.md).[`enableSniSpoofing`](HttpFetchOptions.md#enablesnispoofing)

***

### proxy?

> `optional` **proxy?**: [`ProxyOptions`](ProxyOptions.md)

Defined in: [packages/contracts/ExecutionContracts.ts:154](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L154)

#### Inherited from

[`HttpFetchOptions`](HttpFetchOptions.md).[`proxy`](HttpFetchOptions.md#proxy)

***

### dispatcher?

> `optional` **dispatcher?**: `Dispatcher`

Defined in: [packages/contracts/ExecutionContracts.ts:156](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L156)

#### Inherited from

[`HttpFetchOptions`](HttpFetchOptions.md).[`dispatcher`](HttpFetchOptions.md#dispatcher)
