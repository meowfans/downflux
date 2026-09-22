[**downflux**](../README.md)

***

[downflux](../README.md) / TerminalSurface

# Class: TerminalSurface

Defined in: packages/core/ui/TerminalSurface.ts:15

Process-wide owner of the live terminal region.

## Remarks

In-place rendering means exactly one component may move the cursor. Each
`LogManager` previously tracked its own line count against a shared stdout, so
two concurrent jobs erased each other's output and printed the banner twice.

All live blocks are registered here instead and composed into a single region
that is erased and redrawn as a unit, which keeps concurrent jobs legible and
gives one place to push permanent lines through ([TerminalSurface.persist](#persist)).

## Constructors

### Constructor

> **new TerminalSurface**(): `TerminalSurface`

#### Returns

`TerminalSurface`

## Accessors

### instance

#### Get Signature

> **get** `static` **instance**(): `TerminalSurface`

Defined in: packages/core/ui/TerminalSurface.ts:18

##### Returns

`TerminalSurface`

## Methods

### setBlock()

> **setBlock**(`owner`, `lines`, `options?`): `void`

Defined in: packages/core/ui/TerminalSurface.ts:295

Registers or updates one owner's live block.

#### Parameters

##### owner

`symbol`

##### lines

`string`[]

##### options?

###### captureConsole?

`boolean`

#### Returns

`void`

***

### persist()

> **persist**(`line`): `void`

Defined in: packages/core/ui/TerminalSurface.ts:318

Writes a permanent line above the live region.

#### Parameters

##### line

`string`

#### Returns

`void`

#### Remarks

Anything written straight to stdout while a block is live is erased by the
next frame, because the cursor is rewound over it. Routing output through
here erases the region first, emits the line, then redraws below it.

***

### releaseBlock()

> **releaseBlock**(`owner`): `void`

Defined in: packages/core/ui/TerminalSurface.ts:336

Retires one owner's block, leaving its last frame on screen.

#### Parameters

##### owner

`symbol`

#### Returns

`void`

#### Remarks

The finished block is promoted to permanent output rather than erased, so a
completed job's summary survives while other jobs keep rendering below it.

***

### release()

> **release**(): `void`

Defined in: packages/core/ui/TerminalSurface.ts:355

Restores the terminal once no block is live.

#### Returns

`void`
