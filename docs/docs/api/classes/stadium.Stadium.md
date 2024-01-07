---
id: "stadium.Stadium"
title: "Class: Stadium"
sidebar_label: "Stadium"
custom_edit_url: null
---

[stadium](../modules/stadium.md).Stadium

## Constructors

### constructor

• **new Stadium**(`element`, `designedSize`, `actualSize?`): [`Stadium`](stadium.Stadium.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `element` | `HTMLDivElement` | `undefined` |
| `designedSize` | `Size` | `undefined` |
| `actualSize` | `Size` | `designedSize` |

#### Returns

[`Stadium`](stadium.Stadium.md)

#### Defined in

[lib/stadium/index.ts:16](https://github.com/rycont/stadium/blob/85a354b/lib/stadium/index.ts#L16)

## Properties

### element

• **element**: `HTMLDivElement`

#### Defined in

[lib/stadium/index.ts:17](https://github.com/rycont/stadium/blob/85a354b/lib/stadium/index.ts#L17)

___

### pubsub

• **pubsub**: [`PubSub`](pubsub.PubSub.md)\<readonly [``"spriteMove"``]\>

#### Defined in

[lib/stadium/index.ts:14](https://github.com/rycont/stadium/blob/85a354b/lib/stadium/index.ts#L14)

___

### sprites

• **sprites**: [`Sprite`](sprite.Sprite.md)[] = `[]`

#### Defined in

[lib/stadium/index.ts:13](https://github.com/rycont/stadium/blob/85a354b/lib/stadium/index.ts#L13)

## Methods

### addSprite

▸ **addSprite**(`sprite`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sprite` | [`Sprite`](sprite.Sprite.md) |

#### Returns

`void`

#### Defined in

[lib/stadium/index.ts:38](https://github.com/rycont/stadium/blob/85a354b/lib/stadium/index.ts#L38)
