[**downflux**](../README.md)

***

[downflux](../README.md) / ParserRegistry

# Class: ParserRegistry

Defined in: [packages/core/registries/ParserRegistry.ts:98](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/core/registries/ParserRegistry.ts#L98)

Resolves and caches parser classes by provider.

## Remarks

Registries keep provider lookup out of the execution flow. They lazy-load
provider modules, cache constructors, and fall back to default behavior when
a provider-specific implementation is absent.

## Constructors

### Constructor

> **new ParserRegistry**(): `ParserRegistry`

#### Returns

`ParserRegistry`

## Methods

### getParser()

> `static` **getParser**(`provider`): `Promise`\<[`BaseParser`](BaseParser.md)\>

Defined in: [packages/core/registries/ParserRegistry.ts:128](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/core/registries/ParserRegistry.ts#L128)

Creates a parser instance for the requested provider.

#### Parameters

##### provider

[`Provider`](../enumerations/Provider.md)

Provider whose parser should be loaded.

#### Returns

`Promise`\<[`BaseParser`](BaseParser.md)\>

Parser instance for the provider, or the default parser fallback.
