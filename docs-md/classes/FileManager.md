[**downflux**](../README.md)

***

[downflux](../README.md) / FileManager

# Class: FileManager

Defined in: [packages/storage/FileManager.ts:28](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/storage/FileManager.ts#L28)

Storage service for JSON results, buffers, and files on disk.

## Remarks

Storage is isolated because output handling needs path safety, filename
normalization, resource type inference, stream sinks, JSON serialization, and
post-processing for media containers. Keeping this here prevents providers
and coordinators from duplicating filesystem rules.

## Constructors

### Constructor

> **new FileManager**(`ffmpegEngine`, `progressManager`): `FileManager`

Defined in: [packages/storage/FileManager.ts:33](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/storage/FileManager.ts#L33)

#### Parameters

##### ffmpegEngine

[`FFmpegEngine`](FFmpegEngine.md)

##### progressManager

[`ProgressManager`](ProgressManager.md)

#### Returns

`FileManager`

## Methods

### createSink()

> **createSink**(`sinkInput`): `object`

Defined in: [packages/storage/FileManager.ts:44](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/storage/FileManager.ts#L44)

Creates the output sink for a download.

#### Parameters

##### sinkInput

[`CreateSinkInput`](../interfaces/CreateSinkInput.md)

Output mode, provider, identifier, and transcode options.

#### Returns

`object`

Writable stream and finalize callback for the selected output mode.

##### stream

> **stream**: `Writable`

##### cleanup

> **cleanup**: () => `Promise`\<`void`\>

###### Returns

`Promise`\<`void`\>

##### finalize

> **finalize**: (`resolved`, `headers`, `isFmp4?`) => `Promise`\<[`CreateSinkOutput`](../interfaces/CreateSinkOutput.md)\>

###### Parameters

###### resolved

[`ResolvedFile`](../interfaces/ResolvedFile.md)

###### headers

`Record`\<`string`, `string`\>

###### isFmp4?

`boolean`

###### Returns

`Promise`\<[`CreateSinkOutput`](../interfaces/CreateSinkOutput.md)\>

***

### createStreamSink()

> **createStreamSink**(`sinkInput`, `resolved`, `isFmp4?`): [`StreamSink`](../interfaces/StreamSink.md)

Defined in: [packages/storage/FileManager.ts:94](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/storage/FileManager.ts#L94)

Opens a pass-through sink whose readable side is handed to the caller.

#### Parameters

##### sinkInput

[`CreateSinkInput`](../interfaces/CreateSinkInput.md)

Output mode, provider, identifier, and transcode options.

##### resolved

[`ResolvedFile`](../interfaces/ResolvedFile.md)

Filename and extension resolved from the response.

##### isFmp4?

`boolean`

Whether the source was a fragmented-MP4 HLS playlist.

#### Returns

[`StreamSink`](../interfaces/StreamSink.md)

#### Remarks

Unlike the device and buffer sinks this returns before any bytes arrive, so
the consumer can start forwarding immediately. Transport containers are piped
through ffmpeg; anything already playable passes straight through, which
keeps one code path for every media type.

***

### needsRemux()

> **needsRemux**(`extension?`, `isFmp4?`): `boolean`

Defined in: [packages/storage/FileManager.ts:181](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/storage/FileManager.ts#L181)

Whether downloaded bytes still need remuxing into a playable container.

#### Parameters

##### extension?

`string`

Extension the bytes arrived as.

##### isFmp4?

`boolean`

Whether the source was a fragmented-MP4 HLS playlist.

#### Returns

`boolean`

#### Remarks

Two cases only: an MPEG-TS stitch, and fragmented MP4. fMP4 segments carry a
`.m4s` extension at the source but `deriveResolvedFile` resolves them to
`mp4`, so they are identified by the `isFmp4` flag rather than by extension.

Shared by every output mode so device and buffer output agree on what counts
as finished; the buffer sink previously applied no such test at all.

***

### finalizeStream()

> **finalizeStream**(`finalPath`, `tOptions?`, `isFmp4?`, `opts?`): `Promise`\<\{ `path`: `string`; `filename`: `string`; `extension`: `string`; `mimeType`: `any`; \}\>

Defined in: [packages/storage/FileManager.ts:194](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/storage/FileManager.ts#L194)

Finalizes a file after streaming completes.

#### Parameters

##### finalPath

`string`

Path of the streamed file.

##### tOptions?

[`TranscodeOptions`](../interfaces/TranscodeOptions.md)

Optional ffmpeg transcode options.

##### isFmp4?

`boolean`

Whether the stream came from an fMP4 HLS playlist.

##### opts?

Resolved extension and MIME type hints.

###### extension?

`string`

###### mimeType?

`string`

#### Returns

`Promise`\<\{ `path`: `string`; `filename`: `string`; `extension`: `string`; `mimeType`: `any`; \}\>

Final path, filename, extension, and MIME type.

***

### toJSON()

> **toJSON**\<`T`, `S`\>(`result`, `directoryPath?`): `string`

Defined in: [packages/storage/FileManager.ts:220](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/storage/FileManager.ts#L220)

Writes an execution result as JSON.

#### Type Parameters

##### T

`T`

##### S

`S` *extends* [`ExecutionShape`](../type-aliases/ExecutionShape.md)

#### Parameters

##### result

[`ExecutionResult`](../interfaces/ExecutionResult.md)\<`T`, `S`\>

Execution result to serialize.

##### directoryPath?

`string` = `...`

Destination directory.

#### Returns

`string`

Path to the written JSON file.

***

### getFileInfo()

> **getFileInfo**(`url`, `prefix?`): [`ResolvedFile`](../interfaces/ResolvedFile.md)

Defined in: [packages/storage/FileManager.ts:246](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/storage/FileManager.ts#L246)

Extracts filename and extension from URL.

#### Parameters

##### url

`string`

URL to extract filename and extension from

##### prefix?

`string`

Optional prefix to add to the filename

#### Returns

[`ResolvedFile`](../interfaces/ResolvedFile.md)

path undefined => fud_timestamp

***

### sanitizeFilename()

> **sanitizeFilename**(`name`): `string`

Defined in: [packages/storage/FileManager.ts:276](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/storage/FileManager.ts#L276)

Sanitize filename by replacing invalid characters with underscores mostly for
Windows OS which has a lot of reserved characters for filenames such as < > : " / \ | ? *

#### Parameters

##### name

`string`

#### Returns

`string`

***

### detectResourceType()

> **detectResourceType**(`url`, `request`): `object`

Defined in: [packages/storage/FileManager.ts:342](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/storage/FileManager.ts#L342)

Infers MIME type and extension for a media URL.

#### Parameters

##### url

`string`

Media URL to inspect.

##### request

[`ExecutionArgs`](../interfaces/ExecutionArgs.md)

Provider request used for fallback decisions.

#### Returns

`object`

Detected or provider-default resource type.

##### mimeType

> **mimeType**: `string`

##### extension

> **extension**: [`AllowedExtension`](../type-aliases/AllowedExtension.md)

***

### deriveResolvedFile()

> **deriveResolvedFile**(`initial`, `finalUrl`, `headers`, `isFmp4?`, `prefix?`): [`ResolvedFile`](../interfaces/ResolvedFile.md)

Defined in: [packages/storage/FileManager.ts:375](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/storage/FileManager.ts#L375)

Reconciles the initial file guess with the final response URL and headers.

#### Parameters

##### initial

[`ResolvedFile`](../interfaces/ResolvedFile.md)

Filename inferred before requesting the stream.

##### finalUrl

`string`

Final URL returned by the stream request.

##### headers

`Record`\<`string`, `string`\>

Response headers.

##### isFmp4?

`boolean`

Whether the media is fMP4 HLS.

##### prefix?

`string`

Optional filename prefix.

#### Returns

[`ResolvedFile`](../interfaces/ResolvedFile.md)

Resolved filename and extension for the actual media.
