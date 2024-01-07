[stadium](../README.md) / [Exports](../modules.md) / Animate

# Class: Animate

스프라이트의 위치를 부드럽게 조작할 수 있게 하는 Hook 입니다.
애니메이션 재생 시간의 기본값은 500ms입니다.

이동할 목적지는 Queue에 저장되기 때문에, 이동중에 새로운 목적지를 추가한다면
현재 이동이 끝난 이후 이어서 이동합니다.

```ts
const animate = new Animate()
imageSprite.use([ animate ])

const dleft = 80
const dtop = 0
const duration = 1000

animate.moveBy(dleft, dtop, duration) // 1초 동안 오른쪽으로 80px 이동
animate.moveTo({ left: 0, top: 0, duration: 500 }) // 0.5초 동안 (0, 0)으로 이동
```

## Hierarchy

- `Hook`

  ↳ **`Animate`**

## Table of contents

### Properties

- [pubsub](Animate.md#pubsub)

### Methods

- [moveBy](Animate.md#moveby)
- [moveTo](Animate.md#moveto)
- [onMount](Animate.md#onmount)

## Properties

### pubsub

• **pubsub**: `PubSub`\<[``"start"``, ``"end"``]\>

이벤트를 발행하고 구독하는 PubSub 인스턴스입니다.
"start"와 "end" 이벤트를 발행합니다.

```ts
animate.pubsub.sub("start", (from: Point, to: Point) => {
 console.log(from, "에서", to, "로 이동합니다.");
});

animate.pubsub.sub("end", (position: Point) => {
 console.log(position, "에 도착했습니다.");
});
```

#### Defined in

[lib/hook/animate.ts:44](https://github.com/rycont/stadium/blob/574e59c/lib/hook/animate.ts#L44)

## Methods

### moveBy

▸ **moveBy**(`dleft`, `dtop`, `duration?`): `void`

상대적인 좌표로 스프라이트를 이동합니다.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `dleft` | `number` | `undefined` | 좌측으로 이동할 거리 |
| `dtop` | `number` | `undefined` | 상단으로 이동할 거리 |
| `duration` | `number` | `500` | 애니메이션의 지속 시간 (ms) ```ts animate.moveBy(80, 0, 1000) // 1초 동안 오른쪽으로 80px 이동 ``` |

#### Returns

`void`

#### Defined in

[lib/hook/animate.ts:84](https://github.com/rycont/stadium/blob/574e59c/lib/hook/animate.ts#L84)

___

### moveTo

▸ **moveTo**(`left`, `top`, `duration?`): `void`

절대적인 좌표로 스프라이트를 이동합니다.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `left` | `number` | `undefined` | 이동할 좌표의 x값 |
| `top` | `number` | `undefined` | 이동할 좌표의 y값 |
| `duration` | `number` | `500` | 애니메이션의 지속 시간 (ms) ```ts animate.moveTo(0, 0, 800) // 0.8초 동안 (0, 0)으로 이동 ``` |

#### Returns

`void`

#### Defined in

[lib/hook/animate.ts:102](https://github.com/rycont/stadium/blob/574e59c/lib/hook/animate.ts#L102)

___

### onMount

▸ **onMount**(`sprite`): `void`

훅이 스프라이트에 마운트될 때 호출되는 메서드입니다.
스프라이트에서 `LineCrossingDetector` 훅을 찾고, 있다면 `blocklineDetector`에 저장합니다.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sprite` | `Sprite` | 마운트된 스프라이트 |

#### Returns

`void`

#### Overrides

Hook.onMount

#### Defined in

[lib/hook/animate.ts:57](https://github.com/rycont/stadium/blob/574e59c/lib/hook/animate.ts#L57)
