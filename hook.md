# Hook

Hook은 Sprite를 확장해 더 다양한 기능을 추가할 수 있도록 합니다.

```ts
class Hook {
    sprite: Sprite

    onMount(Sprite): void
    onDestroy(): void
}
```

## Animate

스프라이트의 위치를 부드럽게 조작할 수 있게 하는 Hook 입니다. 애니메이션 재생 시간의 기본값은 500ms입니다.

```ts
type Target =
  | {
      left: number;
      top: number;
      duration: number;
    }
  | {
      dleft: number;
      dtop: number;
      duration: number;
    };

class Animate extends Hook {
    isMoving: boolean
    pubsub: PubSub<["start", "end"]>

    moveTo(target: Target): void
    moveBy(dleft: number, dtop: number, duration: number = 500): void
}
```

```ts
const animate = new Animate()
imageSprite.use([ animate ])

const dleft = 80
const dtop = 0
const duration = 1000

animate.moveBy(dleft, dtop, duration)
```

## LineCrossingDetector

스프라이트가 [Animate](#animate) 훅을 통해 이동할 때 [SensorLine](./sprite.md#sensorline)을 지나치게 되는지를 검사하는 Hook입니다. `LineCrossingDetector.LINE_TAG`를 태그로 가지는 SensorLine만 검사 대상입니다.

```ts
class LineCrossingDetector extends Hook {
    static LINE_TAG = "blockline"
    pubsub: PubSub<["crossed", "blocked"]>

    constructor({
        blockMove?: boolean, // Animate의 이동 경로에 SensorLine이 있을 때, 이동할 수 없도록 합니다.
        clearMovePathAfterBlocking?: boolean // Animate가 LineCrossingDetector에 의해 가로막혔을 때, 나머지 이동 대기열을 비웁니다.
    })

    isCrossing(target: Point): boolean // Sprite가 target까지 이동할 때 걸리는 SensorLine이 있는지 여부를 판단합니다
}
```

```ts
const line = ...;
line.tags.push(LineCrossingDetector.LINE_TAG);

const lineCrossingDetector = new LineCrossingDetector({
  blockMove: true
});

lineCrossingDetector.pubsub.sub("blocked", () => {
  console.log("Blocked by line");
});

sprite.use([ lineCrossingDetector ])
```

---

Work in progress

