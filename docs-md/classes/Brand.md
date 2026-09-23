[**downflux**](../README.md)

***

[downflux](../README.md) / Brand

# Class: Brand

Defined in: [packages/shared/ui/Brand.ts:12](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/shared/ui/Brand.ts#L12)

ANSI styling helpers and DownFlux brand assets.

## Remarks

Kept dependency-free on purpose: the package ships as a library, so pulling a
colour or spinner dependency in for CLI output would push it onto every
consumer. Colour is disabled automatically when the stream is not a TTY, when
`NO_COLOR` is set, or when `TERM=dumb`, so piped output stays clean.

## Constructors

### Constructor

> **new Brand**(): `Brand`

#### Returns

`Brand`

## Properties

### ICON

> `readonly` `static` **ICON**: `"⬇"` = `'⬇'`

Defined in: [packages/shared/ui/Brand.ts:14](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/shared/ui/Brand.ts#L14)

Downward flux arrow used as the product icon.

***

### NAME

> `readonly` `static` **NAME**: `"DOWNFLUX"` = `'DOWNFLUX'`

Defined in: [packages/shared/ui/Brand.ts:16](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/shared/ui/Brand.ts#L16)

***

### TAGLINE

> `readonly` `static` **TAGLINE**: `"modular media extraction"` = `'modular media extraction'`

Defined in: [packages/shared/ui/Brand.ts:18](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/shared/ui/Brand.ts#L18)

## Accessors

### colorEnabled

#### Get Signature

> **get** `static` **colorEnabled**(): `boolean`

Defined in: [packages/shared/ui/Brand.ts:22](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/shared/ui/Brand.ts#L22)

##### Returns

`boolean`

## Methods

### bold()

> `static` **bold**(`value`): `string`

Defined in: [packages/shared/ui/Brand.ts:36](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/shared/ui/Brand.ts#L36)

#### Parameters

##### value

`string`

#### Returns

`string`

***

### dim()

> `static` **dim**(`value`): `string`

Defined in: [packages/shared/ui/Brand.ts:40](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/shared/ui/Brand.ts#L40)

#### Parameters

##### value

`string`

#### Returns

`string`

***

### accent()

> `static` **accent**(`value`): `string`

Defined in: [packages/shared/ui/Brand.ts:45](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/shared/ui/Brand.ts#L45)

Brand accent, a cyan-leaning gradient anchor.

#### Parameters

##### value

`string`

#### Returns

`string`

***

### accentSoft()

> `static` **accentSoft**(`value`): `string`

Defined in: [packages/shared/ui/Brand.ts:49](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/shared/ui/Brand.ts#L49)

#### Parameters

##### value

`string`

#### Returns

`string`

***

### success()

> `static` **success**(`value`): `string`

Defined in: [packages/shared/ui/Brand.ts:53](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/shared/ui/Brand.ts#L53)

#### Parameters

##### value

`string`

#### Returns

`string`

***

### warn()

> `static` **warn**(`value`): `string`

Defined in: [packages/shared/ui/Brand.ts:57](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/shared/ui/Brand.ts#L57)

#### Parameters

##### value

`string`

#### Returns

`string`

***

### danger()

> `static` **danger**(`value`): `string`

Defined in: [packages/shared/ui/Brand.ts:61](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/shared/ui/Brand.ts#L61)

#### Parameters

##### value

`string`

#### Returns

`string`

***

### muted()

> `static` **muted**(`value`): `string`

Defined in: [packages/shared/ui/Brand.ts:65](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/shared/ui/Brand.ts#L65)

#### Parameters

##### value

`string`

#### Returns

`string`

***

### plain()

> `static` **plain**(`value`): `string`

Defined in: [packages/shared/ui/Brand.ts:70](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/shared/ui/Brand.ts#L70)

Strips ANSI so width maths stay correct for styled strings.

#### Parameters

##### value

`string`

#### Returns

`string`

***

### width()

> `static` **width**(`value`): `number`

Defined in: [packages/shared/ui/Brand.ts:75](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/shared/ui/Brand.ts#L75)

#### Parameters

##### value

`string`

#### Returns

`number`

***

### wordmark()

> `static` **wordmark**(): `string`

Defined in: [packages/shared/ui/Brand.ts:80](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/shared/ui/Brand.ts#L80)

The one-line wordmark shown at the top of a render block.

#### Returns

`string`

***

### banner()

> `static` **banner**(`width?`): `string`[]

Defined in: [packages/shared/ui/Brand.ts:94](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/shared/ui/Brand.ts#L94)

Multi-line banner, used once when a job starts on an interactive terminal.

#### Parameters

##### width?

`number` = `...`

#### Returns

`string`[]

#### Remarks

Falls back to the single-line wordmark on terminals too narrow to hold the
ASCII block without wrapping it into noise.

***

### statusIcon()

> `static` **statusIcon**(`status`): `string`

Defined in: [packages/shared/ui/Brand.ts:120](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/shared/ui/Brand.ts#L120)

#### Parameters

##### status

[`JobProgressStatus`](../type-aliases/JobProgressStatus.md)

#### Returns

`string`

***

### statusLabel()

> `static` **statusLabel**(`status`): `string`

Defined in: [packages/shared/ui/Brand.ts:125](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/shared/ui/Brand.ts#L125)

Colors a status label with its icon.

#### Parameters

##### status

[`JobProgressStatus`](../type-aliases/JobProgressStatus.md)

#### Returns

`string`

***

### spinner()

> `static` **spinner**(`tick`): `string`

Defined in: [packages/shared/ui/Brand.ts:149](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/shared/ui/Brand.ts#L149)

#### Parameters

##### tick

`number`

#### Returns

`string`
