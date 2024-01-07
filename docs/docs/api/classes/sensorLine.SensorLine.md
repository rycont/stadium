---
id: "sensorLine.SensorLine"
title: "Class: SensorLine"
sidebar_label: "SensorLine"
custom_edit_url: null
---

[sensorLine](../modules/sensorLine.md).SensorLine

## Hierarchy

- [`Sprite`](sprite.Sprite.md)

  ↳ **`SensorLine`**

## Implements

- [`Line`](../modules/sensorLine.md#line)

## Constructors

### constructor

• **new SensorLine**(`p1`, `p2`): [`SensorLine`](sensorLine.SensorLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `Object` |
| `p1.left` | `number` |
| `p1.top` | `number` |
| `p2` | `Object` |
| `p2.left` | `number` |
| `p2.top` | `number` |

#### Returns

[`SensorLine`](sensorLine.SensorLine.md)

#### Overrides

[Sprite](sprite.Sprite.md).[constructor](sprite.Sprite.md#constructor)

#### Defined in

[lib/sensorLine/index.ts:19](https://github.com/rycont/stadium/blob/85a354b/lib/sensorLine/index.ts#L19)

## Properties

### element

• **element**: `HTMLDivElement`

#### Overrides

[Sprite](sprite.Sprite.md).[element](sprite.Sprite.md#element)

#### Defined in

[lib/sensorLine/index.ts:16](https://github.com/rycont/stadium/blob/85a354b/lib/sensorLine/index.ts#L16)

___

### hookManager

• **hookManager**: `HookManager`

#### Inherited from

[Sprite](sprite.Sprite.md).[hookManager](sprite.Sprite.md#hookmanager)

#### Defined in

[lib/sprite/index.ts:14](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L14)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[Sprite](sprite.Sprite.md).[id](sprite.Sprite.md#id)

#### Defined in

[lib/sprite/index.ts:17](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L17)

___

### p1

• **p1**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `top` | `number` |

#### Implementation of

Line.p1

#### Defined in

[lib/sensorLine/index.ts:19](https://github.com/rycont/stadium/blob/85a354b/lib/sensorLine/index.ts#L19)

___

### p2

• **p2**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `top` | `number` |

#### Implementation of

Line.p2

#### Defined in

[lib/sensorLine/index.ts:19](https://github.com/rycont/stadium/blob/85a354b/lib/sensorLine/index.ts#L19)

___

### position

• **position**: `Position`

#### Inherited from

[Sprite](sprite.Sprite.md).[position](sprite.Sprite.md#position)

#### Defined in

[lib/sprite/index.ts:19](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L19)

___

### pubsub

• **pubsub**: [`PubSub`](pubsub.PubSub.md)\<readonly [``"move"``]\>

#### Inherited from

[Sprite](sprite.Sprite.md).[pubsub](sprite.Sprite.md#pubsub)

#### Defined in

[lib/sprite/index.ts:13](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L13)

___

### stadium

• `Optional` **stadium**: [`Stadium`](stadium.Stadium.md)

#### Inherited from

[Sprite](sprite.Sprite.md).[stadium](sprite.Sprite.md#stadium)

#### Defined in

[lib/sprite/index.ts:16](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L16)

___

### tags

• **tags**: `string`[]

#### Overrides

[Sprite](sprite.Sprite.md).[tags](sprite.Sprite.md#tags)

#### Defined in

[lib/sensorLine/index.ts:17](https://github.com/rycont/stadium/blob/85a354b/lib/sensorLine/index.ts#L17)

___

### TAG

▪ `Static` **TAG**: `string` = `"sensorLine"`

#### Defined in

[lib/sensorLine/index.ts:14](https://github.com/rycont/stadium/blob/85a354b/lib/sensorLine/index.ts#L14)

## Accessors

### mounted

• `get` **mounted**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Sprite.mounted

#### Defined in

[lib/sprite/index.ts:46](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L46)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[Sprite](sprite.Sprite.md).[destroy](sprite.Sprite.md#destroy)

#### Defined in

[lib/sprite/index.ts:38](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L38)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Overrides

[Sprite](sprite.Sprite.md).[draw](sprite.Sprite.md#draw)

#### Defined in

[lib/sensorLine/index.ts:24](https://github.com/rycont/stadium/blob/85a354b/lib/sensorLine/index.ts#L24)

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

[lib/sprite/index.ts:23](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L23)

___

### toJSON

▸ **toJSON**(): [`SensorLine`](sensorLine.SensorLine.md) & \{ `type`: `string`  }

#### Returns

[`SensorLine`](sensorLine.SensorLine.md) & \{ `type`: `string`  }

#### Inherited from

[Sprite](sprite.Sprite.md).[toJSON](sprite.Sprite.md#tojson)

#### Defined in

[lib/sprite/index.ts:31](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L31)

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

[lib/sprite/index.ts:42](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L42)
