---
id: "main.Hook"
title: "Class: Hook"
sidebar_label: "Hook"
custom_edit_url: null
---

[main](../modules/main.md).Hook

## Hierarchy

- **`Hook`**

  ↳ [`Animate`](main.Animate.md)

  ↳ [`MoveableSprite`](main.MoveableSprite.md)

  ↳ [`Nearness`](main.Nearness.md)

  ↳ [`LineCrossingDetector`](main.LineCrossingDetector.md)

## Constructors

### constructor

• **new Hook**(): [`Hook`](main.Hook.md)

#### Returns

[`Hook`](main.Hook.md)

#### Defined in

[lib/hook/hook.ts:6](https://github.com/rycont/stadium/blob/85a354b/lib/hook/hook.ts#L6)

## Properties

### \_sprite

• `Optional` **\_sprite**: [`Sprite`](sprite.Sprite.md)

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
| `sprite` | [`Sprite`](sprite.Sprite.md) |

#### Returns

`void`

#### Defined in

[lib/hook/hook.ts:8](https://github.com/rycont/stadium/blob/85a354b/lib/hook/hook.ts#L8)
