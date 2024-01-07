---
id: "main.Animate"
title: "Class: Animate"
sidebar_label: "Animate"
custom_edit_url: null
---

[main](../modules/main.md).Animate

## Hierarchy

- [`Hook`](main.Hook.md)

  ↳ **`Animate`**

## Constructors

### constructor

• **new Animate**(): [`Animate`](main.Animate.md)

#### Returns

[`Animate`](main.Animate.md)

#### Overrides

[Hook](main.Hook.md).[constructor](main.Hook.md#constructor)

#### Defined in

[lib/hook/animate.ts:25](https://github.com/rycont/stadium/blob/85a354b/lib/hook/animate.ts#L25)

## Properties

### \_sprite

• `Optional` **\_sprite**: [`Sprite`](sprite.Sprite.md)

#### Inherited from

[Hook](main.Hook.md).[_sprite](main.Hook.md#_sprite)

#### Defined in

[lib/hook/hook.ts:4](https://github.com/rycont/stadium/blob/85a354b/lib/hook/hook.ts#L4)

___

### blocklineDetector

• `Optional` **blocklineDetector**: [`LineCrossingDetector`](main.LineCrossingDetector.md)

#### Defined in

[lib/hook/animate.ts:23](https://github.com/rycont/stadium/blob/85a354b/lib/hook/animate.ts#L23)

___

### isMoving

• **isMoving**: `boolean` = `false`

#### Defined in

[lib/hook/animate.ts:20](https://github.com/rycont/stadium/blob/85a354b/lib/hook/animate.ts#L20)

___

### pubsub

• **pubsub**: [`PubSub`](pubsub.PubSub.md)\<readonly [``"start"``, ``"end"``]\>

#### Defined in

[lib/hook/animate.ts:21](https://github.com/rycont/stadium/blob/85a354b/lib/hook/animate.ts#L21)

___

### targets

• **targets**: `Target`[] = `[]`

#### Defined in

[lib/hook/animate.ts:19](https://github.com/rycont/stadium/blob/85a354b/lib/hook/animate.ts#L19)

## Accessors

### sprite

• `get` **sprite**(): `Exclude`\<`this`[``"_sprite"``], `undefined` \| ``null``\>

#### Returns

`Exclude`\<`this`[``"_sprite"``], `undefined` \| ``null``\>

#### Inherited from

Hook.sprite

#### Defined in

[lib/hook/hook.ts:13](https://github.com/rycont/stadium/blob/85a354b/lib/hook/hook.ts#L13)

## Methods

### completeTarget

▸ **completeTarget**(`target`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Target` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `dleft` | `number` |
| `dtop` | `number` |
| `duration` | `number` |
| `left` | `number` |
| `top` | `number` |

#### Defined in

[lib/hook/animate.ts:114](https://github.com/rycont/stadium/blob/85a354b/lib/hook/animate.ts#L114)

___

### move

▸ **move**(`_target`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_target` | `Target` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[lib/hook/animate.ts:67](https://github.com/rycont/stadium/blob/85a354b/lib/hook/animate.ts#L67)

___

### moveBy

▸ **moveBy**(`dleft`, `dtop`, `duration?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dleft` | `number` | `undefined` |
| `dtop` | `number` | `undefined` |
| `duration` | `number` | `500` |

#### Returns

`void`

#### Defined in

[lib/hook/animate.ts:48](https://github.com/rycont/stadium/blob/85a354b/lib/hook/animate.ts#L48)

___

### moveTo

▸ **moveTo**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Target` |

#### Returns

`void`

#### Defined in

[lib/hook/animate.ts:40](https://github.com/rycont/stadium/blob/85a354b/lib/hook/animate.ts#L40)

___

### onDestroy

▸ **onDestroy**(): `void`

#### Returns

`void`

#### Overrides

[Hook](main.Hook.md).[onDestroy](main.Hook.md#ondestroy)

#### Defined in

[lib/hook/animate.ts:38](https://github.com/rycont/stadium/blob/85a354b/lib/hook/animate.ts#L38)

___

### onDraw

▸ **onDraw**(): `void`

#### Returns

`void`

#### Defined in

[lib/hook/animate.ts:37](https://github.com/rycont/stadium/blob/85a354b/lib/hook/animate.ts#L37)

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

[lib/hook/animate.ts:29](https://github.com/rycont/stadium/blob/85a354b/lib/hook/animate.ts#L29)

___

### runQueue

▸ **runQueue**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[lib/hook/animate.ts:56](https://github.com/rycont/stadium/blob/85a354b/lib/hook/animate.ts#L56)
