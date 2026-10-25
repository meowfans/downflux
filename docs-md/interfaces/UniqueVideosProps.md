[**downflux**](../README.md)

***

[downflux](../README.md) / UniqueVideosProps

# Interface: UniqueVideosProps\<T\>

Defined in: [packages/base/BaseTransformer.ts:21](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseTransformer.ts#L21)

Selectors used to normalize provider-specific video records.

## Type Parameters

### T

`T`

Provider-specific video source record type.

## Properties

### getUrl

> **getUrl**: (`video`) => `string`

Defined in: [packages/base/BaseTransformer.ts:22](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseTransformer.ts#L22)

#### Parameters

##### video

`T`

#### Returns

`string`

***

### getQuality

> **getQuality**: (`video`) => [`VideoQuality`](../enumerations/VideoQuality.md)

Defined in: [packages/base/BaseTransformer.ts:23](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseTransformer.ts#L23)

#### Parameters

##### video

`T`

#### Returns

[`VideoQuality`](../enumerations/VideoQuality.md)
