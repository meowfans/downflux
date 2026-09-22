[**downflux**](../README.md)

***

[downflux](../README.md) / DefaultExecutionResult

# Interface: DefaultExecutionResult\<TCustomFields\>

Defined in: [packages/contracts/ExecutionContracts.ts:209](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L209)

Default output structure for extractor operations.
Represents normalized metadata and extracted resources.

## Extended by

- [`AnalRzOutput`](AnalRzOutput.md)
- [`ArtStationOutput`](ArtStationOutput.md)
- [`BeegOutput`](BeegOutput.md)
- [`BehanceOutput`](BehanceOutput.md)
- [`BlackPornOutput`](BlackPornOutput.md)
- [`BlueskyOutput`](BlueskyOutput.md)
- [`BoKepPornOutput`](BoKepPornOutput.md)
- [`ColliderPornOutput`](ColliderPornOutput.md)
- [`CumLouderOutput`](CumLouderOutput.md)
- [`DaFreePornOutput`](DaFreePornOutput.md)
- [`DanbooruOutput`](DanbooruOutput.md)
- [`DaNudeOutput`](DaNudeOutput.md)
- [`DeviantArtOutput`](DeviantArtOutput.md)
- [`EpicGfsOutput`](EpicGfsOutput.md)
- [`EPornerOutput`](EPornerOutput.md)
- [`FlickrOutput`](FlickrOutput.md)
- [`GelbooruOutput`](GelbooruOutput.md)
- [`HqPornOutput`](HqPornOutput.md)
- [`ImgurOutput`](ImgurOutput.md)
- [`InstagramOutput`](InstagramOutput.md)
- [`InterracialOutput`](InterracialOutput.md)
- [`ItsPornOutput`](ItsPornOutput.md)
- [`Lesbian8Output`](Lesbian8Output.md)
- [`MangaDexOutput`](MangaDexOutput.md)
- [`MastodonOutput`](MastodonOutput.md)
- [`MegaTubeOutput`](MegaTubeOutput.md)
- [`MomVidsOutput`](MomVidsOutput.md)
- [`MyLustOutput`](MyLustOutput.md)
- [`NewgroundsOutput`](NewgroundsOutput.md)
- [`OkPornOutput`](OkPornOutput.md)
- [`PerfectGirlsOutput`](PerfectGirlsOutput.md)
- [`PexelsOutput`](PexelsOutput.md)
- [`PinterestOutput`](PinterestOutput.md)
- [`PixivOutput`](PixivOutput.md)
- [`Porn300Output`](Porn300Output.md)
- [`PornDoeOutput`](PornDoeOutput.md)
- [`PornIdOutput`](PornIdOutput.md)
- [`PornOneOutput`](PornOneOutput.md)
- [`PornSevenOutput`](PornSevenOutput.md)
- [`PornsOkOutput`](PornsOkOutput.md)
- [`PussySpaceOutput`](PussySpaceOutput.md)
- [`RedditOutput`](RedditOutput.md)
- [`SexVidOutput`](SexVidOutput.md)
- [`ShamelessOutput`](ShamelessOutput.md)
- [`SuperPornOutput`](SuperPornOutput.md)
- [`SxyPornOutput`](SxyPornOutput.md)
- [`TheyAreHugeOutput`](TheyAreHugeOutput.md)
- [`TikTokOutput`](TikTokOutput.md)
- [`TnAFlixOutput`](TnAFlixOutput.md)
- [`TubeVSexOutput`](TubeVSexOutput.md)
- [`TumblrOutput`](TumblrOutput.md)
- [`TwitterOutput`](TwitterOutput.md)
- [`UnsplashOutput`](UnsplashOutput.md)
- [`WikiArtOutput`](WikiArtOutput.md)
- [`WikimediaOutput`](WikimediaOutput.md)
- [`XCafeOutput`](XCafeOutput.md)
- [`XDeguOutput`](XDeguOutput.md)
- [`XGroovyOutput`](XGroovyOutput.md)
- [`XHamsterOutput`](XHamsterOutput.md)
- [`XnXXOutput`](XnXXOutput.md)
- [`XozillaOutput`](XozillaOutput.md)
- [`XVideosOutput`](XVideosOutput.md)
- [`ZbPornOutput`](ZbPornOutput.md)
- [`ZzzTubeOutput`](ZzzTubeOutput.md)

## Type Parameters

### TCustomFields

`TCustomFields` = `unknown`

## Properties

### title

> **title**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:211](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L211)

Page title

***

### description

> **description**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:214](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L214)

Page description

***

### keywords

> **keywords**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:217](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L217)

SEO keywords

***

### status

> **status**: `number`

Defined in: [packages/contracts/ExecutionContracts.ts:220](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L220)

HTTP status code

***

### sourceUrl

> **sourceUrl**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:223](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L223)

Final resolved URL

***

### anchors

> **anchors**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:226](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L226)

Anchor links

***

### images

> **images**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:229](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L229)

Image URLs

***

### sources

> **sources**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:232](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L232)

Media source URLs

***

### videoSources

> **videoSources**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:235](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L235)

Video URLs

***

### links

> **links**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:238](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L238)

Hyper links

***

### videoPosters?

> `optional` **videoPosters?**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:241](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L241)

Video poster URLs

***

### divHREFs?

> `optional` **divHREFs?**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:244](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L244)

URLs extracted from div href attributes

***

### allUrls?

> `optional` **allUrls?**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:247](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L247)

All discovered URLs

***

### extractionTarget?

> `optional` **extractionTarget?**: [`ExtractionTarget`](../enumerations/ExtractionTarget.md)

Defined in: [packages/contracts/ExecutionContracts.ts:250](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L250)

URL category for pipeline routing

***

### customFields?

> `optional` **customFields?**: `TCustomFields`

Defined in: [packages/contracts/ExecutionContracts.ts:253](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L253)

Extensible service-specific fields
