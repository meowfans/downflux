[**downflux**](../README.md)

***

[downflux](../README.md) / DownloadOptions

# Interface: DownloadOptions

Defined in: [packages/contracts/DownloadContracts.ts:7](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L7)

HTTP fetch options.
Controls request headers, retries, timeout, and referer.

## Extends

- [`HttpFetchOptions`](HttpFetchOptions.md)

## Properties

### dirConfig?

> `optional` **dirConfig?**: [`DirectoryOutputOptions`](DirectoryOutputOptions.md)

Defined in: [packages/contracts/DownloadContracts.ts:8](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L8)

***

### transcodeOptions?

> `optional` **transcodeOptions?**: [`TranscodeOptions`](TranscodeOptions.md)

Defined in: [packages/contracts/DownloadContracts.ts:9](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L9)

***

### outputType

> **outputType**: [`OutputType`](../enumerations/OutputType.md)

Defined in: [packages/contracts/DownloadContracts.ts:10](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L10)

***

### provider

> **provider**: [`Provider`](../enumerations/Provider.md)

Defined in: [packages/contracts/DownloadContracts.ts:11](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L11)

***

### reExtract?

> `optional` **reExtract?**: (`item`) => `Promise`\<[`PipelineItem`](PipelineItem.md) \| `null`\>

Defined in: [packages/contracts/DownloadContracts.ts:12](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L12)

#### Parameters

##### item

[`PipelineItem`](PipelineItem.md)

#### Returns

`Promise`\<[`PipelineItem`](PipelineItem.md) \| `null`\>

***

### pipelineItem?

> `optional` **pipelineItem?**: [`PipelineItem`](PipelineItem.md)

Defined in: [packages/contracts/DownloadContracts.ts:13](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L13)

***

### noDownload?

> `optional` **noDownload?**: `boolean`

Defined in: [packages/contracts/DownloadContracts.ts:14](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L14)

***

### allowedVideoQuality?

> `optional` **allowedVideoQuality?**: [`VideoQuality`](../enumerations/VideoQuality.md)

Defined in: [packages/contracts/DownloadContracts.ts:15](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L15)

***

### cdnFallbackBudget?

> `optional` **cdnFallbackBudget?**: `number`

Defined in: [packages/contracts/DownloadContracts.ts:24](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L24)

Remaining CDN fallback attempts for this transfer.

#### Remarks

Carried on the request rather than on the client so one item cannot exhaust
the budget of every other item sharing the same `StreamHttpClient`.

***

### reExtractBudget?

> `optional` **reExtractBudget?**: `number`

Defined in: [packages/contracts/DownloadContracts.ts:27](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L27)

Remaining expired-URL re-extraction attempts for this transfer.

***

### signal?

> `optional` **signal?**: `AbortSignal`

Defined in: [packages/contracts/DownloadContracts.ts:124](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L124)

Abort signal honoured by every request this option reaches.

#### Remarks

Declared here rather than only on `ExecutionOptions` so the transport layer
can actually observe it; previously it was visible to the scheduler but never
reached a single fetch.

#### Inherited from

[`HttpFetchOptions`](HttpFetchOptions.md).[`signal`](HttpFetchOptions.md#signal)

***

### headers?

> `optional` **headers?**: `Record`\<`string`, `string`\>

Defined in: [packages/contracts/DownloadContracts.ts:127](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L127)

Custom request headers

#### Inherited from

[`HttpFetchOptions`](HttpFetchOptions.md).[`headers`](HttpFetchOptions.md#headers)

***

### timeoutMs?

> `optional` **timeoutMs?**: `number`

Defined in: [packages/contracts/DownloadContracts.ts:130](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L130)

Request timeout in milliseconds

#### Inherited from

[`HttpFetchOptions`](HttpFetchOptions.md).[`timeoutMs`](HttpFetchOptions.md#timeoutms)

***

### retries?

> `optional` **retries?**: `number`

Defined in: [packages/contracts/DownloadContracts.ts:133](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L133)

Failed request retry count

#### Inherited from

[`HttpFetchOptions`](HttpFetchOptions.md).[`retries`](HttpFetchOptions.md#retries)

***

### referer?

> `optional` **referer?**: `string`

Defined in: [packages/contracts/DownloadContracts.ts:136](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L136)

Request referer URL

#### Inherited from

[`HttpFetchOptions`](HttpFetchOptions.md).[`referer`](HttpFetchOptions.md#referer)

***

### formData?

> `optional` **formData?**: `Record`\<`string`, `string`\>

Defined in: [packages/contracts/DownloadContracts.ts:139](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L139)

Optional FormData for POST requests

#### Inherited from

[`HttpFetchOptions`](HttpFetchOptions.md).[`formData`](HttpFetchOptions.md#formdata)

***

### userAgent?

> `optional` **userAgent?**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:167](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L167)

#### Inherited from

[`HttpFetchOptions`](HttpFetchOptions.md).[`userAgent`](HttpFetchOptions.md#useragent)

***

### enableSniSpoofing?

> `optional` **enableSniSpoofing?**: `boolean`

Defined in: [packages/contracts/ExecutionContracts.ts:169](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L169)

#### Inherited from

[`HttpFetchOptions`](HttpFetchOptions.md).[`enableSniSpoofing`](HttpFetchOptions.md#enablesnispoofing)

***

### proxy?

> `optional` **proxy?**: [`ProxyOptions`](ProxyOptions.md)

Defined in: [packages/contracts/ExecutionContracts.ts:171](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L171)

#### Inherited from

[`HttpFetchOptions`](HttpFetchOptions.md).[`proxy`](HttpFetchOptions.md#proxy)

***

### dispatcher?

> `optional` **dispatcher?**: `Dispatcher`

Defined in: [packages/contracts/ExecutionContracts.ts:173](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L173)

#### Inherited from

[`HttpFetchOptions`](HttpFetchOptions.md).[`dispatcher`](HttpFetchOptions.md#dispatcher)
