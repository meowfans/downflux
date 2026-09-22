[**downflux**](../README.md)

***

[downflux](../README.md) / BaseProvider

# Abstract Class: BaseProvider\<TExec\>

Defined in: [packages/base/BaseProvider.ts:39](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L39)

Base provider API for every supported site.

## Remarks

Providers are the public entry points because callers should not need to know
about parsers, transformers, pipelines, or transport details. A provider owns
URL validation, provider metadata, fluent job configuration, and the typed
methods that turn a site URL into an execution request.

## Extended by

- [`AnalRzProvider`](AnalRzProvider.md)
- [`BeegProvider`](BeegProvider.md)
- [`BlackPornProvider`](BlackPornProvider.md)
- [`BoKepPornProvider`](BoKepPornProvider.md)
- [`ColliderPornProvider`](ColliderPornProvider.md)
- [`CumLouderProvider`](CumLouderProvider.md)
- [`DaFreePornProvider`](DaFreePornProvider.md)
- [`DaNudeProvider`](DaNudeProvider.md)
- [`DefaultProvider`](DefaultProvider.md)
- [`EpicGfsProvider`](EpicGfsProvider.md)
- [`EPornerProvider`](EPornerProvider.md)
- [`HqPornProvider`](HqPornProvider.md)
- [`InterracialProvider`](InterracialProvider.md)
- [`ItsPornProvider`](ItsPornProvider.md)
- [`Lesbian8Provider`](Lesbian8Provider.md)
- [`MegaTubeProvider`](MegaTubeProvider.md)
- [`MomVidsProvider`](MomVidsProvider.md)
- [`MyLustProvider`](MyLustProvider.md)
- [`OkPornProvider`](OkPornProvider.md)
- [`PerfectGirlsProvider`](PerfectGirlsProvider.md)
- [`Porn300Provider`](Porn300Provider.md)
- [`PornDoeProvider`](PornDoeProvider.md)
- [`PornHubProvider`](PornHubProvider.md)
- [`PornIdProvider`](PornIdProvider.md)
- [`PornOneProvider`](PornOneProvider.md)
- [`PornSevenProvider`](PornSevenProvider.md)
- [`PornsOkProvider`](PornsOkProvider.md)
- [`PussySpaceProvider`](PussySpaceProvider.md)
- [`SexVidProvider`](SexVidProvider.md)
- [`ShamelessProvider`](ShamelessProvider.md)
- [`GenericContentProvider`](GenericContentProvider.md)
- [`SuperPornProvider`](SuperPornProvider.md)
- [`SxyPornProvider`](SxyPornProvider.md)
- [`TheyAreHugeProvider`](TheyAreHugeProvider.md)
- [`TnAFlixProvider`](TnAFlixProvider.md)
- [`TubeVSexProvider`](TubeVSexProvider.md)
- [`TwitterProvider`](TwitterProvider.md)
- [`WallHavenProvider`](WallHavenProvider.md)
- [`XCafeProvider`](XCafeProvider.md)
- [`XDeguProvider`](XDeguProvider.md)
- [`XGroovyProvider`](XGroovyProvider.md)
- [`XHamsterProvider`](XHamsterProvider.md)
- [`XnXXProvider`](XnXXProvider.md)
- [`XozillaProvider`](XozillaProvider.md)
- [`XVideosProvider`](XVideosProvider.md)
- [`ZbPornProvider`](ZbPornProvider.md)
- [`ZzzTubeProvider`](ZzzTubeProvider.md)

## Type Parameters

### TExec

`TExec` *extends* [`ExecutionArgs`](../interfaces/ExecutionArgs.md)\<[`ExecutionShape`](../type-aliases/ExecutionShape.md)\>

## Constructors

### Constructor

> **new BaseProvider**\<`TExec`\>(`url`, `config`): `BaseProvider`\<`TExec`\>

Defined in: [packages/base/BaseProvider.ts:55](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L55)

#### Parameters

##### url

`string`

##### config

[`ProviderConfig`](../interfaces/ProviderConfig.md)

#### Returns

`BaseProvider`\<`TExec`\>

## Properties

### executionOptions

> `protected` **executionOptions**: [`ExecutionOptions`](../interfaces/ExecutionOptions.md) = `{}`

Defined in: [packages/base/BaseProvider.ts:40](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L40)

***

### httpOptions

> `protected` **httpOptions**: [`HttpFetchOptions`](../interfaces/HttpFetchOptions.md) = `{}`

Defined in: [packages/base/BaseProvider.ts:44](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L44)

***

### deps

> `protected` `readonly` **deps**: [`CoordinatorDependencies`](../interfaces/CoordinatorDependencies.md)

Defined in: [packages/base/BaseProvider.ts:45](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L45)

***

### provider

> `protected` `readonly` **provider**: [`Provider`](../enumerations/Provider.md)

Defined in: [packages/base/BaseProvider.ts:46](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L46)

***

### urlPattern

> `protected` `readonly` **urlPattern**: `RegExp`

Defined in: [packages/base/BaseProvider.ts:47](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L47)

***

### providerMetadata

> `protected` `readonly` **providerMetadata**: [`ProviderMetadata`](../interfaces/ProviderMetadata.md)

Defined in: [packages/base/BaseProvider.ts:48](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L48)

***

### url

> `protected` `readonly` **url**: `string`

Defined in: [packages/base/BaseProvider.ts:56](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L56)

***

### config

> `protected` **config**: [`ProviderConfig`](../interfaces/ProviderConfig.md)

Defined in: [packages/base/BaseProvider.ts:57](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L57)

## Accessors

### metadata

#### Get Signature

> **get** `protected` **metadata**(): [`ProviderMetadata`](../interfaces/ProviderMetadata.md)

Defined in: [packages/base/BaseProvider.ts:51](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L51)

Provider capabilities, integration status, and access restrictions.

##### Returns

[`ProviderMetadata`](../interfaces/ProviderMetadata.md)

***

### ORIGIN

#### Get Signature

> **get** `protected` **ORIGIN**(): `string`

Defined in: [packages/base/BaseProvider.ts:85](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L85)

##### Returns

`string`

***

### HOST\_NAME

#### Get Signature

> **get** `protected` **HOST\_NAME**(): `string`

Defined in: [packages/base/BaseProvider.ts:89](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L89)

##### Returns

`string`

## Methods

### isValidHostName()

> `protected` **isValidHostName**(): `boolean`

Defined in: [packages/base/BaseProvider.ts:93](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L93)

#### Returns

`boolean`

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

***

### buildRequest()

> `protected` **buildRequest**(`overrides?`): `TExec`

Defined in: [packages/base/BaseProvider.ts:403](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/base/BaseProvider.ts#L403)

Builds the execution request passed to the coordinator layer.

#### Parameters

##### overrides?

`Partial`\<`TExec`\>

Provider method options that should override defaults.

#### Returns

`TExec`

A typed request containing provider metadata and execution options.

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

`TExec` \| \{ `entryUrl?`: `string`; \} & `object`

Provider method request data, including execution shape.

#### Returns

`Promise`\<`TResult`\>

Extracted output in the shape requested by the provider method.

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
