[**downflux**](../README.md)

***

[downflux](../README.md) / StreamSink

# Interface: StreamSink

Defined in: [packages/contracts/StorageContracts.ts:32](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/StorageContracts.ts#L32)

A sink that exposes its readable side to the caller.

## Remarks

`input` receives downloaded bytes, `output` carries playable media. They are
the two ends of the same pipe when no remux is needed, and ffmpeg's stdin and
stdout when one is.

## Properties

### input

> **input**: `Writable`

Defined in: [packages/contracts/StorageContracts.ts:33](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/StorageContracts.ts#L33)

***

### output

> **output**: `Readable`

Defined in: [packages/contracts/StorageContracts.ts:34](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/StorageContracts.ts#L34)

***

### done

> **done**: `Promise`\<`void`\>

Defined in: [packages/contracts/StorageContracts.ts:37](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/StorageContracts.ts#L37)

Settles when the underlying remux finishes, or rejects if it failed.

***

### extension

> **extension**: `string`

Defined in: [packages/contracts/StorageContracts.ts:39](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/StorageContracts.ts#L39)

***

### mimeType

> **mimeType**: `string`

Defined in: [packages/contracts/StorageContracts.ts:40](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/StorageContracts.ts#L40)

***

### filename

> **filename**: `string`

Defined in: [packages/contracts/StorageContracts.ts:41](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/StorageContracts.ts#L41)
