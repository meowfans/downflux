[**downflux**](../README.md)

***

[downflux](../README.md) / TikTokProvider

# Class: TikTokProvider

Defined in: [packages/providers/tiktok/TikTokProvider.ts:5](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/tiktok/TikTokProvider.ts#L5)

Generic provider for sites that can use the default extraction pipeline while
site-specific parsers are still being built.

## Extends

- [`GenericContentProvider`](GenericContentProvider.md)\<[`TikTokExecArgs`](../interfaces/TikTokExecArgs.md)\>

## Constructors

### Constructor

> **new TikTokProvider**(`url`): `TikTokProvider`

Defined in: [packages/providers/tiktok/TikTokProvider.ts:6](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/tiktok/TikTokProvider.ts#L6)

#### Parameters

##### url

`string`

#### Returns

`TikTokProvider`

#### Overrides

[`GenericContentProvider`](GenericContentProvider.md).[`constructor`](GenericContentProvider.md#constructor)

## Properties

### executionOptions

> `protected` **executionOptions**: [`ExecutionOptions`](../interfaces/ExecutionOptions.md) = `{}`

Defined in: [packages/base/BaseProvider.ts:40](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L40)

#### Inherited from

[`BaseProvider`](BaseProvider.md).[`executionOptions`](BaseProvider.md#executionoptions)

***

### httpOptions

> `protected` **httpOptions**: [`HttpFetchOptions`](../interfaces/HttpFetchOptions.md) = `{}`

Defined in: [packages/base/BaseProvider.ts:44](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L44)

#### Inherited from

[`DefaultProvider`](DefaultProvider.md).[`httpOptions`](DefaultProvider.md#httpoptions)

***

### deps

> `protected` `readonly` **deps**: [`CoordinatorDependencies`](../interfaces/CoordinatorDependencies.md)

Defined in: [packages/base/BaseProvider.ts:45](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L45)

#### Inherited from

[`DefaultProvider`](DefaultProvider.md).[`deps`](DefaultProvider.md#deps)

***

### provider

> `protected` `readonly` **provider**: [`Provider`](../enumerations/Provider.md)

Defined in: [packages/base/BaseProvider.ts:46](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L46)

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`provider`](GenericContentProvider.md#provider)

***

### urlPattern

> `protected` `readonly` **urlPattern**: `RegExp`

Defined in: [packages/base/BaseProvider.ts:47](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L47)

#### Inherited from

[`DefaultProvider`](DefaultProvider.md).[`urlPattern`](DefaultProvider.md#urlpattern)

***

### providerMetadata

> `protected` `readonly` **providerMetadata**: [`ProviderMetadata`](../interfaces/ProviderMetadata.md)

Defined in: [packages/base/BaseProvider.ts:48](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L48)

#### Inherited from

[`DefaultProvider`](DefaultProvider.md).[`providerMetadata`](DefaultProvider.md#providermetadata)

***

### url

> `protected` `readonly` **url**: `string`

Defined in: [packages/base/BaseProvider.ts:56](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L56)

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`url`](GenericContentProvider.md#url)

***

### config

> `protected` **config**: [`ProviderConfig`](../interfaces/ProviderConfig.md)

Defined in: [packages/base/BaseProvider.ts:57](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L57)

#### Inherited from

[`DefaultProvider`](DefaultProvider.md).[`config`](DefaultProvider.md#config)

## Accessors

### metadata

#### Get Signature

> **get** `protected` **metadata**(): [`ProviderMetadata`](../interfaces/ProviderMetadata.md)

Defined in: [packages/base/BaseProvider.ts:51](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L51)

Provider capabilities, integration status, and access restrictions.

##### Returns

[`ProviderMetadata`](../interfaces/ProviderMetadata.md)

#### Inherited from

[`DefaultProvider`](DefaultProvider.md).[`metadata`](DefaultProvider.md#metadata)

***

### ORIGIN

#### Get Signature

> **get** `protected` **ORIGIN**(): `string`

Defined in: [packages/base/BaseProvider.ts:85](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L85)

##### Returns

`string`

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`ORIGIN`](GenericContentProvider.md#origin)

***

### HOST\_NAME

#### Get Signature

> **get** `protected` **HOST\_NAME**(): `string`

Defined in: [packages/base/BaseProvider.ts:89](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L89)

##### Returns

`string`

#### Inherited from

[`DefaultProvider`](DefaultProvider.md).[`HOST_NAME`](DefaultProvider.md#host_name)

## Methods

### isValidHostName()

> `protected` **isValidHostName**(): `boolean`

Defined in: [packages/base/BaseProvider.ts:93](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L93)

#### Returns

`boolean`

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`isValidHostName`](GenericContentProvider.md#isvalidhostname)

***

### setAuth()

> **setAuth**(`auth`): `this`

Defined in: [packages/base/BaseProvider.ts:114](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L114)

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

Defined in: [packages/base/BaseProvider.ts:133](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L133)

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

Defined in: [packages/base/BaseProvider.ts:142](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L142)

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

Defined in: [packages/base/BaseProvider.ts:151](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L151)

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

Defined in: [packages/base/BaseProvider.ts:160](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L160)

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

Defined in: [packages/base/BaseProvider.ts:169](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L169)

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

Defined in: [packages/base/BaseProvider.ts:179](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L179)

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

Defined in: [packages/base/BaseProvider.ts:192](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L192)

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

Defined in: [packages/base/BaseProvider.ts:201](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L201)

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

Defined in: [packages/base/BaseProvider.ts:215](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L215)

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

Defined in: [packages/base/BaseProvider.ts:224](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L224)

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

Defined in: [packages/base/BaseProvider.ts:233](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L233)

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

Defined in: [packages/base/BaseProvider.ts:242](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L242)

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

Defined in: [packages/base/BaseProvider.ts:251](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L251)

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

Defined in: [packages/base/BaseProvider.ts:260](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L260)

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

Defined in: [packages/base/BaseProvider.ts:279](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L279)

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

Defined in: [packages/base/BaseProvider.ts:292](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L292)

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

[`GenericContentProvider`](GenericContentProvider.md).[`setOutput`](GenericContentProvider.md#setoutput)

***

### setExecutionType()

> **setExecutionType**(`type`): `this`

Defined in: [packages/base/BaseProvider.ts:313](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L313)

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

Defined in: [packages/base/BaseProvider.ts:341](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L341)

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

Defined in: [packages/base/BaseProvider.ts:356](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L356)

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

Defined in: [packages/base/BaseProvider.ts:391](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L391)

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

> `protected` **buildRequest**(`overrides?`): [`TikTokExecArgs`](../interfaces/TikTokExecArgs.md)

Defined in: [packages/base/BaseProvider.ts:403](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L403)

Builds the execution request passed to the coordinator layer.

#### Parameters

##### overrides?

`Partial`\<[`TikTokExecArgs`](../interfaces/TikTokExecArgs.md)\>

Provider method options that should override defaults.

#### Returns

[`TikTokExecArgs`](../interfaces/TikTokExecArgs.md)

A typed request containing provider metadata and execution options.

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`buildRequest`](GenericContentProvider.md#buildrequest)

***

### execute()

> `protected` **execute**\<`TResult`\>(`overrides`): `Promise`\<`TResult`\>

Defined in: [packages/base/BaseProvider.ts:424](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L424)

Runs extraction and optional downloads through the shared coordinator.

#### Type Parameters

##### TResult

`TResult`

#### Parameters

##### overrides

\{ `entryUrl?`: `string`; \} \| [`TikTokExecArgs`](../interfaces/TikTokExecArgs.md) & `object`

Provider method request data, including execution shape.

#### Returns

`Promise`\<`TResult`\>

Extracted output in the shape requested by the provider method.

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`execute`](GenericContentProvider.md#execute)

***

### makeTargets()

> `protected` **makeTargets**(`sourceUrl`, `range`, `provider`, `method`, `addTrailingSlash?`): `object`

Defined in: [packages/base/BaseProvider.ts:457](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L457)

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

Defined in: [packages/providers/shared/GenericContentProvider.ts:29](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/shared/GenericContentProvider.ts#L29)

#### Returns

`Promise`\<[`DefaultExecutionResult`](../interfaces/DefaultExecutionResult.md)\<`unknown`\>\>

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`getMetadata`](GenericContentProvider.md#getmetadata)

***

### getLinks()

> **getLinks**(): `Promise`\<`string`[]\>

Defined in: [packages/providers/shared/GenericContentProvider.ts:39](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/shared/GenericContentProvider.ts#L39)

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`getLinks`](GenericContentProvider.md#getlinks)

***

### getImages()

> **getImages**(): `Promise`\<`string`[]\>

Defined in: [packages/providers/shared/GenericContentProvider.ts:44](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/shared/GenericContentProvider.ts#L44)

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`getImages`](GenericContentProvider.md#getimages)

***

### getVideos()

> **getVideos**(): `Promise`\<`string`[]\>

Defined in: [packages/providers/shared/GenericContentProvider.ts:49](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/shared/GenericContentProvider.ts#L49)

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`getVideos`](GenericContentProvider.md#getvideos)

***

### getAudio()

> **getAudio**(): `Promise`\<`string`[]\>

Defined in: [packages/providers/shared/GenericContentProvider.ts:54](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/shared/GenericContentProvider.ts#L54)

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`getAudio`](GenericContentProvider.md#getaudio)

***

### getAllUrls()

> **getAllUrls**(): `Promise`\<`string`[]\>

Defined in: [packages/providers/shared/GenericContentProvider.ts:59](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/shared/GenericContentProvider.ts#L59)

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`getAllUrls`](GenericContentProvider.md#getallurls)

***

### getDownloadableResources()

> **getDownloadableResources**(): `Promise`\<`string`[]\>

Defined in: [packages/providers/shared/GenericContentProvider.ts:72](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/shared/GenericContentProvider.ts#L72)

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

[`GenericContentProvider`](GenericContentProvider.md).[`getDownloadableResources`](GenericContentProvider.md#getdownloadableresources)
