---
id: "pubsub.PubSub"
title: "Class: PubSub<Events>"
sidebar_label: "PubSub"
custom_edit_url: null
---

[pubsub](../modules/pubsub.md).PubSub

PubSub 클래스는 이벤트를 생성하고 구독하는 PubSub 패턴을 구현합니다.

**`Example`**

```ts
const pubsub = new PubSub<['event1', 'event2']>();

pubsub.sub('event1', () => console.log('event1 발생'));
pubsub.pub('event1'); // 'event1 발생'
```

**`Example`**

```ts
const pubsub = new PubSub<['점심시간']>();

pubsub.sub('점심시간', (food: string) => console.log(`${food} 먹을 시간입니다.`));
pubsub.pub('점심시간', ['김치찌개']);
```

## Type parameters

| Name | Type |
| :------ | :------ |
| `Events` | extends `string`[] |

## Methods

### pub

▸ **pub**(`event`, `args?`): `void`

지정된 이벤트를 생성합니다.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `event` | `Events`[`number`] | `undefined` | 생성할 이벤트의 이름입니다. |
| `args` | `any`[] | `[]` | 이벤트 핸들러에 전달할 인수의 배열입니다. |

#### Returns

`void`

**`Example`**

```ts
pubsub.pub('register', ['홍길동']);
```

#### Defined in

[lib/pubsub.ts:53](https://github.com/rycont/stadium/blob/eca21ca/lib/pubsub.ts#L53)

___

### sub

▸ **sub**(`event`, `listener`): `void`

이벤트를 구독합니다.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `Events`[`number`] | 구독할 이벤트의 이름입니다 |
| `listener` | `Function` | 이벤트가 발생했을 때 실행할 함수입니다. |

#### Returns

`void`

**`Example`**

```ts
pubsub.sub('register', (name: string) => console.log(`${name}님이 입장하셨습니다.`));
```

#### Defined in

[lib/pubsub.ts:38](https://github.com/rycont/stadium/blob/eca21ca/lib/pubsub.ts#L38)
