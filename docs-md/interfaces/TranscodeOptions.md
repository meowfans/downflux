[**downflux**](../README.md)

***

[downflux](../README.md) / TranscodeOptions

# Interface: TranscodeOptions

Defined in: [packages/contracts/StorageContracts.ts:50](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/StorageContracts.ts#L50)

## Properties

### inputPath?

> `optional` **inputPath?**: `string`

Defined in: [packages/contracts/StorageContracts.ts:55](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/StorageContracts.ts#L55)

Internal path of the downloaded media file that should be finalized.
DownFlux sets this automatically when a streamed file needs ffmpeg.

***

### ffmpegPath?

> `optional` **ffmpegPath?**: `string`

Defined in: [packages/contracts/StorageContracts.ts:65](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/StorageContracts.ts#L65)

Explicit ffmpeg executable path.

Use this when the consuming project cannot use the bundled `ffmpeg-static`
binary, for example when pnpm build scripts are disabled.

#### Example

```ts
'/opt/homebrew/bin/ffmpeg'
```

***

### deleteInput?

> `optional` **deleteInput?**: `boolean`

Defined in: [packages/contracts/StorageContracts.ts:71](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/StorageContracts.ts#L71)

Deletes the intermediate input file after successful finalization.

#### Default Value

```ts
true
```

***

### ffmpegArgs?

> `optional` **ffmpegArgs?**: `string`[]

Defined in: [packages/contracts/StorageContracts.ts:77](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/StorageContracts.ts#L77)

Complete custom ffmpeg arguments.
When provided, these replace DownFlux's default remux/transcode arguments.

***

### outputExtension?

> `optional` **outputExtension?**: `string`

Defined in: [packages/contracts/StorageContracts.ts:83](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/StorageContracts.ts#L83)

Final media container extension.

#### Default Value

```ts
'mp4'
```

***

### preset?

> `optional` **preset?**: `"medium"` \| `"ultrafast"` \| `"superfast"` \| `"veryfast"` \| `"faster"` \| `"fast"` \| `"slow"`

Defined in: [packages/contracts/StorageContracts.ts:88](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/StorageContracts.ts#L88)

ffmpeg encoder preset used when transcoding with an encoder such as libx264.

***

### crf?

> `optional` **crf?**: `number`

Defined in: [packages/contracts/StorageContracts.ts:93](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/StorageContracts.ts#L93)

Constant Rate Factor used when transcoding with an encoder such as libx264.

***

### videoCodec?

> `optional` **videoCodec?**: `string`

Defined in: [packages/contracts/StorageContracts.ts:99](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/StorageContracts.ts#L99)

ffmpeg video codec.

#### Default Value

```ts
'copy'
```

***

### audioCodec?

> `optional` **audioCodec?**: `string`

Defined in: [packages/contracts/StorageContracts.ts:105](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/StorageContracts.ts#L105)

ffmpeg audio codec.

#### Default Value

```ts
'copy'
```
