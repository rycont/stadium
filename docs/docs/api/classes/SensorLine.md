---
id: "SensorLine"
title: "Class: SensorLine"
sidebar_label: "SensorLine"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Sprite`

  ↳ **`SensorLine`**

## Implements

- `Line`

## Constructors

### constructor

• **new SensorLine**(`p1`, `p2`): [`SensorLine`](SensorLine.md)

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

[`SensorLine`](SensorLine.md)

#### Overrides

Sprite.constructor

#### Defined in

[lib/sensorLine/index.ts:19](https://github.com/rycont/stadium/blob/85a354b/lib/sensorLine/index.ts#L19)

## Properties

### element

• **element**: `HTMLDivElement`

#### Overrides

Sprite.element

#### Defined in

[lib/sensorLine/index.ts:16](https://github.com/rycont/stadium/blob/85a354b/lib/sensorLine/index.ts#L16)

___

### hookManager

• **hookManager**: `HookManager`

#### Inherited from

Sprite.hookManager

#### Defined in

[lib/sprite/index.ts:14](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L14)

___

### id

• `Optional` **id**: `string`

#### Inherited from

Sprite.id

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

Sprite.position

#### Defined in

[lib/sprite/index.ts:19](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L19)

___

### pubsub

• **pubsub**: `PubSub`\<readonly [``"move"``]\>

#### Inherited from

Sprite.pubsub

#### Defined in

[lib/sprite/index.ts:13](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L13)

___

### stadium

• `Optional` **stadium**: [`Stadium`](Stadium.md)

#### Inherited from

Sprite.stadium

#### Defined in

[lib/sprite/index.ts:16](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L16)

___

### tags

• **tags**: `string`[]

#### Overrides

Sprite.tags

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

Sprite.destroy

#### Defined in

[lib/sprite/index.ts:38](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L38)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Overrides

Sprite.draw

#### Defined in

[lib/sensorLine/index.ts:24](https://github.com/rycont/stadium/blob/85a354b/lib/sensorLine/index.ts#L24)

___

### onMount

▸ **onMount**(`stadium`, `id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stadium` | [`Stadium`](Stadium.md) |
| `id` | `string` |

#### Returns

`void`

#### Inherited from

Sprite.onMount

#### Defined in

[lib/sprite/index.ts:23](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L23)

___

### toJSON

▸ **toJSON**(): [`SensorLine`](SensorLine.md) & \{ `type`: `string`  }

#### Returns

[`SensorLine`](SensorLine.md) & \{ `type`: `string`  }

#### Inherited from

Sprite.toJSON

#### Defined in

[lib/sprite/index.ts:31](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L31)

___

### use

▸ **use**(`hooks`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hooks` | [`Hook`](Hook.md)[] |

#### Returns

`void`

#### Inherited from

Sprite.use

#### Defined in

[lib/sprite/index.ts:42](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L42)
