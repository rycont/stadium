# Stadium

Stadium은 스프라이트가 배치될 수 있는 공간입니다.
```typescript
interface Size {
    width: number
    height: number
}

class Stadium {
    sprites: Sprite[]
    pubsub: PubSub<["spriteMove"]>

    constructor(HTMLDivElement, Size, Size)
    addSprite(Sprite): void
}
```

## Methods

### 초기화하기

```typescript
const element = document.getElementById("stadium")
const designedSize = { width: 400, height: 400 }
const actualSize = { width: 800, height: 800 }

const stadium = new Stadium(
  element,      // 스타디움에 사용할 HTML 엘리먼트
  designedSize, // 스타디움의 크기
  actualSize,   // (Optional) 실제 렌더링될 엘리먼트의 크기
);
```

Stadium을 초기화하면 `element`에는 다음과 같은 변화가 생깁니다

1. `position`이 `relative`로 설정됩니다
2. `width`와 `height`가 `actualSize`의 값으로 설정됩니다
3. 종횡비가 CSS Variable에 저장됩니다
    1. `--x-ratio`: `width / designedSize.width`
    2. `--y-ratio`: `height / designedSize.height`

### Sprite 추가하기

```typescript
stadium.addSprite(sprite)
```

Stadium에 Sprite를 추가하는 과정을 `mount`라고 합니다. 다음의 순서로 mount됩니다:

1. DOM에 Sprite의 엘리먼트가 추가됩니다.
2. `sprite.onMount` 이벤트를 호출합니다
    - onMount 함수에는 `Stadium`과 `id`가 전달됩니다.
    - `id`는 crypto.randomUUID 함수를 사용해서 만들어집니다. 고유함을 보장하지 않습니다.

## PubSub Events

### spriteMove

Stadium 안에 배치된 Sprite의 위치가 변경될 때 publish됩니다.

```typescript
stadium.pubsub.sub("spriteMove", sprite => {
    console.log(sprite, "moved!")
})
```
