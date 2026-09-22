[**downflux**](../README.md)

***

[downflux](../README.md) / CliManager

# Class: CliManager

Defined in: [packages/core/ui/CliManager.ts:14](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/core/ui/CliManager.ts#L14)

Renders job progress as a branded terminal panel.

## Remarks

Subscribes to `ProgressManager` and turns each event into a fixed block that
`LogManager` redraws in place. Rows that carry no data for the current phase
are omitted, so an image job does not show empty HLS segment counters.

## Constructors

### Constructor

> **new CliManager**(`progressManager`): `CliManager`

Defined in: [packages/core/ui/CliManager.ts:19](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/core/ui/CliManager.ts#L19)

#### Parameters

##### progressManager

[`ProgressManager`](ProgressManager.md)

#### Returns

`CliManager`

## Methods

### destroy()

> **destroy**(): `void`

Defined in: [packages/core/ui/CliManager.ts:27](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/core/ui/CliManager.ts#L27)

#### Returns

`void`
