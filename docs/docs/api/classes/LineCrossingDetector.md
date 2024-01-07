---
id: "LineCrossingDetector"
title: "Class: LineCrossingDetector"
sidebar_label: "LineCrossingDetector"
sidebar_position: 0
custom_edit_url: null
---

스프라이트가 [Animate](/docs/api/classes/Animate) 훅을 통해 이동할 때 [SensorLine](./docs/api/classes/Animate)을
지나치게 되는지를 검사하는 Hook입니다. `LineCrossingDetector.LINE_TAG`를 태그로 가지는
SensorLine만 검사 대상입니다.

```ts
const sprite = new ImageSprite("image", 10, 10, 0, 100);

const lineCrossingDetector = new LineCrossingDetector({
    blockMove: true
});
const animte = new Animate();

const line = new SensorLine({ left: 0, top: 0 }, { left: 100, top: 100 });
line.tags.push(LineCrossingDetector.LINE_TAG);

sprite.use([ lineCrossingDetector, animate ]);

lineCrossingDetector.pubsub.sub("blocked", (from: Point, to: Point) => {
    console.log(from, "에서", to, "로 이동하려 했으나 라인에 막혔습니다.");
})

animate.moveTo(100, 0) // { left: 0, top: 100 }에서 { left: 100, top: 0 }으로 이동하려 했으나 라인에 막혔습니다.
```

## Hierarchy

- `Hook`

  ↳ **`LineCrossingDetector`**

## Constructors

### constructor

• **new LineCrossingDetector**(`behavior`): [`LineCrossingDetector`](LineCrossingDetector.md)

LineCrossingDetector 클래스의 인스턴스를 생성합니다.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `behavior` | `Object` | - |
| `behavior.blockMove?` | `boolean` | Animate의 이동 경로에 SensorLine이 있을 때, 이동할 수 없도록 합니다. |
| `behavior.clearMovePathAfterBlocking?` | `boolean` | Animate가 LineCrossingDetector에 의해 가로막혔을 때, 나머지 이동 대기열을 비웁니다. |

#### Returns

[`LineCrossingDetector`](LineCrossingDetector.md)

#### Overrides

Hook.constructor

#### Defined in

[lib/hook/lineCrossingDetector.ts:65](https://github.com/rycont/stadium/blob/0a9165d/lib/hook/lineCrossingDetector.ts#L65)

## Properties

### pubsub

• **pubsub**: `PubSub`\<[``"crossed"``, ``"blocked"``]\>

`crossed`, `blocked` 이벤트를 생성하는 PubSub 인스턴스입니다.

- 스프라이트가 `target`으로 이동할 때 `SensorLine`을 지나치게 되면 `crossed` 이벤트를 생성합니다.
- 만일 `behavior.blockMove`가 `true`여서 이동이 가로막혔다면 `blocked` 이벤트를 생성합니다.

```ts
lineCrossingDetector.pubsub.sub("crossed", (from: Point, to: Point) => {
    console.log(from, "에서", to, "로 이동하며 라인을 지났습니다.");
});

lineCrossingDetector.pubsub.sub("blocked", (from: Point, to: Point) => {
    console.log(from, "에서", to, "로 이동하려 했으나 라인에 막혔습니다.");
});
```

#### Defined in

[lib/hook/lineCrossingDetector.ts:58](https://github.com/rycont/stadium/blob/0a9165d/lib/hook/lineCrossingDetector.ts#L58)

___

### LINE\_TAG

▪ `Static` **LINE\_TAG**: `string` = `"blockline"`

`SensorLine`에 `LineCrossingDetector.LINE_TAG` 태그가 붙어있어야 감지할 수 있습니다.

```ts
const line = new SensorLine({ left: 0, top: 0 }, { left: 100, top: 100 });
line.tags.push(LineCrossingDetector.LINE_TAG);
```

#### Defined in

[lib/hook/lineCrossingDetector.ts:40](https://github.com/rycont/stadium/blob/0a9165d/lib/hook/lineCrossingDetector.ts#L40)

## Methods

### isCrossing

▸ **isCrossing**(`target`): `boolean`

스프라이트가 `target`으로 이동할 때 `SensorLine`을 지나치는지 검사합니다.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Object` | 이동할 목적지입니다. |
| `target.left` | `number` | - |
| `target.top` | `number` | - |

#### Returns

`boolean`

라인을 건너는지 여부를 나타내는 불리언 값입니다.

```ts
const lineCrossingDetector = new LineCrossingDetector({});
const sprite = new ImageSprite(...);

sprite.use([lineCrossingDetector]);

const line = new SensorLine({ left: 0, top: 0 }, { left: 100, top: 100 });
line.tags.push(LineCrossingDetector.LINE_TAG);

lineCrossingDetector.isCrossing({ left: 50, top: 50 }); // true
```

#### Defined in

[lib/hook/lineCrossingDetector.ts:95](https://github.com/rycont/stadium/blob/0a9165d/lib/hook/lineCrossingDetector.ts#L95)
