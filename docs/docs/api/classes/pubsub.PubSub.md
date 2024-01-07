---
id: "pubsub.PubSub"
title: "Class: PubSub<T>"
sidebar_label: "PubSub"
custom_edit_url: null
---

[pubsub](../modules/pubsub.md).PubSub

A generic PubSub class that allows subscribing to and publishing events.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends readonly `string`[] | The type of events that can be subscribed to. |

## Constructors

### constructor

• **new PubSub**\<`T`\>(`events`): [`PubSub`](pubsub.PubSub.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends readonly `string`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `T` |

#### Returns

[`PubSub`](pubsub.PubSub.md)\<`T`\>

#### Defined in

[lib/pubsub.ts:6](https://github.com/rycont/stadium/blob/85a354b/lib/pubsub.ts#L6)

## Properties

### events

• **events**: `T`

#### Defined in

[lib/pubsub.ts:6](https://github.com/rycont/stadium/blob/85a354b/lib/pubsub.ts#L6)

___

### handlers

• **handlers**: `Object` = `{}`

#### Index signature

▪ [key: `string`]: `Function`[]

#### Defined in

[lib/pubsub.ts:8](https://github.com/rycont/stadium/blob/85a354b/lib/pubsub.ts#L8)

## Methods

### pub

▸ **pub**(`event`, `args?`): `void`

Publishes an event with optional arguments.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `event` | `T`[`number`] | `undefined` | The event to publish. |
| `args` | `any`[] | `[]` | Optional arguments to pass to the event listeners. |

#### Returns

`void`

#### Defined in

[lib/pubsub.ts:27](https://github.com/rycont/stadium/blob/85a354b/lib/pubsub.ts#L27)

___

### sub

▸ **sub**(`event`, `listener`): `void`

Subscribes a listener function to an event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `T`[`number`] | The event to subscribe to. |
| `listener` | `Function` | The listener function to be called when the event is published. |

#### Returns

`void`

#### Defined in

[lib/pubsub.ts:17](https://github.com/rycont/stadium/blob/85a354b/lib/pubsub.ts#L17)
