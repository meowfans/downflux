[**downflux**](../README.md)

***

[downflux](../README.md) / PipelineHook

# Interface: PipelineHook

Defined in: [packages/contracts/PipelineContracts.ts:18](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/PipelineContracts.ts#L18)

## Methods

### onExtract()?

> `optional` **onExtract**(`item`): `void` \| `Promise`\<`void`\>

Defined in: [packages/contracts/PipelineContracts.ts:19](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/PipelineContracts.ts#L19)

#### Parameters

##### item

[`PipelineItem`](PipelineItem.md)

#### Returns

`void` \| `Promise`\<`void`\>

***

### onDownload()?

> `optional` **onDownload**(`payload`): `void` \| `Promise`\<`void`\>

Defined in: [packages/contracts/PipelineContracts.ts:20](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/PipelineContracts.ts#L20)

#### Parameters

##### payload

###### item

[`PipelineItem`](PipelineItem.md)

###### result

[`DownloadResult`](DownloadResult.md)

#### Returns

`void` \| `Promise`\<`void`\>
