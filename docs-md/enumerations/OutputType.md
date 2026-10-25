[**downflux**](../README.md)

***

[downflux](../README.md) / OutputType

# Enumeration: OutputType

Defined in: [packages/types/DownloadTypes.ts:2](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/types/DownloadTypes.ts#L2)

Job output mode

## Enumeration Members

### DEVICE

> **DEVICE**: `"DEVICE"`

Defined in: [packages/types/DownloadTypes.ts:4](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/types/DownloadTypes.ts#L4)

Writes files to device storage

***

### JSON

> **JSON**: `"JSON"`

Defined in: [packages/types/DownloadTypes.ts:7](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/types/DownloadTypes.ts#L7)

Writes ExecutionCoordinator metadata as JSON

***

### STREAM

> **STREAM**: `"STREAM"`

Defined in: [packages/types/DownloadTypes.ts:17](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/types/DownloadTypes.ts#L17)

Delivers each item as a readable stream.

#### Remarks

Bytes are never held in memory: transport media is remuxed on the fly and
piped straight through, so an HTTP handler can forward it to the client at
constant memory regardless of file size.

***

### RETURN

> **RETURN**: `"RETURN"`

Defined in: [packages/types/DownloadTypes.ts:20](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/types/DownloadTypes.ts#L20)

Returns extracted metadata without downloading
