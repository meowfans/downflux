[**downflux**](../README.md)

***

[downflux](../README.md) / PerfectGirlsVideoOutput

# Interface: PerfectGirlsVideoOutput

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:58](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L58)

Output structure for PerfectGirls video operations.
Contains video metadata, sources, poster, and album context.

## Extends

- [`DefaultVideoOutput`](DefaultVideoOutput.md)

## Extended by

- [`PerfectGirlsOutput`](PerfectGirlsOutput.md)

## Properties

### title

> **title**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:274](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L274)

#### Inherited from

[`DefaultVideoOutput`](DefaultVideoOutput.md).[`title`](DefaultVideoOutput.md#title)

***

### tags

> **tags**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:275](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L275)

#### Inherited from

[`DefaultVideoOutput`](DefaultVideoOutput.md).[`tags`](DefaultVideoOutput.md#tags)

***

### description

> **description**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:276](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L276)

#### Inherited from

[`DefaultVideoOutput`](DefaultVideoOutput.md).[`description`](DefaultVideoOutput.md#description)

***

### pageUrl

> **pageUrl**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:277](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L277)

#### Inherited from

[`DefaultVideoOutput`](DefaultVideoOutput.md).[`pageUrl`](DefaultVideoOutput.md#pageurl)

***

### poster

> **poster**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:286](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L286)

#### Inherited from

[`DefaultVideoOutput`](DefaultVideoOutput.md).[`poster`](DefaultVideoOutput.md#poster)

***

### videos

> **videos**: [`VideosFormat`](VideosFormat.md)

Defined in: [packages/contracts/ExecutionContracts.ts:287](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L287)

#### Inherited from

[`DefaultVideoOutput`](DefaultVideoOutput.md).[`videos`](DefaultVideoOutput.md#videos)

***

### videoId

> **videoId**: `string`

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:60](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L60)

Video identifier

***

### videoScreenshot

> **videoScreenshot**: `string`

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:63](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L63)

Screenshot image URL

***

### videoCreatedAt?

> `optional` **videoCreatedAt?**: `string`

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:66](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L66)

Video creation date text

***

### author

> **author**: `string`

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:69](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L69)

Author name associated with the video

***

### fullVideoSource?

> `optional` **fullVideoSource?**: `string`

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:72](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L72)

Full source URL when available

***

### videoAlbumId?

> `optional` **videoAlbumId?**: `string`

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:75](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L75)

Album identifier linked to the video

***

### videoAlbum?

> `optional` **videoAlbum?**: [`PerfectGirlsAlbumOutput`](PerfectGirlsAlbumOutput.md)

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:78](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L78)

Album metadata linked to the video

***

### starredBy

> **starredBy**: `string`[]

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:81](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L81)

Starred by list
