[**downflux**](../README.md)

***

[downflux](../README.md) / TransferCoordinator

# Class: TransferCoordinator

Defined in: [packages/core/coordinators/TransferCoordinator.ts:16](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/core/coordinators/TransferCoordinator.ts#L16)

Coordinates one pipeline item transfer into storage.

## Remarks

The transfer coordinator binds streaming and storage together. It resolves
the final media URL, opens the correct sink, streams bytes, finalizes the
stored media, and returns download metadata to the task coordinator.

## Constructors

### Constructor

> **new TransferCoordinator**(`fileManager`, `streamHttpClient`, `progressManager`): `TransferCoordinator`

Defined in: [packages/core/coordinators/TransferCoordinator.ts:17](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/core/coordinators/TransferCoordinator.ts#L17)

#### Parameters

##### fileManager

[`FileManager`](FileManager.md)

##### streamHttpClient

[`StreamHttpClient`](StreamHttpClient.md)

##### progressManager

[`ProgressManager`](ProgressManager.md)

#### Returns

`TransferCoordinator`

## Properties

### fileManager

> `protected` `readonly` **fileManager**: [`FileManager`](FileManager.md)

Defined in: [packages/core/coordinators/TransferCoordinator.ts:18](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/core/coordinators/TransferCoordinator.ts#L18)

***

### streamHttpClient

> `protected` `readonly` **streamHttpClient**: [`StreamHttpClient`](StreamHttpClient.md)

Defined in: [packages/core/coordinators/TransferCoordinator.ts:19](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/core/coordinators/TransferCoordinator.ts#L19)

***

### progressManager

> `protected` `readonly` **progressManager**: [`ProgressManager`](ProgressManager.md)

Defined in: [packages/core/coordinators/TransferCoordinator.ts:20](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/core/coordinators/TransferCoordinator.ts#L20)

## Methods

### download()

> **download**(`item`, `opts`): `Promise`\<[`DownloadResult`](../interfaces/DownloadResult.md)\>

Defined in: [packages/core/coordinators/TransferCoordinator.ts:99](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/core/coordinators/TransferCoordinator.ts#L99)

Downloads a single pipeline item.

#### Parameters

##### item

[`PipelineItem`](../interfaces/PipelineItem.md)

Pipeline item describing the media URL and identifier.

##### opts

[`DownloadOptions`](../interfaces/DownloadOptions.md)

Download and output options.

#### Returns

`Promise`\<[`DownloadResult`](../interfaces/DownloadResult.md)\>

Final download details including path, size, MIME type, and final URL.
