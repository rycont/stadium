---
id: "main.LoopSpriteByDirection"
title: "Class: LoopSpriteByDirection"
sidebar_label: "LoopSpriteByDirection"
custom_edit_url: null
---

[main](../modules/main.md).LoopSpriteByDirection

## Hierarchy

- `LoopSprite`

  ↳ **`LoopSpriteByDirection`**

## Properties

### \_sprite

• `Optional` **\_sprite**: [`ImageSprite`](sprite.ImageSprite.md)

#### Inherited from

LoopSprite.\_sprite

#### Defined in

[lib/hook/loopSprite.ts:7](https://github.com/rycont/stadium/blob/eca21ca/lib/hook/loopSprite.ts#L7)

## Accessors

### sprite

• `get` **sprite**(): `Exclude`\<`this`[``"_sprite"``], `undefined` \| ``null``\>

#### Returns

`Exclude`\<`this`[``"_sprite"``], `undefined` \| ``null``\>

#### Inherited from

LoopSprite.sprite

#### Defined in

[lib/hook/hook.ts:13](https://github.com/rycont/stadium/blob/eca21ca/lib/hook/hook.ts#L13)

___

### state

• `set` **state**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

LoopSprite.state

#### Defined in

[lib/hook/loopSprite.ts:33](https://github.com/rycont/stadium/blob/eca21ca/lib/hook/loopSprite.ts#L33)

## Methods

### assertHaveAllDirection

▸ **assertHaveAllDirection**(): `void`

#### Returns

`void`

#### Defined in

[lib/hook/loopSprite.ts:110](https://github.com/rycont/stadium/blob/eca21ca/lib/hook/loopSprite.ts#L110)

___

### assertProperState

▸ **assertProperState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |

#### Returns

`void`

#### Inherited from

LoopSprite.assertProperState

#### Defined in

[lib/hook/loopSprite.ts:55](https://github.com/rycont/stadium/blob/eca21ca/lib/hook/loopSprite.ts#L55)

___

### getDirection

▸ **getDirection**(`from`, `to`): ``"left"`` \| ``"right"`` \| ``"up"`` \| ``"down"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `Object` |
| `from.left` | `number` |
| `from.top` | `number` |
| `to` | `Object` |
| `to.left` | `number` |
| `to.top` | `number` |

#### Returns

``"left"`` \| ``"right"`` \| ``"up"`` \| ``"down"``

#### Defined in

[lib/hook/loopSprite.ts:87](https://github.com/rycont/stadium/blob/eca21ca/lib/hook/loopSprite.ts#L87)

___

### onDestroy

▸ **onDestroy**(): `void`

#### Returns

`void`

#### Inherited from

LoopSprite.onDestroy

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

LoopSprite.onMount

#### Defined in

[lib/hook/loopSprite.ts:73](https://github.com/rycont/stadium/blob/eca21ca/lib/hook/loopSprite.ts#L73)

___

### preload

▸ **preload**(): `void`

#### Returns

`void`

#### Inherited from

LoopSprite.preload

#### Defined in

[lib/hook/loopSprite.ts:19](https://github.com/rycont/stadium/blob/eca21ca/lib/hook/loopSprite.ts#L19)
