[**downflux**](../README.md)

***

[downflux](../README.md) / PornsOkOutput

# Interface: PornsOkOutput

Defined in: [packages/providers/pornsok/PornsOkContracts.ts:14](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/pornsok/PornsOkContracts.ts#L14)

Default output structure for extractor operations.
Represents normalized metadata and extracted resources.

## Extends

- [`DefaultExecutionResult`](DefaultExecutionResult.md).[`PornsOkVideoOutput`](PornsOkVideoOutput.md)

## Properties

### title

> **title**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:211](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L211)

Page title

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`title`](DefaultExecutionResult.md#title)

***

### description

> **description**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:214](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L214)

Page description

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`description`](DefaultExecutionResult.md#description)

***

### keywords

> **keywords**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:217](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L217)

SEO keywords

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`keywords`](DefaultExecutionResult.md#keywords)

***

### status

> **status**: `number`

Defined in: [packages/contracts/ExecutionContracts.ts:220](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L220)

HTTP status code

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`status`](DefaultExecutionResult.md#status)

***

### sourceUrl

> **sourceUrl**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:223](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L223)

Final resolved URL

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`sourceUrl`](DefaultExecutionResult.md#sourceurl)

***

### anchors

> **anchors**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:226](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L226)

Anchor links

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`anchors`](DefaultExecutionResult.md#anchors)

***

### images

> **images**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:229](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L229)

Image URLs

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`images`](DefaultExecutionResult.md#images)

***

### sources

> **sources**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:232](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L232)

Media source URLs

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`sources`](DefaultExecutionResult.md#sources)

***

### videoSources

> **videoSources**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:235](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L235)

Video URLs

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`videoSources`](DefaultExecutionResult.md#videosources)

***

### links

> **links**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:238](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L238)

Hyper links

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`links`](DefaultExecutionResult.md#links)

***

### videoPosters?

> `optional` **videoPosters?**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:241](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L241)

Video poster URLs

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`videoPosters`](DefaultExecutionResult.md#videoposters)

***

### divHREFs?

> `optional` **divHREFs?**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:244](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L244)

URLs extracted from div href attributes

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`divHREFs`](DefaultExecutionResult.md#divhrefs)

***

### allUrls?

> `optional` **allUrls?**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:247](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L247)

All discovered URLs

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`allUrls`](DefaultExecutionResult.md#allurls)

***

### extractionTarget?

> `optional` **extractionTarget?**: [`ExtractionTarget`](../enumerations/ExtractionTarget.md)

Defined in: [packages/contracts/ExecutionContracts.ts:250](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L250)

URL category for pipeline routing

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`extractionTarget`](DefaultExecutionResult.md#extractiontarget)

***

### customFields?

> `optional` **customFields?**: `unknown`

Defined in: [packages/contracts/ExecutionContracts.ts:253](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L253)

Extensible service-specific fields

#### Inherited from

[`DefaultExecutionResult`](DefaultExecutionResult.md).[`customFields`](DefaultExecutionResult.md#customfields)

***

### tags

> **tags**: `string`[]

Defined in: [packages/contracts/ExecutionContracts.ts:258](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L258)

#### Inherited from

[`PornsOkVideoOutput`](PornsOkVideoOutput.md).[`tags`](PornsOkVideoOutput.md#tags)

***

### pageUrl

> **pageUrl**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:260](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L260)

#### Inherited from

[`PornsOkVideoOutput`](PornsOkVideoOutput.md).[`pageUrl`](PornsOkVideoOutput.md#pageurl)

***

### poster

> **poster**: `string`

Defined in: [packages/contracts/ExecutionContracts.ts:269](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L269)

#### Inherited from

[`PornsOkVideoOutput`](PornsOkVideoOutput.md).[`poster`](PornsOkVideoOutput.md#poster)

***

### videos

> **videos**: [`VideosFormat`](VideosFormat.md)

Defined in: [packages/contracts/ExecutionContracts.ts:270](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/contracts/ExecutionContracts.ts#L270)

#### Inherited from

[`PornsOkVideoOutput`](PornsOkVideoOutput.md).[`videos`](PornsOkVideoOutput.md#videos)

***

### duration

> **duration**: `number`

Defined in: [packages/providers/pornsok/PornsOkContracts.ts:6](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/pornsok/PornsOkContracts.ts#L6)

#### Inherited from

[`PornsOkVideoOutput`](PornsOkVideoOutput.md).[`duration`](PornsOkVideoOutput.md#duration)

***

### uploadedAt

> **uploadedAt**: `string`

Defined in: [packages/providers/pornsok/PornsOkContracts.ts:7](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/pornsok/PornsOkContracts.ts#L7)

#### Inherited from

[`PornsOkVideoOutput`](PornsOkVideoOutput.md).[`uploadedAt`](PornsOkVideoOutput.md#uploadedat)

***

### totalViews

> **totalViews**: `number`

Defined in: [packages/providers/pornsok/PornsOkContracts.ts:8](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/pornsok/PornsOkContracts.ts#L8)

#### Inherited from

[`PornsOkVideoOutput`](PornsOkVideoOutput.md).[`totalViews`](PornsOkVideoOutput.md#totalviews)

***

### type

> **type**: `string`

Defined in: [packages/providers/pornsok/PornsOkContracts.ts:9](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/pornsok/PornsOkContracts.ts#L9)

#### Inherited from

[`PornsOkVideoOutput`](PornsOkVideoOutput.md).[`type`](PornsOkVideoOutput.md#type)

***

### starredBy?

> `optional` **starredBy?**: `string`[]

Defined in: [packages/providers/pornsok/PornsOkContracts.ts:10](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/pornsok/PornsOkContracts.ts#L10)

#### Inherited from

[`PornsOkVideoOutput`](PornsOkVideoOutput.md).[`starredBy`](PornsOkVideoOutput.md#starredby)

***

### categories?

> `optional` **categories?**: `string`[]

Defined in: [packages/providers/pornsok/PornsOkContracts.ts:11](https://github.com/cloudgrids/downflux/blob/1f8790287a3ea22feb0e5a1f559d29d445cd9a44/packages/providers/pornsok/PornsOkContracts.ts#L11)

#### Inherited from

[`PornsOkVideoOutput`](PornsOkVideoOutput.md).[`categories`](PornsOkVideoOutput.md#categories)
