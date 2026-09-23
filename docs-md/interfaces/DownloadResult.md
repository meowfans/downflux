[**downflux**](../README.md)

***

[downflux](../README.md) / DownloadResult

# Interface: DownloadResult

Defined in: [packages/contracts/DownloadContracts.ts:34](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L34)

Result of a download operation.
Contains file metadata and the downloaded buffer.

## Properties

### url

> **url**: `string`

Defined in: [packages/contracts/DownloadContracts.ts:36](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L36)

Requested download URL

***

### finalUrl

> **finalUrl**: `string`

Defined in: [packages/contracts/DownloadContracts.ts:39](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L39)

Final URL after redirects

***

### extendedFilename

> **extendedFilename**: `string`

Defined in: [packages/contracts/DownloadContracts.ts:42](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L42)

Generated filename with metadata

***

### originalFilename

> **originalFilename**: `string`

Defined in: [packages/contracts/DownloadContracts.ts:45](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L45)

Original filename from URL or response

***

### extension

> **extension**: `string`

Defined in: [packages/contracts/DownloadContracts.ts:48](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L48)

File extension

***

### mimeType

> **mimeType**: `string`

Defined in: [packages/contracts/DownloadContracts.ts:51](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L51)

MIME type

***

### sizeBytes

> **sizeBytes**: `number`

Defined in: [packages/contracts/DownloadContracts.ts:54](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L54)

File size in bytes

***

### path

> **path**: `string`

Defined in: [packages/contracts/DownloadContracts.ts:57](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L57)

Path of the downloaded file

***

### provider

> **provider**: [`Provider`](../enumerations/Provider.md)

Defined in: [packages/contracts/DownloadContracts.ts:60](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L60)

Service used for the download

***

### estimatedBytes?

> `optional` **estimatedBytes?**: `number`

Defined in: [packages/contracts/DownloadContracts.ts:69](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L69)

Approximate source size when the exact delivered length is unknown.

#### Remarks

Derived from the playlist for HLS, or the origin's `Content-Length` for a
remuxed file. Use it to show progress; never send it as `Content-Length`.

***

### stream?

> `optional` **stream?**: `Readable`

Defined in: [packages/contracts/DownloadContracts.ts:78](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/DownloadContracts.ts#L78)

Readable media, present only for `OutputType.STREAM`.

#### Remarks

The transfer runs while this is consumed, so it must be piped or destroyed
promptly. Leaving it unread stalls the download behind the pipe buffer.
