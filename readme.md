Stadium은 학습용 웹 게임을 쉽게 개발할 수 있도록 도와주는 UI 라이브러리입니다.

```typescript
import { Stage } from "@horangedu/stadium";
import {
  LineCrossingDetector,
  MoveableSprite,
  Animate,
  Nearness,
  LoopSpriteByDirection,
} from "@horangedu/stadium/hooks";

const element = document.getElementById("stage");
const stage = new Stage(element);

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

stage.addSprite(harang);
stage.addSprite(eth);

animate.moveBy(0, 80);
animate.moveBy(80, 0);
```
