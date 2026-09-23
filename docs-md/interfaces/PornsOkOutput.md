[**downflux**](../README.md)

***

[downflux](../README.md) / PornsOkOutput

# Interface: PornsOkOutput

Defined in: [packages/providers/pornsok/PornsOkContracts.ts:14](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/pornsok/PornsOkContracts.ts#L14)

Default output structure for extractor operations.
Represents normalized metadata and extracted resources.

## Extends

- [`DefaultExecutionResult`](DefaultExecutionResult.md).[`PornsOkVideoOutput`](PornsOkVideoOutput.md)

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

[`PornsOkVideoOutput`](PornsOkVideoOutput.md).[`tags`](PornsOkVideoOutput.md#tags)

***

### pageUrl

> **pageUrl**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:277](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L277)

#### Inherited from

[`PornsOkVideoOutput`](PornsOkVideoOutput.md).[`pageUrl`](PornsOkVideoOutput.md#pageurl)

***

### poster

> **poster**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:286](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L286)

#### Inherited from

[`PornsOkVideoOutput`](PornsOkVideoOutput.md).[`poster`](PornsOkVideoOutput.md#poster)

***

### videos

> **videos**: [`VideosFormat`](VideosFormat.md)

Defined in: [packages/contracts/ExecutionContracts.ts:287](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L287)

#### Inherited from

[`PornsOkVideoOutput`](PornsOkVideoOutput.md).[`videos`](PornsOkVideoOutput.md#videos)

***

### duration

> **duration**: `number`

Defined in: [packages/providers/pornsok/PornsOkContracts.ts:6](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/pornsok/PornsOkContracts.ts#L6)

#### Inherited from

[`PornsOkVideoOutput`](PornsOkVideoOutput.md).[`duration`](PornsOkVideoOutput.md#duration)

***

### uploadedAt

> **uploadedAt**: `string`

Defined in: [packages/providers/pornsok/PornsOkContracts.ts:7](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/pornsok/PornsOkContracts.ts#L7)

#### Inherited from

[`PornsOkVideoOutput`](PornsOkVideoOutput.md).[`uploadedAt`](PornsOkVideoOutput.md#uploadedat)

***

### totalViews

> **totalViews**: `number`

Defined in: [packages/providers/pornsok/PornsOkContracts.ts:8](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/pornsok/PornsOkContracts.ts#L8)

#### Inherited from

[`PornsOkVideoOutput`](PornsOkVideoOutput.md).[`totalViews`](PornsOkVideoOutput.md#totalviews)

***

### type

> **type**: `string`

Defined in: [packages/providers/pornsok/PornsOkContracts.ts:9](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/pornsok/PornsOkContracts.ts#L9)

#### Inherited from

[`PornsOkVideoOutput`](PornsOkVideoOutput.md).[`type`](PornsOkVideoOutput.md#type)

***

### starredBy?

> `optional` **starredBy?**: `string`[]

Defined in: [packages/providers/pornsok/PornsOkContracts.ts:10](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/pornsok/PornsOkContracts.ts#L10)

#### Inherited from

[`PornsOkVideoOutput`](PornsOkVideoOutput.md).[`starredBy`](PornsOkVideoOutput.md#starredby)

***

### categories?

> `optional` **categories?**: `string`[]

Defined in: [packages/providers/pornsok/PornsOkContracts.ts:11](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/pornsok/PornsOkContracts.ts#L11)

#### Inherited from

[`PornsOkVideoOutput`](PornsOkVideoOutput.md).[`categories`](PornsOkVideoOutput.md#categories)
