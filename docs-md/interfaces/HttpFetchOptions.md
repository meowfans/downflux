[**downflux**](../README.md)

***

[downflux](../README.md) / HttpFetchOptions

# Interface: HttpFetchOptions

Defined in: [packages/contracts/DownloadContracts.ts:115](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L115)

HTTP fetch options.
Controls request headers, retries, timeout, and referer.

## Extends

- [`HttpAgentOptions`](HttpAgentOptions.md)

## Extended by

- [`DownloadOptions`](DownloadOptions.md)
- [`ExecutionOptions`](ExecutionOptions.md)

## Properties

### signal?

> `optional` **signal?**: `AbortSignal`

Defined in: [packages/contracts/DownloadContracts.ts:124](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L124)

Abort signal honoured by every request this option reaches.

#### Remarks

Declared here rather than only on `ExecutionOptions` so the transport layer
can actually observe it; previously it was visible to the scheduler but never
reached a single fetch.

***

### headers?

> `optional` **headers?**: `Record`\<`string`, `string`\>

Defined in: [packages/contracts/DownloadContracts.ts:127](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L127)

Custom request headers

***

### timeoutMs?

> `optional` **timeoutMs?**: `number`

Defined in: [packages/contracts/DownloadContracts.ts:130](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L130)

Request timeout in milliseconds

***

### retries?

> `optional` **retries?**: `number`

Defined in: [packages/contracts/DownloadContracts.ts:133](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L133)

Failed request retry count

***

### referer?

> `optional` **referer?**: `string`

Defined in: [packages/contracts/DownloadContracts.ts:136](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L136)

Request referer URL

***

### formData?

> `optional` **formData?**: `Record`\<`string`, `string`\>

Defined in: [packages/contracts/DownloadContracts.ts:139](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L139)

Optional FormData for POST requests

***

### userAgent?

> `optional` **userAgent?**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:167](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L167)

#### Inherited from

[`HttpAgentOptions`](HttpAgentOptions.md).[`userAgent`](HttpAgentOptions.md#useragent)

***

### enableSniSpoofing?

> `optional` **enableSniSpoofing?**: `boolean`

Defined in: [packages/contracts/ExecutionContracts.ts:169](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L169)

#### Inherited from

[`HttpAgentOptions`](HttpAgentOptions.md).[`enableSniSpoofing`](HttpAgentOptions.md#enablesnispoofing)

***

### proxy?

> `optional` **proxy?**: [`ProxyOptions`](ProxyOptions.md)

Defined in: [packages/contracts/ExecutionContracts.ts:171](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L171)

#### Inherited from

[`HttpAgentOptions`](HttpAgentOptions.md).[`proxy`](HttpAgentOptions.md#proxy)

***

### dispatcher?

> `optional` **dispatcher?**: `Dispatcher`

Defined in: [packages/contracts/ExecutionContracts.ts:173](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L173)

#### Inherited from

[`HttpAgentOptions`](HttpAgentOptions.md).[`dispatcher`](HttpAgentOptions.md#dispatcher)
