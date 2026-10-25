[**downflux**](../README.md)

***

[downflux](../README.md) / BaseParser

# Class: BaseParser

Defined in: [packages/base/BaseParser.ts:15](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L15)

Default HTML parser shared by provider-specific parsers.

## Remarks

Parsers exist to keep extraction rules close to the HTML they understand.
The base parser collects common page fields such as anchors, images, meta
tags, and source URLs, while provider parsers add the site-specific fields
needed by transformers and pipelines.

## Extended by

- [`AnalRzParser`](AnalRzParser.md)
- [`ArtStationParser`](ArtStationParser.md)
- [`BeegParser`](BeegParser.md)
- [`BehanceParser`](BehanceParser.md)
- [`BlackPornParser`](BlackPornParser.md)
- [`BlueskyParser`](BlueskyParser.md)
- [`BoKepPornParser`](BoKepPornParser.md)
- [`ColliderPornParser`](ColliderPornParser.md)
- [`CumLouderParser`](CumLouderParser.md)
- [`DaFreePornParser`](DaFreePornParser.md)
- [`DanbooruParser`](DanbooruParser.md)
- [`DaNudeParser`](DaNudeParser.md)
- [`DeviantArtParser`](DeviantArtParser.md)
- [`EpicGfsParser`](EpicGfsParser.md)
- [`EPornerParser`](EPornerParser.md)
- [`FlickrParser`](FlickrParser.md)
- [`GelbooruParser`](GelbooruParser.md)
- [`HqPornParser`](HqPornParser.md)
- [`ImgurParser`](ImgurParser.md)
- [`InstagramParser`](InstagramParser.md)
- [`InterracialParser`](InterracialParser.md)
- [`ItsPornParser`](ItsPornParser.md)
- [`Lesbian8Parser`](Lesbian8Parser.md)
- [`MangaDexParser`](MangaDexParser.md)
- [`MastodonParser`](MastodonParser.md)
- [`MegaTubeParser`](MegaTubeParser.md)
- [`MomVidsParser`](MomVidsParser.md)
- [`MyLustParser`](MyLustParser.md)
- [`NewgroundsParser`](NewgroundsParser.md)
- [`OkPornParser`](OkPornParser.md)
- [`PerfectGirlsParser`](PerfectGirlsParser.md)
- [`PexelsParser`](PexelsParser.md)
- [`PimpBunnyParser`](PimpBunnyParser.md)
- [`PinterestParser`](PinterestParser.md)
- [`PixivParser`](PixivParser.md)
- [`Porn300Parser`](Porn300Parser.md)
- [`PornDoeParser`](PornDoeParser.md)
- [`PornHubParser`](PornHubParser.md)
- [`PornIdParser`](PornIdParser.md)
- [`PornOneParser`](PornOneParser.md)
- [`PornSevenParser`](PornSevenParser.md)
- [`PornsOkParser`](PornsOkParser.md)
- [`PussySpaceParser`](PussySpaceParser.md)
- [`RedditParser`](RedditParser.md)
- [`SexVidParser`](SexVidParser.md)
- [`ShamelessParser`](ShamelessParser.md)
- [`SuperPornParser`](SuperPornParser.md)
- [`SxyPornParser`](SxyPornParser.md)
- [`TheyAreHugeParser`](TheyAreHugeParser.md)
- [`TikTokParser`](TikTokParser.md)
- [`TnAFlixParser`](TnAFlixParser.md)
- [`TrashRealityParser`](TrashRealityParser.md)
- [`TubeVSexParser`](TubeVSexParser.md)
- [`TumblrParser`](TumblrParser.md)
- [`TwitterParser`](TwitterParser.md)
- [`UnsplashParser`](UnsplashParser.md)
- [`WallHavenParser`](WallHavenParser.md)
- [`WikiArtParser`](WikiArtParser.md)
- [`WikimediaParser`](WikimediaParser.md)
- [`XCafeParser`](XCafeParser.md)
- [`XDeguParser`](XDeguParser.md)
- [`XGroovyParser`](XGroovyParser.md)
- [`XHamsterParser`](XHamsterParser.md)
- [`XnXXParser`](XnXXParser.md)
- [`XozillaParser`](XozillaParser.md)
- [`XVideosParser`](XVideosParser.md)
- [`ZbPornParser`](ZbPornParser.md)
- [`ZzzTubeParser`](ZzzTubeParser.md)

## Constructors

### Constructor

> **new BaseParser**(): `BaseParser`

#### Returns

`BaseParser`

## Properties

### kvsResolver

> `protected` **kvsResolver**: [`KvsResolver`](KvsResolver.md)

Defined in: [packages/base/BaseParser.ts:16](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L16)

## Methods

### transform()

> **transform**(`html`, `sourceUrl`): `Partial`\<[`DefaultExecutionResult`](../interfaces/DefaultExecutionResult.md)\>

Defined in: [packages/base/BaseParser.ts:25](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L25)

Extracts common metadata from a fetched HTML document.

#### Parameters

##### html

`string`

Raw HTML returned by the HTTP engine.

##### sourceUrl

`string`

Final URL used as the metadata source.

#### Returns

`Partial`\<[`DefaultExecutionResult`](../interfaces/DefaultExecutionResult.md)\>

Common extracted fields used as the base provider result.

***

### extractScriptMethodInput()

> `protected` **extractScriptMethodInput**(`fnName`, `html`): `string` \| `null`

Defined in: [packages/base/BaseParser.ts:54](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L54)

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

***

### getFlashVars()

> `protected` **getFlashVars**(`html`): [`FlashVarsOutput`](../interfaces/FlashVarsOutput.md)

Defined in: [packages/base/BaseParser.ts:66](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L66)

Extracts KVS `flashVars` video metadata from inline scripts.

#### Parameters

##### html

`string`

HTML containing one or more KVS `flashVars` blocks.

#### Returns

[`FlashVarsOutput`](../interfaces/FlashVarsOutput.md)

Normalized KVS fields, video sources, previews, and timelines.

***

### extractElementText()

> `protected` **extractElementText**(`html`, `begin`, `end`, `fallback?`): `string`

Defined in: [packages/base/BaseParser.ts:191](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L191)

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

***

### extractElementTextPair()

> `protected` **extractElementTextPair**(`html`, `begin`, `end`, `pos?`): \[`string` \| `null`, `number`\]

Defined in: [packages/base/BaseParser.ts:200](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L200)

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

***

### extractAllPairs()

> `protected` **extractAllPairs**(`html`, `begin`, `end`): `Generator`\<`string`\>

Defined in: [packages/base/BaseParser.ts:209](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L209)

#### Parameters

##### html

`string`

##### begin

`string`

##### end

`string`

#### Returns

`Generator`\<`string`\>

***

### extractAll()

> `protected` **extractAll**(`html`, `rules`, `startPos?`): \[`Record`\<`string`, `string`\>, `number`\]

Defined in: [packages/base/BaseParser.ts:229](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L229)

#### Parameters

##### html

`string`

##### rules

\[`string`, `string`, `string`\][]

##### startPos?

`number` = `0`

#### Returns

\[`Record`\<`string`, `string`\>, `number`\]

***

### extractAnchors()

> `protected` **extractAnchors**(`html`, `sourceUrl?`): `string`[]

Defined in: [packages/base/BaseParser.ts:244](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L244)

#### Parameters

##### html

`string`

##### sourceUrl?

`string`

#### Returns

`string`[]

***

### extractAnchorTextsByHref()

> `protected` **extractAnchorTextsByHref**(`html`, `hrefPattern`): `string`[]

Defined in: [packages/base/BaseParser.ts:259](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L259)

#### Parameters

##### html

`string`

##### hrefPattern

`RegExp`

#### Returns

`string`[]

***

### extractImageUrls()

> `protected` **extractImageUrls**(`html`, `sourceUrl?`): `string`[]

Defined in: [packages/base/BaseParser.ts:278](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L278)

#### Parameters

##### html

`string`

##### sourceUrl?

`string`

#### Returns

`string`[]

***

### extractSourceUrls()

> `protected` **extractSourceUrls**(`html`, `sourceUrl?`): `string`[]

Defined in: [packages/base/BaseParser.ts:317](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L317)

#### Parameters

##### html

`string`

##### sourceUrl?

`string`

#### Returns

`string`[]

***

### getFlashVarsVideo()

> `protected` **getFlashVarsVideo**(`html`, `sourceUrl`, `uploader?`, `starred?`): [`DefaultFlashVarsVideoOutput`](../interfaces/DefaultFlashVarsVideoOutput.md)

Defined in: [packages/base/BaseParser.ts:334](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L334)

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

***

### collectElements()

> `protected` **collectElements**(`html`, `type`, `className?`): `Record`\<`string`, `string`\>[]

Defined in: [packages/base/BaseParser.ts:357](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L357)

#### Parameters

##### html

`string`

##### type

`string`

##### className?

`string`

#### Returns

`Record`\<`string`, `string`\>[]

***

### extractVideoPosters()

> `protected` **extractVideoPosters**(`html`, `sourceUrl?`): `string`[]

Defined in: [packages/base/BaseParser.ts:378](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L378)

#### Parameters

##### html

`string`

##### sourceUrl?

`string`

#### Returns

`string`[]

***

### extractDivHrefs()

> `protected` **extractDivHrefs**(`html`, `sourceUrl?`): `string`[]

Defined in: [packages/base/BaseParser.ts:395](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L395)

#### Parameters

##### html

`string`

##### sourceUrl?

`string`

#### Returns

`string`[]

***

### extractVideoUrls()

> `protected` **extractVideoUrls**(`html`): `string`[]

Defined in: [packages/base/BaseParser.ts:406](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L406)

#### Parameters

##### html

`string`

#### Returns

`string`[]

***

### extractAllUrls()

> `protected` **extractAllUrls**(`html`): `string`[]

Defined in: [packages/base/BaseParser.ts:416](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L416)

#### Parameters

##### html

`string`

#### Returns

`string`[]

***

### extractLinks()

> `protected` **extractLinks**(`html`): `string`[]

Defined in: [packages/base/BaseParser.ts:420](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L420)

#### Parameters

##### html

`string`

#### Returns

`string`[]

***

### extractMetaDescription()

> `protected` **extractMetaDescription**(`html`): `string`

Defined in: [packages/base/BaseParser.ts:432](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L432)

#### Parameters

##### html

`string`

#### Returns

`string`

***

### extractMetaNameContent()

> `protected` **extractMetaNameContent**(`html`, `value`): `string`

Defined in: [packages/base/BaseParser.ts:440](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L440)

#### Parameters

##### html

`string`

##### value

`string`

#### Returns

`string`

***

### extractMetaPropertyContent()

> `protected` **extractMetaPropertyContent**(`html`, `value`): `string`

Defined in: [packages/base/BaseParser.ts:448](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L448)

#### Parameters

##### html

`string`

##### value

`string`

#### Returns

`string`

***

### collectAnchors()

> `protected` **collectAnchors**(`html`, `options?`): `object`[]

Defined in: [packages/base/BaseParser.ts:456](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L456)

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

***

### extractMetaKeywords()

> `protected` **extractMetaKeywords**(`html`): `string`[]

Defined in: [packages/base/BaseParser.ts:508](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L508)

#### Parameters

##### html

`string`

#### Returns

`string`[]

***

### extractTitle()

> `protected` **extractTitle**(`html`): `string`

Defined in: [packages/base/BaseParser.ts:518](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L518)

#### Parameters

##### html

`string`

#### Returns

`string`

***

### resolveUrl()

> `protected` **resolveUrl**(`raw`, `base?`): `string` \| `null`

Defined in: [packages/base/BaseParser.ts:522](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L522)

#### Parameters

##### raw

`string`

##### base?

`string`

#### Returns

`string` \| `null`

***

### isHttpUrl()

> `protected` **isHttpUrl**(`url?`): `url is string`

Defined in: [packages/base/BaseParser.ts:531](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L531)

#### Parameters

##### url?

`string` \| `null`

#### Returns

`url is string`

***

### decodeHtmlEntities()

> `protected` **decodeHtmlEntities**(`str`): `string`

Defined in: [packages/base/BaseParser.ts:535](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L535)

#### Parameters

##### str

`string`

#### Returns

`string`

***

### extractByTag()

> `protected` **extractByTag**(`html`, `tag`, `options?`): `string`[]

Defined in: [packages/base/BaseParser.ts:546](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L546)

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

***

### extractOneByTag()

> `protected` **extractOneByTag**(`html`, `tag`, `options?`): `string` \| `null`

Defined in: [packages/base/BaseParser.ts:572](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L572)

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

***

### extractScriptsByType()

> `protected` **extractScriptsByType**(`html`, `type`, `objectType?`): `Record`\<`string`, `any`\>[]

Defined in: [packages/base/BaseParser.ts:576](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L576)

#### Parameters

##### html

`string`

##### type

`string`

##### objectType?

`string`

#### Returns

`Record`\<`string`, `any`\>[]

***

### extractByClass()

> `protected` **extractByClass**(`html`, `className`): `string`[]

Defined in: [packages/base/BaseParser.ts:596](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L596)

#### Parameters

##### html

`string`

##### className

`string`

#### Returns

`string`[]

***

### extractAttributes()

> `protected` **extractAttributes**(`html`, `tag`, `attr`): `string`[]

Defined in: [packages/base/BaseParser.ts:610](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L610)

#### Parameters

##### html

`string`

##### tag

`string`

##### attr

`string`

#### Returns

`string`[]

***

### extractSpans()

> `protected` **extractSpans**(`html`, `className?`): `string`[]

Defined in: [packages/base/BaseParser.ts:623](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L623)

#### Parameters

##### html

`string`

##### className?

`string`

#### Returns

`string`[]

***

### extractDivs()

> `protected` **extractDivs**(`html`, `className?`): `string`[]

Defined in: [packages/base/BaseParser.ts:627](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L627)

#### Parameters

##### html

`string`

##### className?

`string`

#### Returns

`string`[]

***

### extractAnchorsContent()

> `protected` **extractAnchorsContent**(`html`, `className?`): `string`[]

Defined in: [packages/base/BaseParser.ts:631](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L631)

#### Parameters

##### html

`string`

##### className?

`string`

#### Returns

`string`[]

***

### extractH2s()

> `protected` **extractH2s**(`html`, `className?`): `string`[]

Defined in: [packages/base/BaseParser.ts:635](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L635)

#### Parameters

##### html

`string`

##### className?

`string`

#### Returns

`string`[]

***

### extractH3s()

> `protected` **extractH3s**(`html`, `className?`): `string`[]

Defined in: [packages/base/BaseParser.ts:639](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L639)

#### Parameters

##### html

`string`

##### className?

`string`

#### Returns

`string`[]

***

### extractLists()

> `protected` **extractLists**(`html`, `className?`): `string`[]

Defined in: [packages/base/BaseParser.ts:643](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L643)

#### Parameters

##### html

`string`

##### className?

`string`

#### Returns

`string`[]

***

### extractBlocks()

> `protected` **extractBlocks**(`html`, `tag`, `className?`): `string`[]

Defined in: [packages/base/BaseParser.ts:647](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L647)

#### Parameters

##### html

`string`

##### tag

`string`

##### className?

`string`

#### Returns

`string`[]

***

### extractKeyValue()

> `protected` **extractKeyValue**(`html`, `keyPattern`, `valuePattern`): `Record`\<`string`, `string`\>

Defined in: [packages/base/BaseParser.ts:655](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L655)

#### Parameters

##### html

`string`

##### keyPattern

`RegExp`

##### valuePattern

`RegExp`

#### Returns

`Record`\<`string`, `string`\>

***

### collectByClassNames()

> `protected` **collectByClassNames**(`html`, `classNames`, `options?`): `any`[]

Defined in: [packages/base/BaseParser.ts:670](https://github.com/meowfans/downflux/blob/aaac94436aefdb28ed855da958dc3ecd1c0ed81d/packages/base/BaseParser.ts#L670)

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
