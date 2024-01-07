Stadium은 코딩 교육용 웹 게임을 쉽게 개발할 수 있도록 도와주는 UI 라이브러리입니다.

```typescript
import { Stadium } from "@horangedu/stadium";
import {
  LineCrossingDetector,
  MoveableSprite,
  Animate,
  Nearness,
  LoopSpriteByDirection,
} from "@horangedu/stadium/hooks";

const element = document.getElementById("stadium");
const stadium = new Stadium(element);

const dog = new ImageSprite("dog.png", 80, 80, 40, 40);
const eth = new ImageSprite("eth.png", 40, 40, 200, 200);

etg.tags.push("eth");

harangSprite.use([
  new MoveableSprite(),
  lineCrossingDetector,
  new Animate(),
  new Nearness(["eth"], 10, onGetEth),
  new LoopSpriteByDirection(harang),
]);

function onGetEth() {
  alert("이더리움을 획득했습니다!");
}

stadium.addSprite(harang);
stadium.addSprite(eth);

animate.moveBy(0, 80);
animate.moveBy(80, 0);
```

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
const width = 80;
const height = 80;

// 위치 설정
const left = 40;
const top = 40;

const image = new ImageSprite(src, width, height, left, top);

stage.addSprite(image);
```

다음과 같이 사용할 수 있습니다:

- 사용자가 조종할 수 있는 캐릭터
- 캐릭터가 획득할 수 있는 아이템

> [!TIP]  
> 눈에 보이는 대부분의 개체는 ImageSprite입니다

#### SensorLine

[SensorLine 자세히 알아보기](./API/classes/SensorLine.md)
맵에 선을 그을 수 있습니다. 다양한 상호작용을 구현하기 위해 사용합니다.

```typescript
const point1 = { left: 40, top: 50 };
const point2 = { left: 320, top: 120 };

const line = new SensorLine(point1, point2);
stage.addSprite(line);
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

2. **LineCrossingDetector**  
   ImageSprite가 SensorLine을 지났는지 검사하고, 이동을 제한하거나 특정 동작을 실행할 수 있습니다.

```typescript
line.tags.push(LineCrossingDetector.LINE_TAG);

const lineCrossingDetector = new LineCrossingDetector({
  blockMove: true,
  clearMovePathAfterBlocking: true,
});

lineCrossingDetector.pubsub.sub("blocked", () => {
  console.log("Blocked by line");
});

sprite.use([lineCrossingDetector]);
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
const tags = ["block"];
const threshold = 10;

const onNear = (source: Sprite, target: Sprite) => {};

sprite.use([new Nearness(tags, threshold, onNear)]);
```
