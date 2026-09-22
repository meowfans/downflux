[**downflux**](../README.md)

***

[downflux](../README.md) / ProgressFormatter

# Class: ProgressFormatter

Defined in: [packages/core/progress/ProgressFormatter.ts:11](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/core/progress/ProgressFormatter.ts#L11)

Formats byte counts, rates, and progress bars for CLI output.

## Remarks

Rendering helpers live apart from `ProgressManager` so the manager stays a
pure state/event object and the presentation can change without touching the
download path.

## Constructors

### Constructor

> **new ProgressFormatter**(): `ProgressFormatter`

#### Returns

`ProgressFormatter`

## Methods

### formatBytes()

> `static` **formatBytes**(`bytes`): `string`

Defined in: [packages/core/progress/ProgressFormatter.ts:17](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/core/progress/ProgressFormatter.ts#L17)

#### Parameters

##### bytes

`number`

#### Returns

`string`

***

### formatSpeed()

> `static` **formatSpeed**(`bytesPerSecond`): `string`

Defined in: [packages/core/progress/ProgressFormatter.ts:28](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/core/progress/ProgressFormatter.ts#L28)

Formats a byte rate, e.g. `4.21 MB/s`.

#### Parameters

##### bytesPerSecond

`number`

#### Returns

`string`

***

### formatDuration()

> `static` **formatDuration**(`seconds`): `string`

Defined in: [packages/core/progress/ProgressFormatter.ts:35](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/core/progress/ProgressFormatter.ts#L35)

Formats a duration in seconds as `mm:ss`, or `hh:mm:ss` past an hour.

#### Parameters

##### seconds

`number`

#### Returns

`string`

***

### bar()

> `static` **bar**(`done`, `total?`, `width?`): `string`

Defined in: [packages/core/progress/ProgressFormatter.ts:61](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/core/progress/ProgressFormatter.ts#L61)

Renders a unicode progress bar.

#### Parameters

##### done

`number`

Completed units.

##### total?

`number`

Total units, or 0/undefined when the total is unknown.

##### width?

`number` = `ProgressFormatter.BAR_WIDTH`

Bar width in cells.

#### Returns

`string`

***

### percent()

> `static` **percent**(`done`, `total?`): `string`

Defined in: [packages/core/progress/ProgressFormatter.ts:87](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/core/progress/ProgressFormatter.ts#L87)

`42.5%`, padded so the column does not jitter as the number grows.

#### Parameters

##### done

`number`

##### total?

`number`

#### Returns

`string`

#### Remarks

An unknown total renders as `--` rather than `0.0%`. Segmented streams report
no overall byte length, and printing a percentage there claims a completion
ratio that was never measured.

***

### byteTrack()

> `static` **byteTrack**(`downloadedBytes?`, `totalBytes?`, `speed?`, `eta?`): `string`

Defined in: [packages/core/progress/ProgressFormatter.ts:101](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/core/progress/ProgressFormatter.ts#L101)

A byte-oriented track: bar, percentage, transferred/total, rate and ETA.

#### Parameters

##### downloadedBytes?

`number` = `0`

Bytes written so far.

##### totalBytes?

`number` = `0`

Expected total, when the server declared one.

##### speed?

`number` = `0`

Bytes per second.

##### eta?

`number` = `0`

Seconds remaining.

#### Returns

`string`

***

### countTrack()

> `static` **countTrack**(`done?`, `total?`, `width?`): `string`

Defined in: [packages/core/progress/ProgressFormatter.ts:116](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/core/progress/ProgressFormatter.ts#L116)

A count-oriented track: bar, percentage and `done/total`.

#### Parameters

##### done?

`number` = `0`

##### total?

`number` = `0`

##### width?

`number` = `ProgressFormatter.BAR_WIDTH`

#### Returns

`string`

***

### ~~createTrack()~~

> `static` **createTrack**(`type`, `downloaded?`, `total?`): `string`

Defined in: [packages/core/progress/ProgressFormatter.ts:127](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/core/progress/ProgressFormatter.ts#L127)

Legacy track formatter.

#### Parameters

##### type

`"items"` \| `"item"`

##### downloaded?

`number` = `0`

##### total?

`number` = `0`

#### Returns

`string`

#### Deprecated

Use [ProgressFormatter.byteTrack](#bytetrack) or [ProgressFormatter.countTrack](#counttrack).
