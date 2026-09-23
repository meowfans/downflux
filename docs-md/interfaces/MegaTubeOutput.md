[**downflux**](../README.md)

***

[downflux](../README.md) / MegaTubeOutput

# Interface: MegaTubeOutput

Defined in: [packages/providers/megatube/MegaTubeContracts.ts:4](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/providers/megatube/MegaTubeContracts.ts#L4)

Default output structure for extractor operations.
Represents normalized metadata and extracted resources.

## Extends

- [`DefaultExecutionResult`](DefaultExecutionResult.md).[`MegaTubeVideoOutput`](MegaTubeVideoOutput.md)

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

[`MegaTubeVideoOutput`](MegaTubeVideoOutput.md).[`tags`](MegaTubeVideoOutput.md#tags)

***

### pageUrl

> **pageUrl**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:277](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L277)

#### Inherited from

[`MegaTubeVideoOutput`](MegaTubeVideoOutput.md).[`pageUrl`](MegaTubeVideoOutput.md#pageurl)

***

### poster

> **poster**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:286](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L286)

#### Inherited from

[`MegaTubeVideoOutput`](MegaTubeVideoOutput.md).[`poster`](MegaTubeVideoOutput.md#poster)

***

### videos

> **videos**: [`VideosFormat`](VideosFormat.md)

Defined in: [packages/contracts/ExecutionContracts.ts:287](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L287)

#### Inherited from

[`MegaTubeVideoOutput`](MegaTubeVideoOutput.md).[`videos`](MegaTubeVideoOutput.md#videos)

***

### videoId

> **videoId**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:291](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L291)

#### Inherited from

[`MegaTubeVideoOutput`](MegaTubeVideoOutput.md).[`videoId`](MegaTubeVideoOutput.md#videoid)

***

### previews

> **previews**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:292](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L292)

#### Inherited from

[`MegaTubeVideoOutput`](MegaTubeVideoOutput.md).[`previews`](MegaTubeVideoOutput.md#previews)

***

### timelineScreenCount?

> `optional` **timelineScreenCount?**: `number`

Defined in: [packages/contracts/ExecutionContracts.ts:293](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L293)

#### Inherited from

[`MegaTubeVideoOutput`](MegaTubeVideoOutput.md).[`timelineScreenCount`](MegaTubeVideoOutput.md#timelinescreencount)

***

### timelineScreens?

> `optional` **timelineScreens?**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:294](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L294)

#### Inherited from

[`MegaTubeVideoOutput`](MegaTubeVideoOutput.md).[`timelineScreens`](MegaTubeVideoOutput.md#timelinescreens)

***

### starred?

> `optional` **starred?**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:295](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L295)

#### Inherited from

[`MegaTubeVideoOutput`](MegaTubeVideoOutput.md).[`starred`](MegaTubeVideoOutput.md#starred)

***

### uploader?

> `optional` **uploader?**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:296](https://github.com/meowfans/downflux/blob/26aad8b9c69f57a48960887a5c1cf136b2a3204f/packages/contracts/ExecutionContracts.ts#L296)

#### Inherited from

[`MegaTubeVideoOutput`](MegaTubeVideoOutput.md).[`uploader`](MegaTubeVideoOutput.md#uploader)
