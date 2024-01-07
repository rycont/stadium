---
id: "main.LineCrossingDetector"
title: "Class: LineCrossingDetector"
sidebar_label: "LineCrossingDetector"
custom_edit_url: null
---

[main](../modules/main.md).LineCrossingDetector

## Hierarchy

- [`Hook`](main.Hook.md)

  ↳ **`LineCrossingDetector`**

## Properties

### \_sprite

• `Optional` **\_sprite**: [`Sprite`](sprite.Sprite.md)

#### Inherited from

[Hook](main.Hook.md).[_sprite](main.Hook.md#_sprite)

#### Defined in

[lib/hook/hook.ts:4](https://github.com/rycont/stadium/blob/eca21ca/lib/hook/hook.ts#L4)

___

### behavior

• **behavior**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blockMove?` | `boolean` |
| `clearMovePathAfterBlocking?` | `boolean` |

#### Defined in

[lib/hook/lineCrossingDetector.ts:15](https://github.com/rycont/stadium/blob/eca21ca/lib/hook/lineCrossingDetector.ts#L15)

___

### pubsub

• **pubsub**: [`PubSub`](pubsub.PubSub.md)\<[``"crossed"``, ``"blocked"``]\>

#### Defined in

[lib/hook/lineCrossingDetector.ts:12](https://github.com/rycont/stadium/blob/eca21ca/lib/hook/lineCrossingDetector.ts#L12)

___

### LINE\_TAG

▪ `Static` **LINE\_TAG**: `string` = `"blockline"`

#### Defined in

[lib/hook/lineCrossingDetector.ts:10](https://github.com/rycont/stadium/blob/eca21ca/lib/hook/lineCrossingDetector.ts#L10)

## Accessors

### sprite

• `get` **sprite**(): `Exclude`\<`this`[``"_sprite"``], `undefined` \| ``null``\>

#### Returns

`Exclude`\<`this`[``"_sprite"``], `undefined` \| ``null``\>

#### Inherited from

Hook.sprite

#### Defined in

[lib/hook/hook.ts:13](https://github.com/rycont/stadium/blob/eca21ca/lib/hook/hook.ts#L13)

## Methods

### isCrossing

▸ **isCrossing**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Object` |
| `target.left` | `number` |
| `target.top` | `number` |

#### Returns

`boolean`

#### Defined in

[lib/hook/lineCrossingDetector.ts:27](https://github.com/rycont/stadium/blob/eca21ca/lib/hook/lineCrossingDetector.ts#L27)

___

### onDestroy

▸ **onDestroy**(): `void`

#### Returns

`void`

#### Inherited from

[Hook](main.Hook.md).[onDestroy](main.Hook.md#ondestroy)

#### Defined in

[lib/hook/hook.ts:11](https://github.com/rycont/stadium/blob/eca21ca/lib/hook/hook.ts#L11)

___

### onMount

▸ **onMount**(`sprite`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sprite` | [`Sprite`](sprite.Sprite.md) |

#### Returns

`void`

#### Overrides

[Hook](main.Hook.md).[onMount](main.Hook.md#onmount)

#### Defined in

[lib/hook/lineCrossingDetector.ts:23](https://github.com/rycont/stadium/blob/eca21ca/lib/hook/lineCrossingDetector.ts#L23)
