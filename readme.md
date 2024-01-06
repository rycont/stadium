Stadium은 학습용 웹 게임을 쉽게 개발할 수 있도록 도와주는 UI 라이브러리입니다.

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

## Document

### Stadium

스프라이트가 배치될 수 있는 공간입니다.

```typescript
const stadium = new Stadium(
  // element: 스타디움에 사용할 HTML 엘리먼트
  document.getElementById("stadium"),

  // DesignedSize: 스타디움의 크기
  { width: 400, height: 400 },

  // (Optional) ActualSize: 실제 렌더링될 엘리먼트의 크기
  { width: 800, height: 800 }
);
```

ActualSize를 지정하지 않으면 DesignedSize와 동일한 크기로 렌더링됩니다.

> **ActualSize와 DesignedSize를 별도로 구현한 이유는 무엇인가요?**  
> 하나의 사이즈로 만들어진 맵을 늘이고 줄여서 여러 크기의 화면에 적용할 수 있도록 하기 위함입니다. 예를 들어 800 x 600으로 설계된 맵을 1600 x 1200, 400 x 300 등으로 늘리고 줄여서 적용할 수 있습니다. 스타디움의 종횡비가 같을 필요는 없습니다. 비율이 달라져도 올바르게 확대/축소됩니다.
