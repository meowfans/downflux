[**downflux**](../README.md)

***

[downflux](../README.md) / CliManager

# Class: CliManager

Defined in: [packages/core/ui/CliManager.ts:16](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/core/ui/CliManager.ts#L16)

Renders job progress as a branded terminal panel.

## Remarks

Subscribes to `ProgressManager` and turns each event into a multi-line block
that a live `SegraLogger` redraws in place on stderr. The theme comes from the
host's `SegraLogger.create()` call; the library never sets it. Rows that carry
no data for the current phase are omitted, so an image job does not show empty
HLS segment counters.

## Constructors

### Constructor

> **new CliManager**(`progressManager`): `CliManager`

Defined in: [packages/core/ui/CliManager.ts:38](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/core/ui/CliManager.ts#L38)

#### Parameters

##### progressManager

[`ProgressManager`](ProgressManager.md)

#### Returns

`CliManager`

## Methods

### destroy()

> **destroy**(): `void`

Defined in: [packages/core/ui/CliManager.ts:46](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/core/ui/CliManager.ts#L46)

#### Returns

`void`
