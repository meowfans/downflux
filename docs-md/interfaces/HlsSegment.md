[**downflux**](../README.md)

***

[downflux](../README.md) / HlsSegment

# Interface: HlsSegment

Defined in: [packages/engines/http/HlsClient.ts:17](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/engines/http/HlsClient.ts#L17)

One media segment together with the `#EXT-X-KEY` in effect for it.

## Properties

### url

> **url**: `string`

Defined in: [packages/engines/http/HlsClient.ts:18](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/engines/http/HlsClient.ts#L18)

***

### key

> **key**: [`ParseKey`](ParseKey.md) \| `null`

Defined in: [packages/engines/http/HlsClient.ts:19](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/engines/http/HlsClient.ts#L19)

***

### sequence

> **sequence**: `number`

Defined in: [packages/engines/http/HlsClient.ts:21](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/engines/http/HlsClient.ts#L21)

Media sequence number, used as the implicit AES-128 IV when no `IV=` is declared.
