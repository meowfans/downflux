[**downflux**](../README.md)

***

[downflux](../README.md) / ServiceStrategy

# Interface: ServiceStrategy

Defined in: [packages/contracts/DownloadContracts.ts:149](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L149)

## Methods

### shouldFallback404()?

> `optional` **shouldFallback404**(`url`): `boolean`

Defined in: [packages/contracts/DownloadContracts.ts:150](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L150)

#### Parameters

##### url

`string`

#### Returns

`boolean`

***

### getFallbackUrl()?

> `optional` **getFallbackUrl**(`url`): `string` \| `null`

Defined in: [packages/contracts/DownloadContracts.ts:151](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L151)

#### Parameters

##### url

`string`

#### Returns

`string` \| `null`

***

### shouldReExtract()?

> `optional` **shouldReExtract**(`url`): `boolean`

Defined in: [packages/contracts/DownloadContracts.ts:152](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L152)

#### Parameters

##### url

`string`

#### Returns

`boolean`

***

### shouldResolveTextResponse()?

> `optional` **shouldResolveTextResponse**(`url`, `contentType`): `boolean`

Defined in: [packages/contracts/DownloadContracts.ts:153](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L153)

#### Parameters

##### url

`string`

##### contentType

`string`

#### Returns

`boolean`

***

### getDirectVideoUrlFromText()?

> `optional` **getDirectVideoUrlFromText**(`body`, `opts`): `string` \| `null`

Defined in: [packages/contracts/DownloadContracts.ts:154](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L154)

#### Parameters

##### body

`string`

##### opts

[`DownloadOptions`](DownloadOptions.md)

#### Returns

`string` \| `null`

***

### getHostFallbackUrls()?

> `optional` **getHostFallbackUrls**(`url`): `string`[]

Defined in: [packages/contracts/DownloadContracts.ts:155](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L155)

#### Parameters

##### url

`string`

#### Returns

`string`[]
