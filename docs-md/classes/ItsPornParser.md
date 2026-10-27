[**downflux**](../README.md)

***

[downflux](../README.md) / ItsPornParser

# Class: ItsPornParser

Defined in: [packages/providers/itsporn/ItsPornParser.ts:13](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/providers/itsporn/ItsPornParser.ts#L13)

Extracts ItsPorn-specific metadata from fetched HTML.

## Remarks

Parsers keep DOM/string extraction separate from network and download code so provider page changes can be fixed in one place.

## Extends

- [`BaseParser`](BaseParser.md)

## Constructors

### Constructor

> **new ItsPornParser**(): `ItsPornParser`

#### Returns

`ItsPornParser`

#### Inherited from

[`BaseParser`](BaseParser.md).[`constructor`](BaseParser.md#constructor)

## Properties

### kvsResolver

> `protected` **kvsResolver**: [`KvsResolver`](KvsResolver.md)

Defined in: [packages/base/BaseParser.ts:16](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L16)

#### Inherited from

[`BaseParser`](BaseParser.md).[`kvsResolver`](BaseParser.md#kvsresolver)

## Methods

### extractScriptMethodInput()

> `protected` **extractScriptMethodInput**(`fnName`, `html`): `string` \| `null`

Defined in: [packages/base/BaseParser.ts:54](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L54)

Extracts the first string argument passed to a named script function.

#### Parameters

##### fnName

`string`

Function name to search for.

##### html

`string`

HTML or script text to inspect.

#### Returns

`string` \| `null`

The first string argument, or `null` when the call is absent.

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractScriptMethodInput`](BaseParser.md#extractscriptmethodinput)

***

### getFlashVars()

> `protected` **getFlashVars**(`html`): [`FlashVarsOutput`](../interfaces/FlashVarsOutput.md)

Defined in: [packages/base/BaseParser.ts:66](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L66)

Extracts KVS `flashVars` video metadata from inline scripts.

#### Parameters

##### html

`string`

HTML containing one or more KVS `flashVars` blocks.

#### Returns

[`FlashVarsOutput`](../interfaces/FlashVarsOutput.md)

Normalized KVS fields, video sources, previews, and timelines.

#### Inherited from

[`BaseParser`](BaseParser.md).[`getFlashVars`](BaseParser.md#getflashvars)

***

### extractElementText()

> `protected` **extractElementText**(`html`, `begin`, `end`, `fallback?`): `string`

Defined in: [packages/base/BaseParser.ts:191](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L191)

#### Parameters

##### html

`string`

##### begin

`string`

##### end

`string`

##### fallback?

`string` = `''`

#### Returns

`string`

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractElementText`](BaseParser.md#extractelementtext)

***

### extractElementTextPair()

> `protected` **extractElementTextPair**(`html`, `begin`, `end`, `pos?`): \[`string` \| `null`, `number`\]

Defined in: [packages/base/BaseParser.ts:200](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L200)

#### Parameters

##### html

`string`

##### begin

`string`

##### end

`string`

##### pos?

`number` = `0`

#### Returns

\[`string` \| `null`, `number`\]

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractElementTextPair`](BaseParser.md#extractelementtextpair)

***

### extractAllPairs()

> `protected` **extractAllPairs**(`html`, `begin`, `end`): `Generator`\<`string`\>

Defined in: [packages/base/BaseParser.ts:209](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L209)

#### Parameters

##### html

`string`

##### begin

`string`

##### end

`string`

#### Returns

`Generator`\<`string`\>

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractAllPairs`](BaseParser.md#extractallpairs)

***

### extractAll()

> `protected` **extractAll**(`html`, `rules`, `startPos?`): \[`Record`\<`string`, `string`\>, `number`\]

Defined in: [packages/base/BaseParser.ts:229](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L229)

#### Parameters

##### html

`string`

##### rules

\[`string`, `string`, `string`\][]

##### startPos?

`number` = `0`

#### Returns

\[`Record`\<`string`, `string`\>, `number`\]

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractAll`](BaseParser.md#extractall)

***

### extractAnchors()

> `protected` **extractAnchors**(`html`, `sourceUrl?`): `string`[]

Defined in: [packages/base/BaseParser.ts:244](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L244)

#### Parameters

##### html

`string`

##### sourceUrl?

`string`

#### Returns

`string`[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractAnchors`](BaseParser.md#extractanchors)

***

### extractAnchorTextsByHref()

> `protected` **extractAnchorTextsByHref**(`html`, `hrefPattern`): `string`[]

Defined in: [packages/base/BaseParser.ts:259](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L259)

#### Parameters

##### html

`string`

##### hrefPattern

`RegExp`

#### Returns

`string`[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractAnchorTextsByHref`](BaseParser.md#extractanchortextsbyhref)

***

### extractImageUrls()

> `protected` **extractImageUrls**(`html`, `sourceUrl?`): `string`[]

Defined in: [packages/base/BaseParser.ts:278](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L278)

#### Parameters

##### html

`string`

##### sourceUrl?

`string`

#### Returns

`string`[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractImageUrls`](BaseParser.md#extractimageurls)

***

### extractSourceUrls()

> `protected` **extractSourceUrls**(`html`, `sourceUrl?`): `string`[]

Defined in: [packages/base/BaseParser.ts:317](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L317)

#### Parameters

##### html

`string`

##### sourceUrl?

`string`

#### Returns

`string`[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractSourceUrls`](BaseParser.md#extractsourceurls)

***

### getFlashVarsVideo()

> `protected` **getFlashVarsVideo**(`html`, `sourceUrl`, `uploader?`, `starred?`): [`DefaultFlashVarsVideoOutput`](../interfaces/DefaultFlashVarsVideoOutput.md)

Defined in: [packages/base/BaseParser.ts:334](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L334)

#### Parameters

##### html

`string`

##### sourceUrl

`string`

##### uploader?

`string`

##### starred?

`string`[]

#### Returns

[`DefaultFlashVarsVideoOutput`](../interfaces/DefaultFlashVarsVideoOutput.md)

#### Inherited from

[`BaseParser`](BaseParser.md).[`getFlashVarsVideo`](BaseParser.md#getflashvarsvideo)

***

### collectElements()

> `protected` **collectElements**(`html`, `type`, `className?`): `Record`\<`string`, `string`\>[]

Defined in: [packages/base/BaseParser.ts:357](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L357)

#### Parameters

##### html

`string`

##### type

`string`

##### className?

`string`

#### Returns

`Record`\<`string`, `string`\>[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`collectElements`](BaseParser.md#collectelements)

***

### extractVideoPosters()

> `protected` **extractVideoPosters**(`html`, `sourceUrl?`): `string`[]

Defined in: [packages/base/BaseParser.ts:378](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L378)

#### Parameters

##### html

`string`

##### sourceUrl?

`string`

#### Returns

`string`[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractVideoPosters`](BaseParser.md#extractvideoposters)

***

### extractDivHrefs()

> `protected` **extractDivHrefs**(`html`, `sourceUrl?`): `string`[]

Defined in: [packages/base/BaseParser.ts:395](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L395)

#### Parameters

##### html

`string`

##### sourceUrl?

`string`

#### Returns

`string`[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractDivHrefs`](BaseParser.md#extractdivhrefs)

***

### extractVideoUrls()

> `protected` **extractVideoUrls**(`html`): `string`[]

Defined in: [packages/base/BaseParser.ts:406](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L406)

#### Parameters

##### html

`string`

#### Returns

`string`[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractVideoUrls`](BaseParser.md#extractvideourls)

***

### extractAllUrls()

> `protected` **extractAllUrls**(`html`): `string`[]

Defined in: [packages/base/BaseParser.ts:416](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L416)

#### Parameters

##### html

`string`

#### Returns

`string`[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractAllUrls`](BaseParser.md#extractallurls)

***

### extractLinks()

> `protected` **extractLinks**(`html`): `string`[]

Defined in: [packages/base/BaseParser.ts:420](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L420)

#### Parameters

##### html

`string`

#### Returns

`string`[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractLinks`](BaseParser.md#extractlinks)

***

### extractMetaDescription()

> `protected` **extractMetaDescription**(`html`): `string`

Defined in: [packages/base/BaseParser.ts:432](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L432)

#### Parameters

##### html

`string`

#### Returns

`string`

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractMetaDescription`](BaseParser.md#extractmetadescription)

***

### extractMetaNameContent()

> `protected` **extractMetaNameContent**(`html`, `value`): `string`

Defined in: [packages/base/BaseParser.ts:440](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L440)

#### Parameters

##### html

`string`

##### value

`string`

#### Returns

`string`

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractMetaNameContent`](BaseParser.md#extractmetanamecontent)

***

### extractMetaPropertyContent()

> `protected` **extractMetaPropertyContent**(`html`, `value`): `string`

Defined in: [packages/base/BaseParser.ts:448](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L448)

#### Parameters

##### html

`string`

##### value

`string`

#### Returns

`string`

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractMetaPropertyContent`](BaseParser.md#extractmetapropertycontent)

***

### collectAnchors()

> `protected` **collectAnchors**(`html`, `options?`): `object`[]

Defined in: [packages/base/BaseParser.ts:456](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L456)

#### Parameters

##### html

`string`

##### options?

###### sourceUrl?

`string`

###### className?

`string`

###### hrefPattern?

`RegExp`

#### Returns

`object`[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`collectAnchors`](BaseParser.md#collectanchors)

***

### extractMetaKeywords()

> `protected` **extractMetaKeywords**(`html`): `string`[]

Defined in: [packages/base/BaseParser.ts:508](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L508)

#### Parameters

##### html

`string`

#### Returns

`string`[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractMetaKeywords`](BaseParser.md#extractmetakeywords)

***

### extractTitle()

> `protected` **extractTitle**(`html`): `string`

Defined in: [packages/base/BaseParser.ts:518](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L518)

#### Parameters

##### html

`string`

#### Returns

`string`

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractTitle`](BaseParser.md#extracttitle)

***

### resolveUrl()

> `protected` **resolveUrl**(`raw`, `base?`): `string` \| `null`

Defined in: [packages/base/BaseParser.ts:522](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L522)

#### Parameters

##### raw

`string`

##### base?

`string`

#### Returns

`string` \| `null`

#### Inherited from

[`BaseParser`](BaseParser.md).[`resolveUrl`](BaseParser.md#resolveurl)

***

### isHttpUrl()

> `protected` **isHttpUrl**(`url?`): `url is string`

Defined in: [packages/base/BaseParser.ts:531](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L531)

#### Parameters

##### url?

`string` \| `null`

#### Returns

`url is string`

#### Inherited from

[`BaseParser`](BaseParser.md).[`isHttpUrl`](BaseParser.md#ishttpurl)

***

### decodeHtmlEntities()

> `protected` **decodeHtmlEntities**(`str`): `string`

Defined in: [packages/base/BaseParser.ts:535](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L535)

#### Parameters

##### str

`string`

#### Returns

`string`

#### Inherited from

[`BaseParser`](BaseParser.md).[`decodeHtmlEntities`](BaseParser.md#decodehtmlentities)

***

### extractByTag()

> `protected` **extractByTag**(`html`, `tag`, `options?`): `string`[]

Defined in: [packages/base/BaseParser.ts:546](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L546)

#### Parameters

##### html

`string`

##### tag

`string`

##### options?

###### className?

`string`

###### attribute?

`string`

#### Returns

`string`[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractByTag`](BaseParser.md#extractbytag)

***

### extractOneByTag()

> `protected` **extractOneByTag**(`html`, `tag`, `options?`): `string` \| `null`

Defined in: [packages/base/BaseParser.ts:572](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L572)

#### Parameters

##### html

`string`

##### tag

`string`

##### options?

###### className?

`string`

#### Returns

`string` \| `null`

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractOneByTag`](BaseParser.md#extractonebytag)

***

### extractScriptsByType()

> `protected` **extractScriptsByType**(`html`, `type`, `objectType?`): `Record`\<`string`, `any`\>[]

Defined in: [packages/base/BaseParser.ts:576](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L576)

#### Parameters

##### html

`string`

##### type

`string`

##### objectType?

`string`

#### Returns

`Record`\<`string`, `any`\>[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractScriptsByType`](BaseParser.md#extractscriptsbytype)

***

### extractByClass()

> `protected` **extractByClass**(`html`, `className`): `string`[]

Defined in: [packages/base/BaseParser.ts:596](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L596)

#### Parameters

##### html

`string`

##### className

`string`

#### Returns

`string`[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractByClass`](BaseParser.md#extractbyclass)

***

### extractAttributes()

> `protected` **extractAttributes**(`html`, `tag`, `attr`): `string`[]

Defined in: [packages/base/BaseParser.ts:610](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L610)

#### Parameters

##### html

`string`

##### tag

`string`

##### attr

`string`

#### Returns

`string`[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractAttributes`](BaseParser.md#extractattributes)

***

### extractSpans()

> `protected` **extractSpans**(`html`, `className?`): `string`[]

Defined in: [packages/base/BaseParser.ts:623](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L623)

#### Parameters

##### html

`string`

##### className?

`string`

#### Returns

`string`[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractSpans`](BaseParser.md#extractspans)

***

### extractDivs()

> `protected` **extractDivs**(`html`, `className?`): `string`[]

Defined in: [packages/base/BaseParser.ts:627](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L627)

#### Parameters

##### html

`string`

##### className?

`string`

#### Returns

`string`[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractDivs`](BaseParser.md#extractdivs)

***

### extractAnchorsContent()

> `protected` **extractAnchorsContent**(`html`, `className?`): `string`[]

Defined in: [packages/base/BaseParser.ts:631](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L631)

#### Parameters

##### html

`string`

##### className?

`string`

#### Returns

`string`[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractAnchorsContent`](BaseParser.md#extractanchorscontent)

***

### extractH2s()

> `protected` **extractH2s**(`html`, `className?`): `string`[]

Defined in: [packages/base/BaseParser.ts:635](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L635)

#### Parameters

##### html

`string`

##### className?

`string`

#### Returns

`string`[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractH2s`](BaseParser.md#extracth2s)

***

### extractH3s()

> `protected` **extractH3s**(`html`, `className?`): `string`[]

Defined in: [packages/base/BaseParser.ts:639](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L639)

#### Parameters

##### html

`string`

##### className?

`string`

#### Returns

`string`[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractH3s`](BaseParser.md#extracth3s)

***

### extractLists()

> `protected` **extractLists**(`html`, `className?`): `string`[]

Defined in: [packages/base/BaseParser.ts:643](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L643)

#### Parameters

##### html

`string`

##### className?

`string`

#### Returns

`string`[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractLists`](BaseParser.md#extractlists)

***

### extractBlocks()

> `protected` **extractBlocks**(`html`, `tag`, `className?`): `string`[]

Defined in: [packages/base/BaseParser.ts:647](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L647)

#### Parameters

##### html

`string`

##### tag

`string`

##### className?

`string`

#### Returns

`string`[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractBlocks`](BaseParser.md#extractblocks)

***

### extractKeyValue()

> `protected` **extractKeyValue**(`html`, `keyPattern`, `valuePattern`): `Record`\<`string`, `string`\>

Defined in: [packages/base/BaseParser.ts:655](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L655)

#### Parameters

##### html

`string`

##### keyPattern

`RegExp`

##### valuePattern

`RegExp`

#### Returns

`Record`\<`string`, `string`\>

#### Inherited from

[`BaseParser`](BaseParser.md).[`extractKeyValue`](BaseParser.md#extractkeyvalue)

***

### collectByClassNames()

> `protected` **collectByClassNames**(`html`, `classNames`, `options?`): `any`[]

Defined in: [packages/base/BaseParser.ts:670](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/base/BaseParser.ts#L670)

#### Parameters

##### html

`string`

##### classNames

`string` \| `string`[]

##### options?

###### includeInnerHTML?

`boolean`

###### attributes?

`string`[]

###### sourceUrl?

`string`

#### Returns

`any`[]

#### Inherited from

[`BaseParser`](BaseParser.md).[`collectByClassNames`](BaseParser.md#collectbyclassnames)

***

### transform()

> **transform**(`html`, `sourceUrl`): `Partial`\<[`DefaultExecutionResult`](../interfaces/DefaultExecutionResult.md)\<`Partial`\<[`ItsPornOutput`](../interfaces/ItsPornOutput.md)\>\>\>

Defined in: [packages/providers/itsporn/ItsPornParser.ts:14](https://github.com/opensegra/downflux/blob/c6686089f8cf3fd19c123a024dc242e2779a5334/packages/providers/itsporn/ItsPornParser.ts#L14)

Extracts common metadata from a fetched HTML document.

#### Parameters

##### html

`string`

Raw HTML returned by the HTTP engine.

##### sourceUrl

`string`

Final URL used as the metadata source.

#### Returns

`Partial`\<[`DefaultExecutionResult`](../interfaces/DefaultExecutionResult.md)\<`Partial`\<[`ItsPornOutput`](../interfaces/ItsPornOutput.md)\>\>\>

Common extracted fields used as the base provider result.

#### Overrides

[`BaseParser`](BaseParser.md).[`transform`](BaseParser.md#transform)
