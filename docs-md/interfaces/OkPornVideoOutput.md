[**downflux**](../README.md)

***

[downflux](../README.md) / OkPornVideoOutput

# Interface: OkPornVideoOutput

Defined in: [packages/providers/okporn/OkPornContracts.ts:57](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/okporn/OkPornContracts.ts#L57)

Output structure for OkPorn video operations.
Contains video metadata, sources, poster, and album context.

## Extends

- [`DefaultVideoOutput`](DefaultVideoOutput.md)

## Extended by

- [`OkPornOutput`](OkPornOutput.md)

## Properties

### title

> **title**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:257](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L257)

#### Inherited from

[`DefaultVideoOutput`](DefaultVideoOutput.md).[`title`](DefaultVideoOutput.md#title)

***

### tags

> **tags**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:258](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L258)

#### Inherited from

[`DefaultVideoOutput`](DefaultVideoOutput.md).[`tags`](DefaultVideoOutput.md#tags)

***

### description

> **description**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:259](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L259)

#### Inherited from

[`DefaultVideoOutput`](DefaultVideoOutput.md).[`description`](DefaultVideoOutput.md#description)

***

### pageUrl

> **pageUrl**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:260](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L260)

#### Inherited from

[`DefaultVideoOutput`](DefaultVideoOutput.md).[`pageUrl`](DefaultVideoOutput.md#pageurl)

***

### poster

> **poster**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:269](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L269)

#### Inherited from

[`DefaultVideoOutput`](DefaultVideoOutput.md).[`poster`](DefaultVideoOutput.md#poster)

***

### videos

> **videos**: [`VideosFormat`](VideosFormat.md)

Defined in: [packages/contracts/ExecutionContracts.ts:270](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L270)

#### Inherited from

[`DefaultVideoOutput`](DefaultVideoOutput.md).[`videos`](DefaultVideoOutput.md#videos)

***

### videoId

> **videoId**: `string`

Defined in: [packages/providers/okporn/OkPornContracts.ts:59](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/okporn/OkPornContracts.ts#L59)

Video identifier

***

### videoScreenshot

> **videoScreenshot**: `string`

Defined in: [packages/providers/okporn/OkPornContracts.ts:62](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/okporn/OkPornContracts.ts#L62)

Screenshot image URL

***

### videoCreatedAt?

> `optional` **videoCreatedAt?**: `string`

Defined in: [packages/providers/okporn/OkPornContracts.ts:65](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/okporn/OkPornContracts.ts#L65)

Video creation date text

***

### author

> **author**: `string`

Defined in: [packages/providers/okporn/OkPornContracts.ts:68](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/okporn/OkPornContracts.ts#L68)

Author name associated with the video

***

### fullVideoSource?

> `optional` **fullVideoSource?**: `string`

Defined in: [packages/providers/okporn/OkPornContracts.ts:71](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/okporn/OkPornContracts.ts#L71)

Full source URL when available

***

### videoAlbumId?

> `optional` **videoAlbumId?**: `string`

Defined in: [packages/providers/okporn/OkPornContracts.ts:74](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/okporn/OkPornContracts.ts#L74)

Album identifier linked to the video

***

### videoAlbum?

> `optional` **videoAlbum?**: [`OkPornAlbumOutput`](OkPornAlbumOutput.md)

Defined in: [packages/providers/okporn/OkPornContracts.ts:77](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/okporn/OkPornContracts.ts#L77)

Album metadata linked to the video

***

### starredBy

> **starredBy**: `string`[]

Defined in: [packages/providers/okporn/OkPornContracts.ts:80](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/okporn/OkPornContracts.ts#L80)

Starred by list
