[**downflux**](../README.md)

***

[downflux](../README.md) / HlsClient

# Class: HlsClient

Defined in: [packages/engines/http/HlsClient.ts:57](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/engines/http/HlsClient.ts#L57)

HTTP engine for HLS playlists and media segments.

## Remarks

HLS handling is isolated from generic streaming because playlists require
variant selection, segment stitching, optional AES decryption, and fMP4
detection before storage can finalize the media.

## Extends

- [`BaseHttpClient`](BaseHttpClient.md)

## Constructors

### Constructor

> **new HlsClient**(`progressManager`): `HlsClient`

Defined in: [packages/engines/http/HlsClient.ts:61](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/engines/http/HlsClient.ts#L61)

#### Parameters

##### progressManager

[`ProgressManager`](ProgressManager.md)

#### Returns

`HlsClient`

#### Overrides

[`BaseHttpClient`](BaseHttpClient.md).[`constructor`](BaseHttpClient.md#constructor)

## Properties

### progressManager

> `protected` `readonly` **progressManager**: [`ProgressManager`](ProgressManager.md)

Defined in: [packages/base/BaseHttpClient.ts:17](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseHttpClient.ts#L17)

#### Inherited from

[`StreamHttpClient`](StreamHttpClient.md).[`progressManager`](StreamHttpClient.md#progressmanager)

***

### cookieJar

> `protected` `readonly` **cookieJar**: `Map`\<`string`, `Map`\<`string`, `string`\>\>

Defined in: [packages/base/BaseHttpClient.ts:19](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseHttpClient.ts#L19)

#### Inherited from

[`BaseHttpClient`](BaseHttpClient.md).[`cookieJar`](BaseHttpClient.md#cookiejar)

***

### CHROME\_CIPHERS

> `protected` `readonly` `static` **CHROME\_CIPHERS**: `string`

Defined in: [packages/base/BaseHttpClient.ts:20](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseHttpClient.ts#L20)

#### Inherited from

[`BaseHttpClient`](BaseHttpClient.md).[`CHROME_CIPHERS`](BaseHttpClient.md#chrome_ciphers)

## Accessors

### CHROME\_CIPHERS

#### Get Signature

> **get** `protected` **CHROME\_CIPHERS**(): `string`

Defined in: [packages/base/BaseHttpClient.ts:38](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseHttpClient.ts#L38)

##### Returns

`string`

#### Inherited from

[`BaseHttpClient`](BaseHttpClient.md).[`CHROME_CIPHERS`](BaseHttpClient.md#chrome_ciphers-1)

***

### agent

#### Get Signature

> **get** `protected` **agent**(): `Agent`

Defined in: [packages/base/BaseHttpClient.ts:55](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseHttpClient.ts#L55)

##### Returns

`Agent`

#### Inherited from

[`BaseHttpClient`](BaseHttpClient.md).[`agent`](BaseHttpClient.md#agent)

## Methods

### spoofAgentFor()

> `protected` **spoofAgentFor**(`hostname`): `Agent`

Defined in: [packages/base/BaseHttpClient.ts:78](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseHttpClient.ts#L78)

Builds the SNI-spoofing agent for one host.

#### Parameters

##### hostname

`string`

#### Returns

`Agent`

#### Remarks

The TLS handshake advertises `www.google.com` to get past SNI-based DPI
filtering, but the certificate is still verified against the host actually
being contacted. The previous `checkServerIdentity: () => undefined` accepted
*any* certificate, which silently turned the workaround into a MITM hole.

#### Inherited from

[`BaseHttpClient`](BaseHttpClient.md).[`spoofAgentFor`](BaseHttpClient.md#spoofagentfor)

***

### closeConnections()

> **closeConnections**(): `Promise`\<`void`\>

Defined in: [packages/base/BaseHttpClient.ts:109](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseHttpClient.ts#L109)

Instance-side alias for [BaseHttpClient.closeSharedAgents](BaseHttpClient.md#closesharedagents).

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BaseHttpClient`](BaseHttpClient.md).[`closeConnections`](BaseHttpClient.md#closeconnections)

***

### closeSharedAgents()

> `static` **closeSharedAgents**(): `Promise`\<`void`\>

Defined in: [packages/base/BaseHttpClient.ts:113](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseHttpClient.ts#L113)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BaseHttpClient`](BaseHttpClient.md).[`closeSharedAgents`](BaseHttpClient.md#closesharedagents)

***

### randomHeaders()

> `protected` **randomHeaders**(`extra?`): `object`

Defined in: [packages/base/BaseHttpClient.ts:127](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseHttpClient.ts#L127)

#### Parameters

##### extra?

`Record`\<`string`, `string`\> = `{}`

#### Returns

`object`

#### Inherited from

[`BaseHttpClient`](BaseHttpClient.md).[`randomHeaders`](BaseHttpClient.md#randomheaders)

***

### buildHlsHeaders()

> `protected` **buildHlsHeaders**(`opts`): `object`

Defined in: [packages/base/BaseHttpClient.ts:136](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseHttpClient.ts#L136)

#### Parameters

##### opts

[`DownloadOptions`](../interfaces/DownloadOptions.md)

#### Returns

`object`

##### User-Agent

> **User-Agent**: `string` = `'Mozilla/5.0'`

##### Accept

> **Accept**: `string` = `'*/*'`

##### Referer

> **Referer**: `string`

##### Origin

> **Origin**: `string`

#### Inherited from

[`BaseHttpClient`](BaseHttpClient.md).[`buildHlsHeaders`](BaseHttpClient.md#buildhlsheaders)

***

### linkSignal()

> `protected` **linkSignal**(`timeoutMs`, `external?`): `AbortSignal`

Defined in: [packages/base/BaseHttpClient.ts:188](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseHttpClient.ts#L188)

Combines a per-request timeout with a caller-supplied abort signal.

#### Parameters

##### timeoutMs

`number`

Timeout applied when the caller supplies no signal of its own.

##### external?

`AbortSignal`

Optional caller abort signal.

#### Returns

`AbortSignal`

A signal that aborts on whichever fires first.

#### Inherited from

[`BaseHttpClient`](BaseHttpClient.md).[`linkSignal`](BaseHttpClient.md#linksignal)

***

### itemLabel()

> `protected` **itemLabel**(`opts`): `string` \| `undefined`

Defined in: [packages/base/BaseHttpClient.ts:203](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseHttpClient.ts#L203)

Short display name for a download item, falling back to the URL tail.

#### Parameters

##### opts

[`DownloadOptions`](../interfaces/DownloadOptions.md)

#### Returns

`string` \| `undefined`

#### Remarks

Lives on the base client because both the plain and HLS engines label the
per-item progress rows they emit.

#### Inherited from

[`BaseHttpClient`](BaseHttpClient.md).[`itemLabel`](BaseHttpClient.md#itemlabel)

***

### delay()

> `protected` **delay**(`attempt`): `Promise`\<`unknown`\>

Defined in: [packages/base/BaseHttpClient.ts:215](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseHttpClient.ts#L215)

#### Parameters

##### attempt

`number`

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

[`BaseHttpClient`](BaseHttpClient.md).[`delay`](BaseHttpClient.md#delay)

***

### readBody()

> `protected` **readBody**(`body`): `Promise`\<`Buffer`\<`ArrayBufferLike`\>\>

Defined in: [packages/base/BaseHttpClient.ts:222](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseHttpClient.ts#L222)

#### Parameters

##### body

`ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\> \| `null`

#### Returns

`Promise`\<`Buffer`\<`ArrayBufferLike`\>\>

#### Inherited from

[`BaseHttpClient`](BaseHttpClient.md).[`readBody`](BaseHttpClient.md#readbody)

***

### decodeBody()

> `protected` **decodeBody**(`buffer`, `headers`): `Buffer`

Defined in: [packages/base/BaseHttpClient.ts:237](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseHttpClient.ts#L237)

#### Parameters

##### buffer

`Buffer`

##### headers

`Headers`

#### Returns

`Buffer`

#### Inherited from

[`BaseHttpClient`](BaseHttpClient.md).[`decodeBody`](BaseHttpClient.md#decodebody)

***

### applyCookieWithHeader()

> `protected` **applyCookieWithHeader**(`url`, `headers`): `Record`\<`string`, `string`\>

Defined in: [packages/base/BaseHttpClient.ts:253](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseHttpClient.ts#L253)

#### Parameters

##### url

`string`

##### headers

`Record`\<`string`, `string`\>

#### Returns

`Record`\<`string`, `string`\>

#### Inherited from

[`BaseHttpClient`](BaseHttpClient.md).[`applyCookieWithHeader`](BaseHttpClient.md#applycookiewithheader)

***

### storeCookies()

> `protected` **storeCookies**(`url`, `headers`): `void`

Defined in: [packages/base/BaseHttpClient.ts:268](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseHttpClient.ts#L268)

#### Parameters

##### url

`string`

##### headers

`Headers`

#### Returns

`void`

#### Inherited from

[`BaseHttpClient`](BaseHttpClient.md).[`storeCookies`](BaseHttpClient.md#storecookies)

***

### addOriginWithHeader()

> `protected` **addOriginWithHeader**(`headers`, `referer?`): `Record`\<`string`, `string`\>

Defined in: [packages/base/BaseHttpClient.ts:291](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseHttpClient.ts#L291)

#### Parameters

##### headers

`Record`\<`string`, `string`\>

##### referer?

`string`

#### Returns

`Record`\<`string`, `string`\>

#### Inherited from

[`BaseHttpClient`](BaseHttpClient.md).[`addOriginWithHeader`](BaseHttpClient.md#addoriginwithheader)

***

### headers()

> `protected` **headers**(`headers`): `Record`\<`string`, `string`\>

Defined in: [packages/base/BaseHttpClient.ts:302](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseHttpClient.ts#L302)

#### Parameters

##### headers

`Headers`

#### Returns

`Record`\<`string`, `string`\>

#### Inherited from

[`BaseHttpClient`](BaseHttpClient.md).[`headers`](BaseHttpClient.md#headers)

***

### isTransportError()

> `protected` **isTransportError**(`error`): `string` \| `undefined`

Defined in: [packages/base/BaseHttpClient.ts:306](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseHttpClient.ts#L306)

#### Parameters

##### error

`unknown`

#### Returns

`string` \| `undefined`

#### Inherited from

[`BaseHttpClient`](BaseHttpClient.md).[`isTransportError`](BaseHttpClient.md#istransporterror)

***

### fetchWithTransportFallback()

> **fetchWithTransportFallback**(`url`, `init`, `options`, `allowFallback?`): `Promise`\<`Response`\>

Defined in: [packages/base/BaseHttpClient.ts:329](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseHttpClient.ts#L329)

Runs a fetch request with transport fallback for transient TLS/socket failures.

#### Parameters

##### url

`string`

URL to request.

##### init

`RequestInit` \| `undefined`

Fetch options.

##### options

[`HttpAgentOptions`](../interfaces/HttpAgentOptions.md)

Agent, proxy, and SNI options.

##### allowFallback?

`boolean` = `true`

Whether fallback dispatchers may be attempted.

#### Returns

`Promise`\<`Response`\>

Native fetch response.

#### Inherited from

[`BaseHttpClient`](BaseHttpClient.md).[`fetchWithTransportFallback`](BaseHttpClient.md#fetchwithtransportfallback)

***

### fetchText()

> **fetchText**(`url`, `timeoutMs`, `headers`, `signal?`): `Promise`\<`string`\>

Defined in: [packages/base/BaseHttpClient.ts:356](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseHttpClient.ts#L356)

#### Parameters

##### url

`string`

##### timeoutMs

`number`

##### headers

`Record`\<`string`, `any`\>

##### signal?

`AbortSignal`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`BaseHttpClient`](BaseHttpClient.md).[`fetchText`](BaseHttpClient.md#fetchtext)

***

### fetchJson()

> **fetchJson**(`url`, `opts`): `Promise`\<`any`\>

Defined in: [packages/base/BaseHttpClient.ts:360](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/base/BaseHttpClient.ts#L360)

#### Parameters

##### url

`string`

##### opts

[`DownloadOptions`](../interfaces/DownloadOptions.md)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`BaseHttpClient`](BaseHttpClient.md).[`fetchJson`](BaseHttpClient.md#fetchjson)

***

### resolvePlaylist()

> **resolvePlaylist**(`manifest`, `manifestUrl`, `timeoutMs`, `opts`): `Promise`\<[`ResolvedPlaylist`](../interfaces/ResolvedPlaylist.md)\>

Defined in: [packages/engines/http/HlsClient.ts:74](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/engines/http/HlsClient.ts#L74)

Resolves a manifest into the playlist that will actually be streamed.

#### Parameters

##### manifest

`string`

Already fetched manifest content.

##### manifestUrl

`string`

URL used to resolve relative playlist entries.

##### timeoutMs

`number`

Request timeout for the media playlist fetch.

##### opts

[`DownloadOptions`](../interfaces/DownloadOptions.md)

Download and quality options.

#### Returns

`Promise`\<[`ResolvedPlaylist`](../interfaces/ResolvedPlaylist.md)\>

Selected playlist URL, its segments with per-segment keys, and fMP4 state.

***

### streamPlaylist()

> **streamPlaylist**(`playlist`, `timeoutMs`, `stream`, `opts`): `Promise`\<`void`\>

Defined in: [packages/engines/http/HlsClient.ts:106](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/engines/http/HlsClient.ts#L106)

Writes an already resolved playlist to a destination stream.

#### Parameters

##### playlist

[`ResolvedPlaylist`](../interfaces/ResolvedPlaylist.md)

Playlist returned by [HlsClient.resolvePlaylist](#resolveplaylist).

##### timeoutMs

`number`

Segment request timeout.

##### stream

`Writable`

Destination stream.

##### opts

[`DownloadOptions`](../interfaces/DownloadOptions.md)

Download and quality options.

#### Returns

`Promise`\<`void`\>

***

### fetchHlsStream()

> **fetchHlsStream**(`manifest`, `manifestUrl`, `timeoutMs`, `stream`, `opts`): `Promise`\<`void`\>

Defined in: [packages/engines/http/HlsClient.ts:125](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/engines/http/HlsClient.ts#L125)

Writes a resolved HLS playlist to a destination stream.

#### Parameters

##### manifest

`string`

Already fetched manifest content.

##### manifestUrl

`string`

URL used to resolve relative playlist entries.

##### timeoutMs

`number`

Segment request timeout.

##### stream

`Writable`

Destination stream.

##### opts

[`DownloadOptions`](../interfaces/DownloadOptions.md)

Download and quality options.

#### Returns

`Promise`\<`void`\>

***

### isFmp4()

> **isFmp4**(`manifest`, `manifestUrl`, `opts`): `Promise`\<`boolean`\>

Defined in: [packages/engines/http/HlsClient.ts:145](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/engines/http/HlsClient.ts#L145)

Detects whether the selected playlist uses fMP4 initialization segments.

#### Parameters

##### manifest

`string`

Manifest content.

##### manifestUrl

`string`

URL used to resolve relative entries.

##### opts

[`DownloadOptions`](../interfaces/DownloadOptions.md)

Download and quality options.

#### Returns

`Promise`\<`boolean`\>

`true` when an fMP4 init segment is present.

***

### isHlsManifest()

> **isHlsManifest**(`contentType`, `url`): `boolean`

Defined in: [packages/engines/http/HlsClient.ts:400](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/engines/http/HlsClient.ts#L400)

Checks whether a response should be handled as an HLS manifest.

#### Parameters

##### contentType

`string`

Response content type.

##### url

`string`

Final response URL.

#### Returns

`boolean`

`true` when the response appears to be an HLS playlist.
