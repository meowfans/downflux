[**downflux**](../README.md)

***

[downflux](../README.md) / LogManager

# Class: LogManager

Defined in: [packages/core/ui/LogManager.ts:11](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/core/ui/LogManager.ts#L11)

Per-job handle onto the shared terminal region.

## Remarks

Rendering state lives in [TerminalSurface](TerminalSurface.md) because only one component in
a process may move the cursor. Each job owns a slice of the live region, so
concurrent jobs stack instead of erasing one another.

## Constructors

### Constructor

> **new LogManager**(): `LogManager`

#### Returns

`LogManager`

## Methods

### renderBlock()

> **renderBlock**(`lines`, `options?`): `void`

Defined in: [packages/core/ui/LogManager.ts:20](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/core/ui/LogManager.ts#L20)

Prints the banner and the job's current block.

#### Parameters

##### lines

`string`[]

Block body, already styled.

##### options?

`captureConsole` routes foreign `console` output around the live region.

###### captureConsole?

`boolean`

#### Returns

`void`

***

### log()

> **log**(`line`): `void`

Defined in: [packages/core/ui/LogManager.ts:31](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/core/ui/LogManager.ts#L31)

Writes a permanent line above the live region.

#### Parameters

##### line

`string`

#### Returns

`void`

#### Remarks

Use this instead of `console.log` while a job is rendering: direct writes
land inside the region the next frame rewinds over, and are lost.

***

### destroy()

> **destroy**(): `void`

Defined in: [packages/core/ui/LogManager.ts:36](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/core/ui/LogManager.ts#L36)

Freezes this job's final block and restores the terminal when it is the last one.

#### Returns

`void`
