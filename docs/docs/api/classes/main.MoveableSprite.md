---
id: "main.MoveableSprite"
title: "Class: MoveableSprite"
sidebar_label: "MoveableSprite"
custom_edit_url: null
---

[main](../modules/main.md).MoveableSprite

## Hierarchy

- [`Hook`](main.Hook.md)

  ↳ **`MoveableSprite`**

## Properties

### \_sprite

• `Optional` **\_sprite**: [`Sprite`](sprite.Sprite.md)

#### Inherited from

[Hook](main.Hook.md).[_sprite](main.Hook.md#_sprite)

#### Defined in

[lib/hook/hook.ts:4](https://github.com/rycont/stadium/blob/eca21ca/lib/hook/hook.ts#L4)

___

### moveable

• `Optional` **moveable**: `default`

#### Defined in

[lib/hook/moveable.ts:6](https://github.com/rycont/stadium/blob/eca21ca/lib/hook/moveable.ts#L6)

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

### onDestroy

▸ **onDestroy**(): `void`

#### Returns

`void`

#### Overrides

[Hook](main.Hook.md).[onDestroy](main.Hook.md#ondestroy)

#### Defined in

[lib/hook/moveable.ts:20](https://github.com/rycont/stadium/blob/eca21ca/lib/hook/moveable.ts#L20)

___

### onDrag

▸ **onDrag**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `OnDrag` |

#### Returns

`void`

#### Defined in

[lib/hook/moveable.ts:38](https://github.com/rycont/stadium/blob/eca21ca/lib/hook/moveable.ts#L38)

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

[lib/hook/moveable.ts:12](https://github.com/rycont/stadium/blob/eca21ca/lib/hook/moveable.ts#L12)

___

### onMouseDown

▸ **onMouseDown**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[lib/hook/moveable.ts:24](https://github.com/rycont/stadium/blob/eca21ca/lib/hook/moveable.ts#L24)
