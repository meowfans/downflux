[**downflux**](../README.md)

***

[downflux](../README.md) / ResolvedPlaylist

# Interface: ResolvedPlaylist

Defined in: [packages/engines/http/HlsClient.ts:32](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/engines/http/HlsClient.ts#L32)

A fully resolved media playlist.

## Remarks

Resolving produces everything streaming needs in one pass so the media
playlist is fetched exactly once, even though callers need fMP4 detection
before they open a sink and segments after.

## Properties

### playlistUrl

> **playlistUrl**: `string`

Defined in: [packages/engines/http/HlsClient.ts:33](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/engines/http/HlsClient.ts#L33)

***

### segments

> **segments**: [`HlsSegment`](HlsSegment.md)[]

Defined in: [packages/engines/http/HlsClient.ts:34](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/engines/http/HlsClient.ts#L34)

***

### initUrl

> **initUrl**: `string` \| `null`

Defined in: [packages/engines/http/HlsClient.ts:35](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/engines/http/HlsClient.ts#L35)

***

### isFmp4

> **isFmp4**: `boolean`

Defined in: [packages/engines/http/HlsClient.ts:36](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/engines/http/HlsClient.ts#L36)

***

### estimatedBytes

> **estimatedBytes**: `number`

Defined in: [packages/engines/http/HlsClient.ts:46](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/engines/http/HlsClient.ts#L46)

Approximate size of the source stream in bytes.

#### Remarks

Exact when the playlist declares `#EXT-X-BYTERANGE`, otherwise derived from
the variant's `BANDWIDTH` and the summed `#EXTINF` durations. It describes
the bytes fetched, not the bytes produced, because remuxing changes size.
