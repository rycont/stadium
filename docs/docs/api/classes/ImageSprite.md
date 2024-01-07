---
id: "ImageSprite"
title: "Class: ImageSprite"
sidebar_label: "ImageSprite"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Sprite`

  ↳ **`ImageSprite`**

## Constructors

### constructor

• **new ImageSprite**(`image`, `width`, `height`, `left?`, `top?`): [`ImageSprite`](ImageSprite.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `image` | `string` | `undefined` |
| `width` | `number` | `undefined` |
| `height` | `number` | `undefined` |
| `left` | `number` | `0` |
| `top` | `number` | `0` |

#### Returns

[`ImageSprite`](ImageSprite.md)

#### Overrides

Sprite.constructor

#### Defined in

[lib/sprite/index.ts:57](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L57)

## Properties

### \_image

• `Private` **\_image**: `string`

#### Defined in

[lib/sprite/index.ts:55](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L55)

___

### element

• **element**: `HTMLImageElement`

#### Overrides

Sprite.element

#### Defined in

[lib/sprite/index.ts:54](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L54)

___

### height

• **height**: `number`

#### Defined in

[lib/sprite/index.ts:60](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L60)

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

• **tags**: `string`[] = `[]`

#### Inherited from

Sprite.tags

#### Defined in

[lib/sprite/index.ts:11](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L11)

___

### width

• **width**: `number`

#### Defined in

[lib/sprite/index.ts:59](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L59)

## Accessors

### image

• `get` **image**(): `string`

#### Returns

`string`

#### Defined in

[lib/sprite/index.ts:80](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L80)

• `set` **image**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[lib/sprite/index.ts:84](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L84)

___

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

[lib/sprite/index.ts:70](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L70)

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

▸ **toJSON**(): [`ImageSprite`](ImageSprite.md) & \{ `type`: `string`  }

#### Returns

[`ImageSprite`](ImageSprite.md) & \{ `type`: `string`  }

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
