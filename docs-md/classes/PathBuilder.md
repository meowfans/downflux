[**downflux**](../README.md)

***

[downflux](../README.md) / PathBuilder

# Class: PathBuilder

Defined in: [packages/storage/PathBuilder.ts:14](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/storage/PathBuilder.ts#L14)

Small helper for provider output paths and identifiers.

## Remarks

Path building is centralized so providers can describe logical media groups
without duplicating path separators, normalization, or filename conventions.

Identifiers are POSIX-style logical keys built with [PathBuilder.join](#join);
they are converted to platform paths only when [PathBuilder.buildDirectoryPath](#builddirectorypath)
hands them to the filesystem, so provider code never deals with separators.

## Constructors

### Constructor

> **new PathBuilder**(): `PathBuilder`

#### Returns

`PathBuilder`

## Methods

### buildDirectoryPath()

> **buildDirectoryPath**(`filename`, `identifier?`): `string`

Defined in: [packages/storage/PathBuilder.ts:15](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/storage/PathBuilder.ts#L15)

#### Parameters

##### filename

`string`

##### identifier?

`string`

#### Returns

`string`

***

### join()

> **join**(...`segments`): `string`

Defined in: [packages/storage/PathBuilder.ts:28](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/storage/PathBuilder.ts#L28)

Joins logical identifier segments.

#### Parameters

##### segments

...`string`[]

#### Returns

`string`

#### Remarks

Uses `path.posix` so the result normalizes consistently on every platform
and empty segments collapse instead of producing doubled separators.

***

### spaceNormalizer()

> **spaceNormalizer**(`input?`): `string`

Defined in: [packages/storage/PathBuilder.ts:32](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/storage/PathBuilder.ts#L32)

#### Parameters

##### input?

`string` = `'unknown'`

#### Returns

`string`
