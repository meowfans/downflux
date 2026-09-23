[**downflux**](../README.md)

***

[downflux](../README.md) / JobProgressEvent

# Interface: JobProgressEvent

Defined in: [packages/contracts/ProgressContracts.ts:39](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L39)

## Properties

### status

> **status**: [`JobProgressStatus`](../type-aliases/JobProgressStatus.md)

Defined in: [packages/contracts/ProgressContracts.ts:40](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L40)

***

### progress

> **progress**: [`ProgressDestination`](../type-aliases/ProgressDestination.md)

Defined in: [packages/contracts/ProgressContracts.ts:41](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L41)

***

### currentTarget

> **currentTarget**: `string`

Defined in: [packages/contracts/ProgressContracts.ts:44](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L44)

***

### totalTargets

> **totalTargets**: `number`

Defined in: [packages/contracts/ProgressContracts.ts:45](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L45)

***

### resolvedTargets

> **resolvedTargets**: `number`

Defined in: [packages/contracts/ProgressContracts.ts:46](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L46)

***

### currentItem

> **currentItem**: `string`

Defined in: [packages/contracts/ProgressContracts.ts:49](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L49)

***

### totalItems

> **totalItems**: `number`

Defined in: [packages/contracts/ProgressContracts.ts:50](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L50)

***

### resolvedItems

> **resolvedItems**: `number`

Defined in: [packages/contracts/ProgressContracts.ts:51](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L51)

***

### redirectedUrl

> **redirectedUrl**: `string`

Defined in: [packages/contracts/ProgressContracts.ts:54](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L54)

***

### hlsPlaylistUrl

> **hlsPlaylistUrl**: `string`

Defined in: [packages/contracts/ProgressContracts.ts:57](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L57)

***

### currentSegment

> **currentSegment**: `string`

Defined in: [packages/contracts/ProgressContracts.ts:58](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L58)

***

### totalSegments

> **totalSegments**: `number`

Defined in: [packages/contracts/ProgressContracts.ts:59](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L59)

***

### resolvedSegments

> **resolvedSegments**: `number`

Defined in: [packages/contracts/ProgressContracts.ts:60](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L60)

***

### downloadProgress

> **downloadProgress**: `number`

Defined in: [packages/contracts/ProgressContracts.ts:63](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L63)

***

### downloadedBytes

> **downloadedBytes**: `number`

Defined in: [packages/contracts/ProgressContracts.ts:64](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L64)

***

### totalBytes

> **totalBytes**: `number`

Defined in: [packages/contracts/ProgressContracts.ts:65](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L65)

***

### itemKey

> **itemKey**: `string`

Defined in: [packages/contracts/ProgressContracts.ts:74](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L74)

Identity of the item an update belongs to.

#### Remarks

Set by the transport layer so byte and segment counts land on the right item.
Updates without it are treated as job-level.

***

### itemLabel

> **itemLabel**: `string`

Defined in: [packages/contracts/ProgressContracts.ts:77](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L77)

Display label for [JobProgressEvent.itemKey](#itemkey).

***

### activeItems

> **activeItems**: [`ItemProgressSnapshot`](ItemProgressSnapshot.md)[]

Defined in: [packages/contracts/ProgressContracts.ts:80](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L80)

Every item currently transferring, plus the most recently finished ones.

***

### startTime

> **startTime**: `number`

Defined in: [packages/contracts/ProgressContracts.ts:83](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L83)

***

### lastUpdateTime

> **lastUpdateTime**: `number`

Defined in: [packages/contracts/ProgressContracts.ts:84](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L84)

***

### prevBytes

> **prevBytes**: `number`

Defined in: [packages/contracts/ProgressContracts.ts:87](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L87)

***

### speed

> **speed**: `number`

Defined in: [packages/contracts/ProgressContracts.ts:88](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L88)

***

### eta

> **eta**: `number`

Defined in: [packages/contracts/ProgressContracts.ts:89](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L89)

***

### failed

> **failed**: `number`

Defined in: [packages/contracts/ProgressContracts.ts:92](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L92)

***

### error

> **error**: `Error`

Defined in: [packages/contracts/ProgressContracts.ts:95](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L95)

***

### message

> **message**: `string`

Defined in: [packages/contracts/ProgressContracts.ts:98](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L98)

***

### item

> **item**: [`PipelineItem`](PipelineItem.md)

Defined in: [packages/contracts/ProgressContracts.ts:101](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L101)

***

### result

> **result**: `Omit`\<[`DownloadResult`](DownloadResult.md), `"buffer"`\>

Defined in: [packages/contracts/ProgressContracts.ts:103](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ProgressContracts.ts#L103)
