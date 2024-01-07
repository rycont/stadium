Sprite는 Stadium에 추가되는 개체입니다.

```typescript
class Sprite {
    element: HTMLElement
    tags: string[]

    pubsub: PubSub<["move"]>
    hookManager: HookManager

    stadium?: Stadium
    id?: string

    constructor(Position)

    onMount(Stadium, id: string): void
    draw(): void
    destroy(): void
    use(Hook[]): void
}
```

- element: DOM에 그려질 HTML Element
- draw: HTML Element의 내용을 구성합니다.
- tags: 스프라이트의 타입. [Nearness](./hook/nearness.md), [LineCrossingDetector](./hook/lineCrossingDetector)에서 사용됩니다.
- `stadium`과 `id`는 `onMount` 메소드에서 값을 할당합니다

## ImageSprite

```ts
class ImageSprite extends Sprite {
    element: HTMLImageElement

    public width: number
    public height: number
    private _image: string

    constructor(image, width, height, left, top)

    draw(): void

    get image()
    set image(value: string)
}


const src = "/asset/eth.png"

// 크기 설정
const width = 80
const height = 80

// 위치 설정
const left = 40
const top = 40

const image = new ImageSprite(src, width, height, left, top)
stadium.addSprite(image)
```

### Methods
#### image 변경하기

```ts
imageSprite.image = "/asset/another_image.png"
```

### PubSub Events
#### move
스프라이트의 위치가 변경될 때 Publish됩니다. `Locator` Hook이 `left`, `top` 값을 바꾼 후에 실행됩니다.

```ts
imageSprite.pubsub.sub("move", (sprite) => {
    console.log(sprite, "moved!")
})
```

## SensorLine

ImageSprite가 접근 혹은 통과하는지를 감지할 수 있는 스프라이트입니다.

```ts
const point1 = { left: 40,  top: 50  }
const point2 = { left: 320, top: 120 }

const line = new SensorLine(point1, point2);

class SensorLine extends Sprite implements Line {
    static TAG = "sensorLine"

    element: HTMLDivElement
    p1: Point
    p2: Point
    
    tags = [SensorLine.TAG]

    constructor(p1: Point, p2: Point)

    draw(): void
}

interface Line {
    p1: Point
    p2: Point
}

interface Point {
    left: number
    top: number
}
```
