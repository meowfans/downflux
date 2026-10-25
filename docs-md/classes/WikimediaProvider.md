[**downflux**](../README.md)

***

[downflux](../README.md) / WikimediaProvider

# Class: WikimediaProvider

Defined in: [packages/providers/wikimedia/WikimediaProvider.ts:8](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/providers/wikimedia/WikimediaProvider.ts#L8)

Generic provider for sites that can use the default extraction pipeline while
site-specific parsers are still being built.

## Extends

- [`GenericContentProvider`](GenericContentProvider.md)\<[`WikimediaExecArgs`](../interfaces/WikimediaExecArgs.md)\>

## Constructors

### Constructor

> **new WikimediaProvider**(`url`): `WikimediaProvider`

Defined in: [packages/providers/wikimedia/WikimediaProvider.ts:9](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/providers/wikimedia/WikimediaProvider.ts#L9)

#### Parameters

##### url

`string`

#### Returns

`WikimediaProvider`

#### Overrides

[`GenericContentProvider`](GenericContentProvider.md).[`constructor`](GenericContentProvider.md#constructor)

## Properties

### executionOptions

> `protected` **executionOptions**: [`ExecutionOptions`](../interfaces/ExecutionOptions.md) = `{}`

Defined in: [packages/base/BaseProvider.ts:41](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L41)

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`executionOptions`](GenericContentProvider.md#executionoptions)

***

### httpOptions

> `protected` **httpOptions**: [`HttpFetchOptions`](../interfaces/HttpFetchOptions.md) = `{}`

Defined in: [packages/base/BaseProvider.ts:48](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L48)

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`httpOptions`](GenericContentProvider.md#httpoptions)

***

### deps

> `protected` `readonly` **deps**: [`CoordinatorDependencies`](../interfaces/CoordinatorDependencies.md)

Defined in: [packages/base/BaseProvider.ts:49](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L49)

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`deps`](GenericContentProvider.md#deps)

***

### provider

> `protected` `readonly` **provider**: [`Provider`](../enumerations/Provider.md)

Defined in: [packages/base/BaseProvider.ts:50](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L50)

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`provider`](GenericContentProvider.md#provider)

***

### urlPattern

> `protected` `readonly` **urlPattern**: `RegExp`

Defined in: [packages/base/BaseProvider.ts:51](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L51)

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`urlPattern`](GenericContentProvider.md#urlpattern)

***

### providerMetadata

> `protected` `readonly` **providerMetadata**: [`ProviderMetadata`](../interfaces/ProviderMetadata.md)

Defined in: [packages/base/BaseProvider.ts:52](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L52)

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`providerMetadata`](GenericContentProvider.md#providermetadata)

***

### url

> `protected` `readonly` **url**: `string`

Defined in: [packages/base/BaseProvider.ts:60](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L60)

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`url`](GenericContentProvider.md#url)

***

### config

> `protected` **config**: [`ProviderConfig`](../interfaces/ProviderConfig.md)

Defined in: [packages/base/BaseProvider.ts:61](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L61)

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`config`](GenericContentProvider.md#config)

## Accessors

### metadata

#### Get Signature

> **get** `protected` **metadata**(): [`ProviderMetadata`](../interfaces/ProviderMetadata.md)

Defined in: [packages/base/BaseProvider.ts:55](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L55)

Provider capabilities, integration status, and access restrictions.

##### Returns

[`ProviderMetadata`](../interfaces/ProviderMetadata.md)

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`metadata`](GenericContentProvider.md#metadata)

***

### ORIGIN

#### Get Signature

> **get** `protected` **ORIGIN**(): `string`

Defined in: [packages/base/BaseProvider.ts:100](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L100)

##### Returns

`string`

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`ORIGIN`](GenericContentProvider.md#origin)

***

### HOST\_NAME

#### Get Signature

> **get** `protected` **HOST\_NAME**(): `string`

Defined in: [packages/base/BaseProvider.ts:104](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L104)

##### Returns

`string`

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`HOST_NAME`](GenericContentProvider.md#host_name)

## Methods

### isValidHostName()

> `protected` **isValidHostName**(): `boolean`

Defined in: [packages/base/BaseProvider.ts:108](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L108)

#### Returns

`boolean`

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`isValidHostName`](GenericContentProvider.md#isvalidhostname)

***

### setAuth()

> **setAuth**(`auth`): `this`

Defined in: [packages/base/BaseProvider.ts:129](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L129)

Sets authentication credentials for the provider.

#### Parameters

##### auth

[`AuthenticatedCrawlOptions`](../interfaces/AuthenticatedCrawlOptions.md)

Authentication options including cookie, bearer token, CSRF token, API key, client ID, and user agent

#### Returns

`this`

#### Remarks

Configures HTTP headers and user agent based on provided authentication credentials.
Supports multiple authentication methods: cookies, bearer tokens, CSRF tokens, API keys, and client IDs.

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`setAuth`](GenericContentProvider.md#setauth)

***

### setHeaders()

> **setHeaders**(`headers`): `this`

Defined in: [packages/base/BaseProvider.ts:148](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L148)

Sets custom HTTP headers.

#### Parameters

##### headers

`Record`\<`string`, `string`\>

Request header map

#### Returns

`this`

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`setHeaders`](GenericContentProvider.md#setheaders)

***

### setTimeout()

> **setTimeout**(`timeoutMs`): `this`

Defined in: [packages/base/BaseProvider.ts:157](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L157)

Sets HTTP timeout.

#### Parameters

##### timeoutMs

`number`

Timeout in milliseconds

#### Returns

`this`

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`setTimeout`](GenericContentProvider.md#settimeout)

***

### setRetries()

> **setRetries**(`retries`): `this`

Defined in: [packages/base/BaseProvider.ts:166](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L166)

Sets fetch retry count.

#### Parameters

##### retries

`number`

Retry attempt count

#### Returns

`this`

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`setRetries`](GenericContentProvider.md#setretries)

***

### setTransformOutput()

> **setTransformOutput**(`transform?`): `this`

Defined in: [packages/base/BaseProvider.ts:175](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L175)

Transform output to provider-specific result type.

#### Parameters

##### transform?

`boolean` = `true`

Default is true, which applies the default transformation. Set to false to return raw extracted data.

#### Returns

`this`

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`setTransformOutput`](GenericContentProvider.md#settransformoutput)

***

### setHttpOptions()

> **setHttpOptions**(`opts`): `this`

Defined in: [packages/base/BaseProvider.ts:184](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L184)

Sets HTTP fetch options.

#### Parameters

##### opts

[`HttpFetchOptions`](../interfaces/HttpFetchOptions.md)

HTTP options to merge

#### Returns

`this`

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`setHttpOptions`](GenericContentProvider.md#sethttpoptions)

***

### setNoDownload()

> **setNoDownload**(`noDownload?`): `this`

Defined in: [packages/base/BaseProvider.ts:194](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L194)

Sets no download flag.

#### Parameters

##### noDownload?

`boolean` = `false`

No download flag

#### Returns

`this`

#### Default Value

```ts
false - set to true to skip the download phase and only perform extraction (useful for debugging or when you only need metadata)
```

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`setNoDownload`](GenericContentProvider.md#setnodownload)

***

### setTranscodeOptions()

> **setTranscodeOptions**(`opts`): `this`

Defined in: [packages/base/BaseProvider.ts:207](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L207)

Sets transcode options.

#### Parameters

##### opts

[`TranscodeOptions`](../interfaces/TranscodeOptions.md)

Sometimes due to nature of the OS, the video might not play after download.

In such cases, you can set transcodeOptions to re-encode the video using ffmpeg which should resolve most compatibility issues.
Make sure your OS can handle it

#### Returns

`this`

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`setTranscodeOptions`](GenericContentProvider.md#settranscodeoptions)

***

### setPreferredFormat()

> **setPreferredFormat**(`format`): `this`

Defined in: [packages/base/BaseProvider.ts:216](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L216)

Sets preferred video format.

#### Parameters

##### format

[`VideoFormat`](../enumerations/VideoFormat.md)

Video format (hls or mp4)

#### Returns

`this`

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`setPreferredFormat`](GenericContentProvider.md#setpreferredformat)

***

### setPreferredCodec()

> **setPreferredCodec**(`codec`): `this`

Defined in: [packages/base/BaseProvider.ts:230](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L230)

Sets preferred video codec.

#### Parameters

##### codec

[`VideoCodec`](../enumerations/VideoCodec.md)

Video codec (h264 or av1)

This feature is still experimental not yet implemented for all providers.

It allows you to specify a preferred video codec which can help with compatibility or performance in some cases.
If the provider supports it, it will try to download the video in the specified codec. If not available, it will fall back to the default behavior.

#### Returns

`this`

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`setPreferredCodec`](GenericContentProvider.md#setpreferredcodec)

***

### setJobOptions()

> **setJobOptions**(`opts`): `this`

Defined in: [packages/base/BaseProvider.ts:239](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L239)

Sets ExecutionCoordinator options.

#### Parameters

##### opts

[`ExecutionOptions`](../interfaces/ExecutionOptions.md)

Job options to merge

#### Returns

`this`

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`setJobOptions`](GenericContentProvider.md#setjoboptions)

***

### setAgentOptions()

> **setAgentOptions**(`opts`): `this`

Defined in: [packages/base/BaseProvider.ts:248](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L248)

Sets HTTP agent options.

#### Parameters

##### opts

[`HttpAgentOptions`](../interfaces/HttpAgentOptions.md)

HTTP agent options to merge

#### Returns

`this`

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`setAgentOptions`](GenericContentProvider.md#setagentoptions)

***

### setMaxDownloads()

> **setMaxDownloads**(`maxDownloads`): `this`

Defined in: [packages/base/BaseProvider.ts:257](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L257)

Sets maximum downloads.

#### Parameters

##### maxDownloads

`number`

Download limit

#### Returns

`this`

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`setMaxDownloads`](GenericContentProvider.md#setmaxdownloads)

***

### setAllowedExtensions()

> **setAllowedExtensions**(...`extensions`): `this`

Defined in: [packages/base/BaseProvider.ts:266](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L266)

Sets allowed file extensions.

#### Parameters

##### extensions

...[`AllowedExtension`](../type-aliases/AllowedExtension.md)[]

File extensions such as `jpg` or `png`

#### Returns

`this`

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`setAllowedExtensions`](GenericContentProvider.md#setallowedextensions)

***

### onProgress()

> **onProgress**(`handler`): `this`

Defined in: [packages/base/BaseProvider.ts:275](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L275)

Sets progress handler.

#### Parameters

##### handler

(`event`) => `void`

Progress event callback

#### Returns

`this`

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`onProgress`](GenericContentProvider.md#onprogress)

***

### setProgressLogging()

> **setProgressLogging**(`enabled?`, `options?`): `this`

Defined in: [packages/base/BaseProvider.ts:294](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L294)

Enables console progress logging.

#### Parameters

##### enabled?

`boolean` = `true`

Console logging flag

##### options?

Rendering options.

###### captureConsole?

`boolean`

#### Returns

`this`

#### Default Value

```ts
true
```

#### Remarks

Progress redraws in place, so output written directly to the terminal while a
job runs is erased by the next frame. Pass `captureConsole: true` to route
`console.log` around the live region; it is off by default because it patches
`stdout`/`stderr`, which is the host application's call to make, not the
library's.

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`setProgressLogging`](GenericContentProvider.md#setprogresslogging)

***

### setOutput()

> **setOutput**(`type`, `config?`): `this`

Defined in: [packages/base/BaseProvider.ts:307](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L307)

Sets output type.

#### Parameters

##### type

[`OutputType`](../enumerations/OutputType.md)

Job output mode

##### config?

[`DirectoryOutputOptions`](../interfaces/DirectoryOutputOptions.md) = `...`

Directory output configuration

#### Returns

`this`

#### Default Value

```ts
OutputType.JSON
```

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`setOutput`](GenericContentProvider.md#setoutput)

***

### setExecutionType()

> **setExecutionType**(`type`): `this`

Defined in: [packages/base/BaseProvider.ts:328](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L328)

Sets execution strategy.

#### Parameters

##### type

[`ExecutionType`](../enumerations/ExecutionType.md)

Execution mode

#### Returns

`this`

#### Default Value

ExecutionType.SEQUENTIAL

This feature is still `experimental` and not yet implemented for all providers.
It allows you to specify the execution strategy for the extraction and download process.

- `SEQUENTIAL`: Extracts and downloads items one by one.
 This is the most compatible mode and should work with all providers, but can be slower for large batches.

- `PARALLEL`: Extracts all items first, then downloads them in parallel.
 This can be faster for large batches, but may cause issues with providers that have strict rate limits or anti-bot measures.
Use with caution and test thoroughly if you choose to use `PARALLEL` execution.

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`setExecutionType`](GenericContentProvider.md#setexecutiontype)

***

### whenSettled()

> **whenSettled**(): `Promise`\<[`JobSettlement`](../interfaces/JobSettlement.md)\>

Defined in: [packages/base/BaseProvider.ts:391](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L391)

Waits for the download phase of the most recent job.

#### Returns

`Promise`\<[`JobSettlement`](../interfaces/JobSettlement.md)\>

How many items were written, how many failed, and their errors.

#### Remarks

Provider methods resolve as soon as extraction finishes so callers learn what
is about to download without blocking on it. For `DEVICE` and
`STREAM` the transfers continue afterwards, and this is the handle for code
that needs to know when they finished:

```ts
const provider = new BeegProvider(url).setOutput(OutputType.DEVICE, { directoryPath: '/srv/media' });

const metadata = await provider.getVideo();   // returns immediately
const { downloaded, failed, errors } = await provider.whenSettled();
```

Resolves even when individual items fail, since a partial batch is a normal
outcome; inspect `failed` and `errors`. It rejects only if the download
pipeline itself could not run. Returns a zeroed settlement for output modes
that never download.

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`whenSettled`](GenericContentProvider.md#whensettled)

***

### assertSupported()

> `protected` **assertSupported**(`method?`): `void`

Defined in: [packages/base/BaseProvider.ts:406](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L406)

Enforces the capability flags declared in [ProviderMetadata](../interfaces/ProviderMetadata.md).

#### Parameters

##### method?

`string`

Provider method being invoked, used for error context.

#### Returns

`void`

#### Remarks

The metadata block documents what a provider can and cannot do. Without this
check the flags were write-only: `canDownload: false` still attempted a
download and `requiresBrowser: true` still issued plain HTTP, so callers only
discovered the limitation as an obscure failure deep in the transport layer.

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`assertSupported`](GenericContentProvider.md#assertsupported)

***

### dispose()

> **dispose**(`options?`): `Promise`\<`void`\>

Defined in: [packages/base/BaseProvider.ts:441](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L441)

Releases resources held by this provider instance.

#### Parameters

##### options?

###### closeConnections?

`boolean`

#### Returns

`Promise`\<`void`\>

#### Remarks

Detaches the CLI progress listener. Pass `closeConnections` to also close the
process-wide undici pools, which is appropriate when the host process is done
with DownFlux entirely rather than between jobs.

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`dispose`](GenericContentProvider.md#dispose)

***

### buildRequest()

> `protected` **buildRequest**(`overrides?`): [`WikimediaExecArgs`](../interfaces/WikimediaExecArgs.md)

Defined in: [packages/base/BaseProvider.ts:456](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L456)

Builds the execution request passed to the coordinator layer.

#### Parameters

##### overrides?

`Partial`\<[`WikimediaExecArgs`](../interfaces/WikimediaExecArgs.md)\>

Provider method options that should override defaults.

#### Returns

[`WikimediaExecArgs`](../interfaces/WikimediaExecArgs.md)

A typed request containing provider metadata and execution options.

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`buildRequest`](GenericContentProvider.md#buildrequest)

***

### execute()

> `protected` **execute**\<`TResult`\>(`overrides`): `Promise`\<`TResult`\>

Defined in: [packages/base/BaseProvider.ts:477](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L477)

Runs extraction and optional downloads through the shared coordinator.

#### Type Parameters

##### TResult

`TResult`

#### Parameters

##### overrides

\{ `entryUrl?`: `string`; \} \| [`WikimediaExecArgs`](../interfaces/WikimediaExecArgs.md) & `object`

Provider method request data, including execution shape.

#### Returns

`Promise`\<`TResult`\>

Extracted output in the shape requested by the provider method.

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`execute`](GenericContentProvider.md#execute)

***

### makeTargets()

> `protected` **makeTargets**(`sourceUrl`, `range`, `provider`, `method`, `addTrailingSlash?`): `object`

Defined in: [packages/base/BaseProvider.ts:512](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseProvider.ts#L512)

Builds paginated target URLs for list-like provider methods.

#### Parameters

##### sourceUrl

`string`

Base URL before the page number.

##### range

[`Range`](../type-aliases/Range.md)

Page or start/end range to expand.

##### provider

[`Provider`](../enumerations/Provider.md)

Provider used for range validation errors.

##### method

`string`

Provider method used for range validation errors.

##### addTrailingSlash?

`boolean` = `true`

Whether generated target URLs should end with `/`.

#### Returns

`object`

Provider, method, and generated target URLs.

##### targets

> **targets**: `string`[]

##### provider

> **provider**: [`Provider`](../enumerations/Provider.md)

##### method

> **method**: `string`

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`makeTargets`](GenericContentProvider.md#maketargets)

***

### getMetadata()

> **getMetadata**(): `Promise`\<[`DefaultExecutionResult`](../interfaces/DefaultExecutionResult.md)\<`unknown`\>\>

Defined in: [packages/providers/shared/GenericContentProvider.ts:30](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/providers/shared/GenericContentProvider.ts#L30)

#### Returns

`Promise`\<[`DefaultExecutionResult`](../interfaces/DefaultExecutionResult.md)\<`unknown`\>\>

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`getMetadata`](GenericContentProvider.md#getmetadata)

***

### getLinks()

> **getLinks**(): `Promise`\<`string`[]\>

Defined in: [packages/providers/shared/GenericContentProvider.ts:40](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/providers/shared/GenericContentProvider.ts#L40)

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`getLinks`](GenericContentProvider.md#getlinks)

***

### getImages()

> **getImages**(): `Promise`\<`string`[]\>

Defined in: [packages/providers/shared/GenericContentProvider.ts:45](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/providers/shared/GenericContentProvider.ts#L45)

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`getImages`](GenericContentProvider.md#getimages)

***

### getVideos()

> **getVideos**(): `Promise`\<`string`[]\>

Defined in: [packages/providers/shared/GenericContentProvider.ts:50](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/providers/shared/GenericContentProvider.ts#L50)

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`getVideos`](GenericContentProvider.md#getvideos)

***

### getAudio()

> **getAudio**(): `Promise`\<`string`[]\>

Defined in: [packages/providers/shared/GenericContentProvider.ts:55](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/providers/shared/GenericContentProvider.ts#L55)

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`getAudio`](GenericContentProvider.md#getaudio)

***

### getAllUrls()

> **getAllUrls**(): `Promise`\<`string`[]\>

Defined in: [packages/providers/shared/GenericContentProvider.ts:60](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/providers/shared/GenericContentProvider.ts#L60)

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`getAllUrls`](GenericContentProvider.md#getallurls)

***

### getDownloadableResources()

> **getDownloadableResources**(): `Promise`\<`string`[]\>

Defined in: [packages/providers/shared/GenericContentProvider.ts:73](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/providers/shared/GenericContentProvider.ts#L73)

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`getDownloadableResources`](GenericContentProvider.md#getdownloadableresources)
