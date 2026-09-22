[**downflux**](../README.md)

***

[downflux](../README.md) / WallHavenUserExecArgs

# Interface: WallHavenUserExecArgs

Defined in: [packages/providers/wallhaven/WallHavenContracts.ts:25](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/wallhaven/WallHavenContracts.ts#L25)

Execution arguments for WallHaven user uploads.
Controls uploader, purity, and metadata expansion.

## Extended by

- [`WallHavenUserFavoritesExecArgs`](WallHavenUserFavoritesExecArgs.md)

## Properties

### username

> **username**: `string`

Defined in: [packages/providers/wallhaven/WallHavenContracts.ts:27](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/wallhaven/WallHavenContracts.ts#L27)

Uploader username

***

### purity?

> `optional` **purity?**: `boolean`

Defined in: [packages/providers/wallhaven/WallHavenContracts.ts:30](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/wallhaven/WallHavenContracts.ts#L30)

Purity-safe upload listing flag, default is false

***

### includeMetadata?

> `optional` **includeMetadata?**: `boolean`

Defined in: [packages/providers/wallhaven/WallHavenContracts.ts:33](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/wallhaven/WallHavenContracts.ts#L33)

Includes full wallpaper metadata for each thumbnail
