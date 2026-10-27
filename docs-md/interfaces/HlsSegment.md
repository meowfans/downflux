[**downflux**](../README.md)

***

[downflux](../README.md) / HlsSegment

# Interface: HlsSegment

Defined in: [packages/engines/http/HlsClient.ts:17](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/engines/http/HlsClient.ts#L17)

One media segment together with the `#EXT-X-KEY` in effect for it.

## Properties

### url

> **url**: `string`

Defined in: [packages/engines/http/HlsClient.ts:18](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/engines/http/HlsClient.ts#L18)

***

### key

> **key**: [`ParseKey`](ParseKey.md) \| `null`

Defined in: [packages/engines/http/HlsClient.ts:19](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/engines/http/HlsClient.ts#L19)

***

### sequence

> **sequence**: `number`

Defined in: [packages/engines/http/HlsClient.ts:21](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/engines/http/HlsClient.ts#L21)

Media sequence number, used as the implicit AES-128 IV when no `IV=` is declared.
