[**downflux**](../README.md)

***

[downflux](../README.md) / DirectoryOutputOptions

# Interface: DirectoryOutputOptions

Defined in: [packages/contracts/StorageContracts.ts:112](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/contracts/StorageContracts.ts#L112)

Directory output options.
Controls where downloaded files are written.

## Properties

### directoryPath?

> `optional` **directoryPath?**: `string`

Defined in: [packages/contracts/StorageContracts.ts:117](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/contracts/StorageContracts.ts#L117)

Directory path for written files

#### Default Value

```ts
process.cwd()
```

***

### prefix?

> `optional` **prefix?**: `string`

Defined in: [packages/contracts/StorageContracts.ts:120](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/contracts/StorageContracts.ts#L120)

Filename prefix

***

### pattern?

> `optional` **pattern?**: `"extension"` \| `"provider"` \| `"recursive"`

Defined in: [packages/contracts/StorageContracts.ts:132](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/contracts/StorageContracts.ts#L132)

Directory structure pattern for recursive downloads.

#### Remarks

- `provider`: Organizes files by provider name.
- `extension`: Organizes files by file extension.
- `recursive`: Preserves the original directory structure from the source URL.

#### Default Value

```ts
'recursive'
```
