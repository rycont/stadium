# Stadium

Stadium은 코딩 교육용 웹 게임을 쉽게 개발할 수 있도록 도와주는 UI 라이브러리입니다.

::: tip 아래 박스는 Stadium을 사용해 만든 예제입니다.

- 키보드로 조작할 수 있습니다.
  :::

<div ref="el"></div>

<script setup>
    import { ref, onMounted } from 'vue'
    import {
        Stadium,
        SensorLine,
        ImageSprite,
        MoveableSprite,
        Animate,
        DetectLineCrossing,
    } from "../lib/main.ts";
    const el = ref(null)

    onMounted(() => {
        const stadium = new Stadium(el.value, {
            width: 400,
            height: 400,
        });

        const picture = new ImageSprite({
            src: "https://picsum.photos/200",
            size: {
                width: 40,
                height: 40,
            },
            position: {
                left: 160,
                top: 220,
            },
        });
        const animate = new Animate();

        picture.use([animate]);
        stadium.add(picture);

        addEventListener("keydown", (e) => {
            switch(e.key) {
                case "ArrowUp":
                    animate.moveBy(0, -20, 100);
                    break;
                case "ArrowDown":
                    animate.moveBy(0, 20, 100);
                    break;
                case "ArrowLeft":
                    animate.moveBy(-20, 0, 100);
                    break;
                case "ArrowRight":
                    animate.moveBy(20, 0, 100);
                    break;
            }
        })

        el.value.style.setProperty("border", "1px solid black")
    })
</script>

```js{1-5,10,13,16,19}
const picture = new ImageSprite({
  src: "https://picsum.photos/200",
  size: {
    width: 40,
    height: 40,
  },
  position: {
    left: 160,
    top: 220,
  },
});
const animate = new Animate();

picture.use([animate]);
stadium.add(picture);

addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      animate.moveBy(0, -20, 100);
      break;
    case "ArrowDown":
      animate.moveBy(0, 20, 100);
      break;
    case "ArrowLeft":
      animate.moveBy(-20, 0, 100);
      break;
    case "ArrowRight":
      animate.moveBy(20, 0, 100);
      break;
  }
});
```

## 따라하며 배우기!

- [맵 만들기](./따라하기/1.%20맵%20만들기)
- [움직이는 스프라이트](./따라하기/2.%20움직이는%20스프라이트)
- [선의 통과를 감지하기](./따라하기/3.%20선의%20통과를%20감지하기)
- [넘을 수 없는 선](./따라하기/4.%20넘을%20수%20없는%20선.md)

## Quick Tour

### Stadium 초기화하기

[Stadium 자세히 알아보기](./API/classes/Stadium.md)

Stadium은 스프라이트가 배치될 수 있는 공간입니다.

```typescript
const element = document.getElementById("stadium");
const designedSize = { width: 400, height: 400 };
const actualSize = { width: 800, height: 800 };

const stadium = new Stadium(
  element, // 스타디움에 사용할 HTML 엘리먼트
  designedSize, // 스타디움의 크기
  actualSize // (Optional) 실제 렌더링될 엘리먼트의 크기
);
```

ActualSize를 지정하지 않으면 DesignedSize와 동일한 크기로 렌더링됩니다.

> **ActualSize와 DesignedSize를 별도로 구현한 이유는 무엇인가요?**  
> 하나의 사이즈로 만들어진 맵을 늘이고 줄여서 여러 크기의 화면에 적용할 수 있도록 하기 위함입니다. 예를 들어 800 x 600으로 설계된 맵을 1600 x 1200, 400 x 300 등으로 늘리고 줄여서 적용할 수 있습니다. 스타디움의 종횡비가 같을 필요는 없습니다. 비율이 달라져도 올바르게 확대/축소됩니다.

Stadium을 초기화하면 `element`에는 다음과 같은 변화가 생깁니다

1. `position`이 `relative`로 설정됩니다
2. `width`와 `height`가 `actualSize`의 값으로 설정됩니다

### Sprite 추가하기

[Sprite 자세히 알아보기](./API/classes/Sprite.md)

Sprite는 맵에 표시되는 각 개체입니다.

#### ImageSprite

[ImageSprite 자세히 알아보기](./API/classes/ImageSprite.md)
이미지를 표시할 수 있는 스프라이트입니다.

```typescript
const src = "/asset/eth.png";

// 크기 설정
const size = {
  width: 80,
  height: 80,
};

// 위치 설정
const position = {
  left: 160,
  top: 220,
};

const image = new ImageSprite({ src, size, position });
stage.add(image);
```

다음과 같이 사용할 수 있습니다:

- 사용자가 조종할 수 있는 캐릭터
- 캐릭터가 획득할 수 있는 아이템

#### SensorLine

[SensorLine 자세히 알아보기](./API/classes/SensorLine.md)

맵에 선을 그을 수 있습니다. 다양한 상호작용을 구현하기 위해 사용합니다.

```typescript
const points = {
  p1: { left: 40, top: 50 },
  p2: { left: 320, top: 120 },
};

const line = new SensorLine(points);
stage.add(line);
```

다음과 같이 사용할 수 있습니다:

- 이미지 스프라이트가 접근할 수 없는 구역을 설정
- 이미지 스프라이트가 선을 통과했는지 확인하기

### Hook 이해하기

[Hook 자세히 알아보기](./API/classes/Hook.md)

`Hook`으로 ImageSprite의 기능을 확장합니다. 다음과 같은 Hook이 제공됩니다.

1. **Animate**  
   ImageSprite의 위치를 부드럽게 조작할 수 있습니다.

```typescript
const animate = new Animate();
sprite.use([animate]);
animate.moveBy(80, 0);
```

2. **DetectLineCrossing**  
   ImageSprite가 SensorLine을 지났는지 검사하고, 이동을 제한하거나 특정 동작을 실행할 수 있습니다.

```typescript
const detector = new DetectLineCrossing({
  blockMove: true,
  clearMovePathAfterBlocking: true,
});

line.tags.push(detector.targetTag);

detector.pubsub.sub("blocked", () => {
  console.log("Blocked by line");
});

sprite.use([detector]);
```

3. **LoopSprite**  
   ImageSprite에 여러 이미지를 반복적으로 표시할 수 있습니다.

```typescript
const loopSprite = new LoopSprite(spriteSheet);

sprite.use([loopSprite]);

loopSprite.state = "laugh";
```

4. **LoopSpriteByDirection** (Inherits LoopSprite)  
   Animate Hook을 사용해 ImageSprite의 위치를 조작할 때, 이동 방향에 알맞은 스프라이트를 표시할 수 있습니다. (오른쪽으로 이동하는 이미지, 왼쪽으로 이동하는 이미지 등..)

```typescript
sprite.use([new LoopSpriteByDirection(spriteSheet)]);
```

5. **MoveableSprite** (powered by [daybrush/moveable](https://github.com/daybrush/moveable))  
   ImageSprite의 위치를 드래그앤 드랍으로 이동할 수 있게 합니다.

```typescript
sprite.use([new MoveableSprite()]);
```

6. **Nearness**  
   스프라이트가 다른 스프라이트에 근접했는지를 확인하고, 특정 동작을 실행할 수 있습니다.

```typescript
const targetTags = ["block"];
const distance = 10;

const handler = (source: Sprite, target: Sprite) => {};

sprite.use([new Nearness({ targetTags, distance, handler })]);
```
