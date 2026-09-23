[**downflux**](../README.md)

***

[downflux](../README.md) / XozillaProvider

# Class: XozillaProvider

Defined in: [packages/providers/xozilla/XozillaProvider.ts:15](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/xozilla/XozillaProvider.ts#L15)

Public Xozilla provider entry point.

## Remarks

The provider owns URL validation, fluent execution options, and provider metadata.
Supports integrated MP4 downloads, KVS video fields. Marked under development so callers should expect provider-specific changes.
Xozilla supports video downloading (canDownload: true).

## Extends

- [`BaseProvider`](BaseProvider.md)\<[`XozillaExecArgs`](../interfaces/XozillaExecArgs.md)\>

## Constructors

### Constructor

> **new XozillaProvider**(`url`): `XozillaProvider`

Defined in: [packages/providers/xozilla/XozillaProvider.ts:19](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/xozilla/XozillaProvider.ts#L19)

#### Parameters

##### url

`string`

#### Returns

`XozillaProvider`

#### Overrides

[`BaseProvider`](BaseProvider.md).[`constructor`](BaseProvider.md#constructor)

## Properties

### executionOptions

> `protected` **executionOptions**: [`ExecutionOptions`](../interfaces/ExecutionOptions.md) = `{}`

Defined in: [packages/base/BaseProvider.ts:41](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L41)

#### Inherited from

[`BaseProvider`](BaseProvider.md).[`executionOptions`](BaseProvider.md#executionoptions)

***

### httpOptions

> `protected` **httpOptions**: [`HttpFetchOptions`](../interfaces/HttpFetchOptions.md) = `{}`

Defined in: [packages/base/BaseProvider.ts:48](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L48)

#### Inherited from

[`DefaultProvider`](DefaultProvider.md).[`httpOptions`](DefaultProvider.md#httpoptions)

***

### deps

> `protected` `readonly` **deps**: [`CoordinatorDependencies`](../interfaces/CoordinatorDependencies.md)

Defined in: [packages/base/BaseProvider.ts:49](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L49)

#### Inherited from

[`DefaultProvider`](DefaultProvider.md).[`deps`](DefaultProvider.md#deps)

***

### urlPattern

> `protected` `readonly` **urlPattern**: `RegExp`

Defined in: [packages/base/BaseProvider.ts:51](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L51)

#### Inherited from

[`DefaultProvider`](DefaultProvider.md).[`urlPattern`](DefaultProvider.md#urlpattern)

***

### providerMetadata

> `protected` `readonly` **providerMetadata**: [`ProviderMetadata`](../interfaces/ProviderMetadata.md)

Defined in: [packages/base/BaseProvider.ts:52](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L52)

#### Inherited from

[`DefaultProvider`](DefaultProvider.md).[`providerMetadata`](DefaultProvider.md#providermetadata)

***

### url

> `protected` `readonly` **url**: `string`

Defined in: [packages/base/BaseProvider.ts:60](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L60)

#### Inherited from

[`BaseProvider`](BaseProvider.md).[`url`](BaseProvider.md#url)

***

### config

> `protected` **config**: [`ProviderConfig`](../interfaces/ProviderConfig.md)

Defined in: [packages/base/BaseProvider.ts:61](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L61)

#### Inherited from

[`DefaultProvider`](DefaultProvider.md).[`config`](DefaultProvider.md#config)

***

### provider

> `protected` `readonly` **provider**: [`Xozilla`](../enumerations/Provider.md#xozilla) = `Provider.Xozilla`

Defined in: [packages/providers/xozilla/XozillaProvider.ts:16](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/xozilla/XozillaProvider.ts#L16)

#### Overrides

[`BaseProvider`](BaseProvider.md).[`provider`](BaseProvider.md#provider)

## Accessors

### metadata

#### Get Signature

> **get** `protected` **metadata**(): [`ProviderMetadata`](../interfaces/ProviderMetadata.md)

Defined in: [packages/base/BaseProvider.ts:55](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L55)

Provider capabilities, integration status, and access restrictions.

##### Returns

[`ProviderMetadata`](../interfaces/ProviderMetadata.md)

#### Inherited from

[`DefaultProvider`](DefaultProvider.md).[`metadata`](DefaultProvider.md#metadata)

***

### ORIGIN

#### Get Signature

> **get** `protected` **ORIGIN**(): `string`

Defined in: [packages/base/BaseProvider.ts:89](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L89)

##### Returns

`string`

#### Inherited from

[`BaseProvider`](BaseProvider.md).[`ORIGIN`](BaseProvider.md#origin)

***

### HOST\_NAME

#### Get Signature

> **get** `protected` **HOST\_NAME**(): `string`

Defined in: [packages/base/BaseProvider.ts:93](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L93)

##### Returns

`string`

#### Inherited from

[`DefaultProvider`](DefaultProvider.md).[`HOST_NAME`](DefaultProvider.md#host_name)

## Methods

### isValidHostName()

> `protected` **isValidHostName**(): `boolean`

Defined in: [packages/base/BaseProvider.ts:97](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L97)

#### Returns

`boolean`

#### Inherited from

[`BaseProvider`](BaseProvider.md).[`isValidHostName`](BaseProvider.md#isvalidhostname)

***

### setAuth()

> **setAuth**(`auth`): `this`

Defined in: [packages/base/BaseProvider.ts:118](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L118)

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

[`BaseProvider`](BaseProvider.md).[`setAuth`](BaseProvider.md#setauth)

***

### setHeaders()

> **setHeaders**(`headers`): `this`

Defined in: [packages/base/BaseProvider.ts:137](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L137)

Sets custom HTTP headers.

#### Parameters

##### headers

`Record`\<`string`, `string`\>

Request header map

#### Returns

`this`

#### Inherited from

[`BaseProvider`](BaseProvider.md).[`setHeaders`](BaseProvider.md#setheaders)

***

### setTimeout()

> **setTimeout**(`timeoutMs`): `this`

Defined in: [packages/base/BaseProvider.ts:146](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L146)

Sets HTTP timeout.

#### Parameters

##### timeoutMs

`number`

Timeout in milliseconds

#### Returns

`this`

#### Inherited from

[`BaseProvider`](BaseProvider.md).[`setTimeout`](BaseProvider.md#settimeout)

***

### setRetries()

> **setRetries**(`retries`): `this`

Defined in: [packages/base/BaseProvider.ts:155](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L155)

Sets fetch retry count.

#### Parameters

##### retries

`number`

Retry attempt count

#### Returns

`this`

#### Inherited from

[`BaseProvider`](BaseProvider.md).[`setRetries`](BaseProvider.md#setretries)

***

### setTransformOutput()

> **setTransformOutput**(`transform?`): `this`

Defined in: [packages/base/BaseProvider.ts:164](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L164)

Transform output to provider-specific result type.

#### Parameters

##### transform?

`boolean` = `true`

Default is true, which applies the default transformation. Set to false to return raw extracted data.

#### Returns

`this`

#### Inherited from

[`BaseProvider`](BaseProvider.md).[`setTransformOutput`](BaseProvider.md#settransformoutput)

***

### setHttpOptions()

> **setHttpOptions**(`opts`): `this`

Defined in: [packages/base/BaseProvider.ts:173](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L173)

Sets HTTP fetch options.

#### Parameters

##### opts

[`HttpFetchOptions`](../interfaces/HttpFetchOptions.md)

HTTP options to merge

#### Returns

`this`

#### Inherited from

[`BaseProvider`](BaseProvider.md).[`setHttpOptions`](BaseProvider.md#sethttpoptions)

***

### setNoDownload()

> **setNoDownload**(`noDownload?`): `this`

Defined in: [packages/base/BaseProvider.ts:183](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L183)

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

[`BaseProvider`](BaseProvider.md).[`setNoDownload`](BaseProvider.md#setnodownload)

***

### setTranscodeOptions()

> **setTranscodeOptions**(`opts`): `this`

Defined in: [packages/base/BaseProvider.ts:196](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L196)

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

[`BaseProvider`](BaseProvider.md).[`setTranscodeOptions`](BaseProvider.md#settranscodeoptions)

***

### setPreferredFormat()

> **setPreferredFormat**(`format`): `this`

Defined in: [packages/base/BaseProvider.ts:205](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L205)

Sets preferred video format.

#### Parameters

##### format

[`VideoFormat`](../enumerations/VideoFormat.md)

Video format (hls or mp4)

#### Returns

`this`

#### Inherited from

[`BaseProvider`](BaseProvider.md).[`setPreferredFormat`](BaseProvider.md#setpreferredformat)

***

### setPreferredCodec()

> **setPreferredCodec**(`codec`): `this`

Defined in: [packages/base/BaseProvider.ts:219](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L219)

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

[`BaseProvider`](BaseProvider.md).[`setPreferredCodec`](BaseProvider.md#setpreferredcodec)

***

### setJobOptions()

> **setJobOptions**(`opts`): `this`

Defined in: [packages/base/BaseProvider.ts:228](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L228)

Sets ExecutionCoordinator options.

#### Parameters

##### opts

[`ExecutionOptions`](../interfaces/ExecutionOptions.md)

Job options to merge

#### Returns

`this`

#### Inherited from

[`BaseProvider`](BaseProvider.md).[`setJobOptions`](BaseProvider.md#setjoboptions)

***

### setAgentOptions()

> **setAgentOptions**(`opts`): `this`

Defined in: [packages/base/BaseProvider.ts:237](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L237)

Sets HTTP agent options.

#### Parameters

##### opts

[`HttpAgentOptions`](../interfaces/HttpAgentOptions.md)

HTTP agent options to merge

#### Returns

`this`

#### Inherited from

[`BaseProvider`](BaseProvider.md).[`setAgentOptions`](BaseProvider.md#setagentoptions)

***

### setMaxDownloads()

> **setMaxDownloads**(`maxDownloads`): `this`

Defined in: [packages/base/BaseProvider.ts:246](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L246)

Sets maximum downloads.

#### Parameters

##### maxDownloads

`number`

Download limit

#### Returns

`this`

#### Inherited from

[`BaseProvider`](BaseProvider.md).[`setMaxDownloads`](BaseProvider.md#setmaxdownloads)

***

### setAllowedExtensions()

> **setAllowedExtensions**(...`extensions`): `this`

Defined in: [packages/base/BaseProvider.ts:255](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L255)

Sets allowed file extensions.

#### Parameters

##### extensions

...[`AllowedExtension`](../type-aliases/AllowedExtension.md)[]

File extensions such as `jpg` or `png`

#### Returns

`this`

#### Inherited from

[`BaseProvider`](BaseProvider.md).[`setAllowedExtensions`](BaseProvider.md#setallowedextensions)

***

### onProgress()

> **onProgress**(`handler`): `this`

Defined in: [packages/base/BaseProvider.ts:264](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L264)

Sets progress handler.

#### Parameters

##### handler

(`event`) => `void`

Progress event callback

#### Returns

`this`

#### Inherited from

[`BaseProvider`](BaseProvider.md).[`onProgress`](BaseProvider.md#onprogress)

***

### setProgressLogging()

> **setProgressLogging**(`enabled?`, `options?`): `this`

Defined in: [packages/base/BaseProvider.ts:283](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L283)

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

[`BaseProvider`](BaseProvider.md).[`setProgressLogging`](BaseProvider.md#setprogresslogging)

***

### setOutput()

> **setOutput**(`type`, `config?`): `this`

Defined in: [packages/base/BaseProvider.ts:296](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L296)

Sets output type.

#### Parameters

##### type

[`OutputType`](../enumerations/OutputType.md)

Job output mode

##### config?

[`DirectoryOutputOptions`](../interfaces/DirectoryOutputOptions.md) = `{}`

Directory output configuration

#### Returns

`this`

#### Default Value

```ts
OutputType.JSON
```

#### Inherited from

[`BaseProvider`](BaseProvider.md).[`setOutput`](BaseProvider.md#setoutput)

***

### setExecutionType()

> **setExecutionType**(`type`): `this`

Defined in: [packages/base/BaseProvider.ts:317](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L317)

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

[`BaseProvider`](BaseProvider.md).[`setExecutionType`](BaseProvider.md#setexecutiontype)

***

### whenSettled()

> **whenSettled**(): `Promise`\<[`JobSettlement`](../interfaces/JobSettlement.md)\>

Defined in: [packages/base/BaseProvider.ts:380](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L380)

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

[`BaseProvider`](BaseProvider.md).[`whenSettled`](BaseProvider.md#whensettled)

***

### assertSupported()

> `protected` **assertSupported**(`method?`): `void`

Defined in: [packages/base/BaseProvider.ts:395](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L395)

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

[`BaseProvider`](BaseProvider.md).[`assertSupported`](BaseProvider.md#assertsupported)

***

### dispose()

> **dispose**(`options?`): `Promise`\<`void`\>

Defined in: [packages/base/BaseProvider.ts:430](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L430)

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

[`BaseProvider`](BaseProvider.md).[`dispose`](BaseProvider.md#dispose)

***

### buildRequest()

> `protected` **buildRequest**(`overrides?`): [`XozillaExecArgs`](../interfaces/XozillaExecArgs.md)

Defined in: [packages/base/BaseProvider.ts:445](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L445)

Builds the execution request passed to the coordinator layer.

#### Parameters

##### overrides?

`Partial`\<[`XozillaExecArgs`](../interfaces/XozillaExecArgs.md)\>

Provider method options that should override defaults.

#### Returns

[`XozillaExecArgs`](../interfaces/XozillaExecArgs.md)

A typed request containing provider metadata and execution options.

#### Inherited from

[`BaseProvider`](BaseProvider.md).[`buildRequest`](BaseProvider.md#buildrequest)

***

### execute()

> `protected` **execute**\<`TResult`\>(`overrides`): `Promise`\<`TResult`\>

Defined in: [packages/base/BaseProvider.ts:466](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L466)

Runs extraction and optional downloads through the shared coordinator.

#### Type Parameters

##### TResult

`TResult`

#### Parameters

##### overrides

\{ `entryUrl?`: `string`; \} \| [`XozillaExecArgs`](../interfaces/XozillaExecArgs.md) & `object`

Provider method request data, including execution shape.

#### Returns

`Promise`\<`TResult`\>

Extracted output in the shape requested by the provider method.

#### Inherited from

[`BaseProvider`](BaseProvider.md).[`execute`](BaseProvider.md#execute)

***

### makeTargets()

> `protected` **makeTargets**(`sourceUrl`, `range`, `provider`, `method`, `addTrailingSlash?`): `object`

Defined in: [packages/base/BaseProvider.ts:501](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseProvider.ts#L501)

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

[`BaseProvider`](BaseProvider.md).[`makeTargets`](BaseProvider.md#maketargets)

***

### getVideo()

> **getVideo**(): `Promise`\<[`XozillaVideoOutput`](../interfaces/XozillaVideoOutput.md)\>

Defined in: [packages/providers/xozilla/XozillaProvider.ts:45](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/xozilla/XozillaProvider.ts#L45)

#### Returns

`Promise`\<[`XozillaVideoOutput`](../interfaces/XozillaVideoOutput.md)\>
