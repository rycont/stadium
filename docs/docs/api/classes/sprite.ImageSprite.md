---
id: "sprite.ImageSprite"
title: "Class: ImageSprite"
sidebar_label: "ImageSprite"
custom_edit_url: null
---

[sprite](../modules/sprite.md).ImageSprite

## Hierarchy

- [`Sprite`](sprite.Sprite.md)

  ↳ **`ImageSprite`**

## Properties

### element

• **element**: `HTMLImageElement`

#### Overrides

[Sprite](sprite.Sprite.md).[element](sprite.Sprite.md#element)

#### Defined in

[lib/sprite/index.ts:54](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L54)

___

### height

• **height**: `number`

#### Defined in

[lib/sprite/index.ts:60](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L60)

___

### hookManager

• **hookManager**: `HookManager`

#### Inherited from

[Sprite](sprite.Sprite.md).[hookManager](sprite.Sprite.md#hookmanager)

#### Defined in

[lib/sprite/index.ts:14](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L14)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[Sprite](sprite.Sprite.md).[id](sprite.Sprite.md#id)

#### Defined in

[lib/sprite/index.ts:17](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L17)

___

### position

• **position**: `Position`

#### Inherited from

[Sprite](sprite.Sprite.md).[position](sprite.Sprite.md#position)

#### Defined in

[lib/sprite/index.ts:19](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L19)

___

### pubsub

• **pubsub**: [`PubSub`](pubsub.PubSub.md)\<[``"move"``]\>

#### Inherited from

[Sprite](sprite.Sprite.md).[pubsub](sprite.Sprite.md#pubsub)

#### Defined in

[lib/sprite/index.ts:13](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L13)

___

### stadium

• `Optional` **stadium**: [`Stadium`](stadium.Stadium.md)

#### Inherited from

[Sprite](sprite.Sprite.md).[stadium](sprite.Sprite.md#stadium)

#### Defined in

[lib/sprite/index.ts:16](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L16)

___

### tags

• **tags**: `string`[] = `[]`

#### Inherited from

[Sprite](sprite.Sprite.md).[tags](sprite.Sprite.md#tags)

#### Defined in

[lib/sprite/index.ts:11](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L11)

___

### width

• **width**: `number`

#### Defined in

[lib/sprite/index.ts:59](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L59)

## Accessors

### image

• `get` **image**(): `string`

#### Returns

`string`

#### Defined in

[lib/sprite/index.ts:80](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L80)

• `set` **image**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[lib/sprite/index.ts:84](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L84)

___

### mounted

• `get` **mounted**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Sprite.mounted

#### Defined in

[lib/sprite/index.ts:46](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L46)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[Sprite](sprite.Sprite.md).[destroy](sprite.Sprite.md#destroy)

#### Defined in

[lib/sprite/index.ts:38](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L38)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Overrides

[Sprite](sprite.Sprite.md).[draw](sprite.Sprite.md#draw)

#### Defined in

[lib/sprite/index.ts:70](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L70)

___

### onMount

▸ **onMount**(`stadium`, `id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stadium` | [`Stadium`](stadium.Stadium.md) |
| `id` | `string` |

#### Returns

`void`

#### Inherited from

[Sprite](sprite.Sprite.md).[onMount](sprite.Sprite.md#onmount)

#### Defined in

[lib/sprite/index.ts:23](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L23)

___

### toJSON

▸ **toJSON**(): [`ImageSprite`](sprite.ImageSprite.md) & \{ `type`: `string`  }

#### Returns

[`ImageSprite`](sprite.ImageSprite.md) & \{ `type`: `string`  }

#### Inherited from

[Sprite](sprite.Sprite.md).[toJSON](sprite.Sprite.md#tojson)

#### Defined in

[lib/sprite/index.ts:31](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L31)

___

### use

▸ **use**(`hooks`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hooks` | [`Hook`](main.Hook.md)[] |

#### Returns

`void`

#### Inherited from

[Sprite](sprite.Sprite.md).[use](sprite.Sprite.md#use)

#### Defined in

[lib/sprite/index.ts:42](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L42)
