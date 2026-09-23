[**downflux**](../README.md)

***

[downflux](../README.md) / HLSStreamRequest

# Interface: HLSStreamRequest

Defined in: [packages/contracts/DownloadContracts.ts:90](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L90)

## Properties

### finalUrl

> **finalUrl**: `string`

Defined in: [packages/contracts/DownloadContracts.ts:91](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L91)

***

### headers

> **headers**: `Record`\<`string`, `string`\>

Defined in: [packages/contracts/DownloadContracts.ts:92](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L92)

***

### isFmp4?

> `optional` **isFmp4?**: `boolean`

Defined in: [packages/contracts/DownloadContracts.ts:93](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L93)

***

### contentLength?

> `optional` **contentLength?**: `number`

Defined in: [packages/contracts/DownloadContracts.ts:103](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L103)

Exact byte length of what will be delivered, when it can be known.

#### Remarks

Only set when bytes pass through untouched. Remuxing changes the container,
so the origin's length no longer describes the output and publishing it as
`Content-Length` would truncate or stall the client.

***

### estimatedBytes?

> `optional` **estimatedBytes?**: `number`

Defined in: [packages/contracts/DownloadContracts.ts:106](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L106)

Best-effort source size, safe for progress UI but never for `Content-Length`.

***

### start

> **start**: (`stream`, `noDownload?`) => `Promise`\<`void`\>

Defined in: [packages/contracts/DownloadContracts.ts:108](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L108)

#### Parameters

##### stream

`Writable`

##### noDownload?

`boolean`

#### Returns

`Promise`\<`void`\>
