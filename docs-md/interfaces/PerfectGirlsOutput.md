[**downflux**](../README.md)

***

[downflux](../README.md) / PerfectGirlsOutput

# Interface: PerfectGirlsOutput

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:158](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L158)

Combined PerfectGirls output structure.
Used for broad internal service typing.

## Extends

- [`DefaultExecutionResult`](DefaultExecutionResult.md).[`PerfectGirlsAlbumOutput`](PerfectGirlsAlbumOutput.md).[`PerfectGirlsVideoOutput`](PerfectGirlsVideoOutput.md).[`PerfectGirlsModelOutput`](PerfectGirlsModelOutput.md).[`PerfectGirlsModelVideoIdsOutput`](PerfectGirlsModelVideoIdsOutput.md)

## Properties

### title

> **title**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:228](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L228)

Page title

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`title`](DefaultExecutionResult.md#title)

***

### description

> **description**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:231](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L231)

Page description

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`description`](DefaultExecutionResult.md#description)

***

### keywords

> **keywords**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:234](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L234)

SEO keywords

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`keywords`](DefaultExecutionResult.md#keywords)

***

### status

> **status**: `number`

Defined in: [packages/contracts/ExecutionContracts.ts:237](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L237)

HTTP status code

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`status`](DefaultExecutionResult.md#status)

***

### sourceUrl

> **sourceUrl**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:240](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L240)

Final resolved URL

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`sourceUrl`](DefaultExecutionResult.md#sourceurl)

***

### anchors

> **anchors**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:243](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L243)

Anchor links

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`anchors`](DefaultExecutionResult.md#anchors)

***

### images

> **images**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:246](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L246)

Image URLs

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`images`](DefaultExecutionResult.md#images)

***

### sources

> **sources**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:249](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L249)

Media source URLs

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`sources`](DefaultExecutionResult.md#sources)

***

### videoSources

> **videoSources**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:252](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L252)

Video URLs

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`videoSources`](DefaultExecutionResult.md#videosources)

***

### links

> **links**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:255](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L255)

Hyper links

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`links`](DefaultExecutionResult.md#links)

***

### videoPosters?

> `optional` **videoPosters?**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:258](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L258)

Video poster URLs

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`videoPosters`](DefaultExecutionResult.md#videoposters)

***

### divHREFs?

> `optional` **divHREFs?**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:261](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L261)

URLs extracted from div href attributes

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`divHREFs`](DefaultExecutionResult.md#divhrefs)

***

### allUrls?

> `optional` **allUrls?**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:264](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L264)

All discovered URLs

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`allUrls`](DefaultExecutionResult.md#allurls)

***

### extractionTarget?

> `optional` **extractionTarget?**: [`ExtractionTarget`](../enumerations/ExtractionTarget.md)

Defined in: [packages/contracts/ExecutionContracts.ts:267](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L267)

URL category for pipeline routing

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`extractionTarget`](DefaultExecutionResult.md#extractiontarget)

***

### customFields?

> `optional` **customFields?**: `unknown`

Defined in: [packages/contracts/ExecutionContracts.ts:270](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L270)

Extensible service-specific fields

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`customFields`](DefaultExecutionResult.md#customfields)

***

### tags

> **tags**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:275](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L275)

#### Inherited from

[`PerfectGirlsVideoOutput`](PerfectGirlsVideoOutput.md).[`tags`](PerfectGirlsVideoOutput.md#tags)

***

### pageUrl

> **pageUrl**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:277](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L277)

Model listing page URL

#### Inherited from

[`PerfectGirlsVideoOutput`](PerfectGirlsVideoOutput.md).[`pageUrl`](PerfectGirlsVideoOutput.md#pageurl)

***

### poster

> **poster**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:286](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L286)

#### Inherited from

[`PerfectGirlsVideoOutput`](PerfectGirlsVideoOutput.md).[`poster`](PerfectGirlsVideoOutput.md#poster)

***

### videos

> **videos**: [`VideosFormat`](VideosFormat.md)

Defined in: [packages/contracts/ExecutionContracts.ts:287](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L287)

#### Inherited from

[`PerfectGirlsVideoOutput`](PerfectGirlsVideoOutput.md).[`videos`](PerfectGirlsVideoOutput.md#videos)

***

### modelName

> **modelName**: `string`

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:24](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L24)

Model name associated with the album

#### Inherited from

[`PerfectGirlsAlbumOutput`](PerfectGirlsAlbumOutput.md).[`modelName`](PerfectGirlsAlbumOutput.md#modelname)

***

### starredModels

> **starredModels**: `string`[]

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:27](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L27)

Starred models associated with the album

#### Inherited from

[`PerfectGirlsAlbumOutput`](PerfectGirlsAlbumOutput.md).[`starredModels`](PerfectGirlsAlbumOutput.md#starredmodels)

***

### albumId

> **albumId**: `string`

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:30](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L30)

Album identifier

#### Inherited from

[`PerfectGirlsAlbumOutput`](PerfectGirlsAlbumOutput.md).[`albumId`](PerfectGirlsAlbumOutput.md#albumid)

***

### albumTitle

> **albumTitle**: `string`

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:33](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L33)

Album title

#### Inherited from

[`PerfectGirlsAlbumOutput`](PerfectGirlsAlbumOutput.md).[`albumTitle`](PerfectGirlsAlbumOutput.md#albumtitle)

***

### albumDescription

> **albumDescription**: `string`

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:36](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L36)

Album description

#### Inherited from

[`PerfectGirlsAlbumOutput`](PerfectGirlsAlbumOutput.md).[`albumDescription`](PerfectGirlsAlbumOutput.md#albumdescription)

***

### albumKeywords

> **albumKeywords**: `string`[]

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:39](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L39)

Album keywords

#### Inherited from

[`PerfectGirlsAlbumOutput`](PerfectGirlsAlbumOutput.md).[`albumKeywords`](PerfectGirlsAlbumOutput.md#albumkeywords)

***

### albumUrl

> **albumUrl**: `string`

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:42](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L42)

Album page URL

#### Inherited from

[`PerfectGirlsAlbumOutput`](PerfectGirlsAlbumOutput.md).[`albumUrl`](PerfectGirlsAlbumOutput.md#albumurl)

***

### albumThumbnail

> **albumThumbnail**: `string`

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:45](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L45)

Album thumbnail URL

#### Inherited from

[`PerfectGirlsAlbumOutput`](PerfectGirlsAlbumOutput.md).[`albumThumbnail`](PerfectGirlsAlbumOutput.md#albumthumbnail)

***

### albumImages

> **albumImages**: `string`[]

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:48](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L48)

Album image URLs

#### Inherited from

[`PerfectGirlsAlbumOutput`](PerfectGirlsAlbumOutput.md).[`albumImages`](PerfectGirlsAlbumOutput.md#albumimages)

***

### albumImageCount

> **albumImageCount**: `number`

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:51](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L51)

Album image count

#### Inherited from

[`PerfectGirlsAlbumOutput`](PerfectGirlsAlbumOutput.md).[`albumImageCount`](PerfectGirlsAlbumOutput.md#albumimagecount)

***

### videoId

> **videoId**: `string`

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:60](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L60)

Video identifier

#### Inherited from

[`PerfectGirlsVideoOutput`](PerfectGirlsVideoOutput.md).[`videoId`](PerfectGirlsVideoOutput.md#videoid)

***

### videoScreenshot

> **videoScreenshot**: `string`

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:63](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L63)

Screenshot image URL

#### Inherited from

[`PerfectGirlsVideoOutput`](PerfectGirlsVideoOutput.md).[`videoScreenshot`](PerfectGirlsVideoOutput.md#videoscreenshot)

***

### videoCreatedAt?

> `optional` **videoCreatedAt?**: `string`

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:66](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L66)

Video creation date text

#### Inherited from

[`PerfectGirlsVideoOutput`](PerfectGirlsVideoOutput.md).[`videoCreatedAt`](PerfectGirlsVideoOutput.md#videocreatedat)

***

### author

> **author**: `string`

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:69](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L69)

Author name associated with the video

#### Inherited from

[`PerfectGirlsVideoOutput`](PerfectGirlsVideoOutput.md).[`author`](PerfectGirlsVideoOutput.md#author)

***

### fullVideoSource?

> `optional` **fullVideoSource?**: `string`

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:72](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L72)

Full source URL when available

#### Inherited from

[`PerfectGirlsVideoOutput`](PerfectGirlsVideoOutput.md).[`fullVideoSource`](PerfectGirlsVideoOutput.md#fullvideosource)

***

### videoAlbumId?

> `optional` **videoAlbumId?**: `string`

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:75](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L75)

Album identifier linked to the video

#### Inherited from

[`PerfectGirlsVideoOutput`](PerfectGirlsVideoOutput.md).[`videoAlbumId`](PerfectGirlsVideoOutput.md#videoalbumid)

***

### videoAlbum?

> `optional` **videoAlbum?**: [`PerfectGirlsAlbumOutput`](PerfectGirlsAlbumOutput.md)

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:78](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L78)

Album metadata linked to the video

#### Inherited from

[`PerfectGirlsVideoOutput`](PerfectGirlsVideoOutput.md).[`videoAlbum`](PerfectGirlsVideoOutput.md#videoalbum)

***

### starredBy

> **starredBy**: `string`[]

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:81](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L81)

Starred by list

#### Inherited from

[`PerfectGirlsVideoOutput`](PerfectGirlsVideoOutput.md).[`starredBy`](PerfectGirlsVideoOutput.md#starredby)

***

### videoCount

> **videoCount**: `number`

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:128](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L128)

Number of video cards found

#### Inherited from

[`PerfectGirlsModelVideoIdsOutput`](PerfectGirlsModelVideoIdsOutput.md).[`videoCount`](PerfectGirlsModelVideoIdsOutput.md#videocount)

***

### videoCards

> **videoCards**: [`PerfectGirlsModelVideoCard`](PerfectGirlsModelVideoCard.md)[]

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:134](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L134)

Video cards found on the page

#### Inherited from

[`PerfectGirlsModelVideoIdsOutput`](PerfectGirlsModelVideoIdsOutput.md).[`videoCards`](PerfectGirlsModelVideoIdsOutput.md#videocards)

***

### pageTitle

> **pageTitle**: `string`

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:142](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L142)

Model listing page title

#### Inherited from

[`PerfectGirlsModelOutput`](PerfectGirlsModelOutput.md).[`pageTitle`](PerfectGirlsModelOutput.md#pagetitle)

***

### modelUrls

> **modelUrls**: `string`[]

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:148](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L148)

Model URLs or path values

#### Inherited from

[`PerfectGirlsModelOutput`](PerfectGirlsModelOutput.md).[`modelUrls`](PerfectGirlsModelOutput.md#modelurls)

***

### modelCount

> **modelCount**: `number`

Defined in: [packages/providers/perfectgirls/PerfectGirlsContracts.ts:151](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/perfectgirls/PerfectGirlsContracts.ts#L151)

Number of models found

#### Inherited from

[`PerfectGirlsModelOutput`](PerfectGirlsModelOutput.md).[`modelCount`](PerfectGirlsModelOutput.md#modelcount)
