---
id: "Nearness"
title: "Class: Nearness"
sidebar_label: "Nearness"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Hook`](Hook.md)

  ↳ **`Nearness`**

## Constructors

### constructor

• **new Nearness**(`targetTags`, `threshold?`, `handler`): [`Nearness`](Nearness.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `targetTags` | `string`[] | `undefined` |
| `threshold` | `number` | `20` |
| `handler` | (`source`: `Sprite`, `target`: `Sprite`) => `void` | `undefined` |

#### Returns

[`Nearness`](Nearness.md)

#### Overrides

[Hook](Hook.md).[constructor](Hook.md#constructor)

#### Defined in

[lib/hook/nearness.ts:7](https://github.com/rycont/stadium/blob/85a354b/lib/hook/nearness.ts#L7)

## Properties

### \_sprite

• `Optional` **\_sprite**: `Sprite`

#### Inherited from

[Hook](Hook.md).[_sprite](Hook.md#_sprite)

#### Defined in

[lib/hook/hook.ts:4](https://github.com/rycont/stadium/blob/85a354b/lib/hook/hook.ts#L4)

___

### handler

• **handler**: (`source`: `Sprite`, `target`: `Sprite`) => `void`

#### Type declaration

▸ (`source`, `target`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Sprite` |
| `target` | `Sprite` |

##### Returns

`void`

#### Defined in

[lib/hook/nearness.ts:10](https://github.com/rycont/stadium/blob/85a354b/lib/hook/nearness.ts#L10)

___

### targetTags

• **targetTags**: `string`[]

#### Defined in

[lib/hook/nearness.ts:8](https://github.com/rycont/stadium/blob/85a354b/lib/hook/nearness.ts#L8)

___

### threshold

• **threshold**: `number` = `20`

#### Defined in

[lib/hook/nearness.ts:9](https://github.com/rycont/stadium/blob/85a354b/lib/hook/nearness.ts#L9)

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

### onDestroy

▸ **onDestroy**(): `void`

#### Returns

`void`

#### Overrides

[Hook](Hook.md).[onDestroy](Hook.md#ondestroy)

#### Defined in

[lib/hook/nearness.ts:36](https://github.com/rycont/stadium/blob/85a354b/lib/hook/nearness.ts#L36)

___

### onMount

▸ **onMount**(`sprite`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sprite` | `Sprite` |

#### Returns

`void`

#### Overrides

[Hook](Hook.md).[onMount](Hook.md#onmount)

#### Defined in

[lib/hook/nearness.ts:15](https://github.com/rycont/stadium/blob/85a354b/lib/hook/nearness.ts#L15)

___

### onMove

▸ **onMove**(): `void`

#### Returns

`void`

#### Defined in

[lib/hook/nearness.ts:20](https://github.com/rycont/stadium/blob/85a354b/lib/hook/nearness.ts#L20)
