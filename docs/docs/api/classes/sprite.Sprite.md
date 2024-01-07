---
id: "sprite.Sprite"
title: "Class: Sprite"
sidebar_label: "Sprite"
custom_edit_url: null
---

[sprite](../modules/sprite.md).Sprite

## Hierarchy

- **`Sprite`**

  ↳ [`SensorLine`](sensorLine.SensorLine.md)

  ↳ [`ImageSprite`](sprite.ImageSprite.md)

## Properties

### element

• **element**: `HTMLElement`

#### Defined in

[lib/sprite/index.ts:10](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L10)

___

### hookManager

• **hookManager**: `HookManager`

#### Defined in

[lib/sprite/index.ts:14](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L14)

___

### id

• `Optional` **id**: `string`

#### Defined in

[lib/sprite/index.ts:17](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L17)

___

### position

• **position**: `Position`

#### Defined in

[lib/sprite/index.ts:19](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L19)

___

### pubsub

• **pubsub**: [`PubSub`](pubsub.PubSub.md)\<[``"move"``]\>

#### Defined in

[lib/sprite/index.ts:13](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L13)

___

### stadium

• `Optional` **stadium**: [`Stadium`](stadium.Stadium.md)

#### Defined in

[lib/sprite/index.ts:16](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L16)

___

### tags

• **tags**: `string`[] = `[]`

#### Defined in

[lib/sprite/index.ts:11](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L11)

## Accessors

### mounted

• `get` **mounted**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/sprite/index.ts:46](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L46)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[lib/sprite/index.ts:38](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L38)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Defined in

[lib/sprite/index.ts:50](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L50)

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

#### Defined in

[lib/sprite/index.ts:23](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L23)

___

### toJSON

▸ **toJSON**(): [`Sprite`](sprite.Sprite.md) & \{ `type`: `string`  }

#### Returns

[`Sprite`](sprite.Sprite.md) & \{ `type`: `string`  }

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

#### Defined in

[lib/sprite/index.ts:42](https://github.com/rycont/stadium/blob/eca21ca/lib/sprite/index.ts#L42)
