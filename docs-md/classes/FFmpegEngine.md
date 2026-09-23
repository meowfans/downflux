[**downflux**](../README.md)

***

[downflux](../README.md) / FFmpegEngine

# Class: FFmpegEngine

Defined in: [packages/storage/FFmpegEngine.ts:20](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/storage/FFmpegEngine.ts#L20)

Media finalization wrapper around ffmpeg.

## Remarks

FFmpeg support lives in storage because container repair and transcoding are
output concerns. Downloaders write bytes first, then this engine remuxes or
transcodes formats such as HLS `.ts`/fMP4 into a playable final file.

## Constructors

### Constructor

> **new FFmpegEngine**(`progressManager`): `FFmpegEngine`

Defined in: [packages/storage/FFmpegEngine.ts:21](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/storage/FFmpegEngine.ts#L21)

#### Parameters

##### progressManager

[`ProgressManager`](ProgressManager.md)

#### Returns

`FFmpegEngine`

## Accessors

### ffmpeg

#### Get Signature

> **get** **ffmpeg**(): `string`

Defined in: [packages/storage/FFmpegEngine.ts:23](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/storage/FFmpegEngine.ts#L23)

##### Returns

`string`

## Methods

### createRemuxStream()

> **createRemuxStream**(`options?`): `object`

Defined in: [packages/storage/FFmpegEngine.ts:45](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/storage/FFmpegEngine.ts#L45)

Opens a streaming remux: bytes in one side, playable media out the other.

#### Parameters

##### options?

[`TranscodeOptions`](../interfaces/TranscodeOptions.md) = `{}`

Codec/transcode settings.

#### Returns

`object`

The ffmpeg stdin to write to, its stdout to read from, and a promise
that settles when the process exits.

##### input

> **input**: `Writable`

##### output

> **output**: `Readable`

##### done

> **done**: `Promise`\<`void`\>

#### Remarks

Output is **fragmented** MP4. A regular MP4 stores its `moov` index at a
known offset and therefore needs a seekable destination, which a pipe is not;
`frag_keyframe+empty_moov+default_base_moof` writes self-describing fragments
instead. That is the same container HLS and DASH deliver, so browsers and
modern players handle it, but it is not byte-identical to the `+faststart`
file the device sink produces.

The caller must consume `output` while writing to `input`; ffmpeg blocks once
its stdout pipe fills, which would otherwise deadlock the transfer.

***

### finalizeMedia()

> **finalizeMedia**(`options`): `Promise`\<\{ `path`: `string`; `filename`: `string`; `extension`: `string`; `mimeType`: `string`; \}\>

Defined in: [packages/storage/FFmpegEngine.ts:97](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/storage/FFmpegEngine.ts#L97)

Finalizes a downloaded media file with ffmpeg.

#### Parameters

##### options

[`TranscodeOptions`](../interfaces/TranscodeOptions.md)

Input path and optional codec/transcode settings.

#### Returns

`Promise`\<\{ `path`: `string`; `filename`: `string`; `extension`: `string`; `mimeType`: `string`; \}\>

Final media path, filename, extension, and MIME type.
