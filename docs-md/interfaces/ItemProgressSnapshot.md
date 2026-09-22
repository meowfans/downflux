[**downflux**](../README.md)

***

[downflux](../README.md) / ItemProgressSnapshot

# Interface: ItemProgressSnapshot

Defined in: [packages/contracts/ProgressContracts.ts:14](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ProgressContracts.ts#L14)

Progress for a single download item.

## Remarks

Downloads run concurrently, so byte counts, segment counts and transfer rates
belong to an item rather than to the job. Tracking them per item is what keeps
three simultaneous downloads from overwriting each other's numbers in the flat
job fields.

## Properties

### key

> **key**: `string`

Defined in: [packages/contracts/ProgressContracts.ts:16](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ProgressContracts.ts#L16)

Stable identity of the pipeline item.

***

### label

> **label**: `string`

Defined in: [packages/contracts/ProgressContracts.ts:19](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ProgressContracts.ts#L19)

Short human label, typically the filename.

***

### status

> **status**: `"DOWNLOADING"` \| `"DOWNLOADED"` \| `"FAILED"`

Defined in: [packages/contracts/ProgressContracts.ts:22](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ProgressContracts.ts#L22)

Whether the item is still transferring.

***

### downloadedBytes

> **downloadedBytes**: `number`

Defined in: [packages/contracts/ProgressContracts.ts:24](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ProgressContracts.ts#L24)

***

### totalBytes

> **totalBytes**: `number`

Defined in: [packages/contracts/ProgressContracts.ts:27](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ProgressContracts.ts#L27)

Expected size, or 0 when the source declares none (segmented streams).

***

### speed

> **speed**: `number`

Defined in: [packages/contracts/ProgressContracts.ts:30](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ProgressContracts.ts#L30)

Bytes per second for this item.

***

### eta

> **eta**: `number`

Defined in: [packages/contracts/ProgressContracts.ts:33](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ProgressContracts.ts#L33)

Seconds remaining for this item, or 0 when not estimable.

***

### totalSegments

> **totalSegments**: `number`

Defined in: [packages/contracts/ProgressContracts.ts:35](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ProgressContracts.ts#L35)

***

### resolvedSegments

> **resolvedSegments**: `number`

Defined in: [packages/contracts/ProgressContracts.ts:36](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ProgressContracts.ts#L36)
