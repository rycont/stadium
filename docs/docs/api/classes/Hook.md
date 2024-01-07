---
id: "Hook"
title: "Class: Hook"
sidebar_label: "Hook"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`Hook`**

  ↳ [`Animate`](Animate.md)

  ↳ [`MoveableSprite`](MoveableSprite.md)

  ↳ [`Nearness`](Nearness.md)

  ↳ [`LineCrossingDetector`](LineCrossingDetector.md)

## Constructors

### constructor

• **new Hook**(): [`Hook`](Hook.md)

#### Returns

[`Hook`](Hook.md)

#### Defined in

[lib/hook/hook.ts:6](https://github.com/rycont/stadium/blob/85a354b/lib/hook/hook.ts#L6)

## Properties

### \_sprite

• `Optional` **\_sprite**: `Sprite`

#### Defined in

[lib/hook/hook.ts:4](https://github.com/rycont/stadium/blob/85a354b/lib/hook/hook.ts#L4)

## Accessors

### sprite

• `get` **sprite**(): `Exclude`\<`this`[``"_sprite"``], `undefined` \| ``null``\>

#### Returns

`Exclude`\<`this`[``"_sprite"``], `undefined` \| ``null``\>

#### Defined in

[lib/hook/hook.ts:13](https://github.com/rycont/stadium/blob/85a354b/lib/hook/hook.ts#L13)

## Methods

### onDestroy

▸ **onDestroy**(): `void`

#### Returns

`void`

#### Defined in

[lib/hook/hook.ts:11](https://github.com/rycont/stadium/blob/85a354b/lib/hook/hook.ts#L11)

___

### onMount

▸ **onMount**(`sprite`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sprite` | `Sprite` |

#### Returns

`void`

#### Defined in

[lib/hook/hook.ts:8](https://github.com/rycont/stadium/blob/85a354b/lib/hook/hook.ts#L8)
