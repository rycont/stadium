import { ImageSprite } from "./sprite";
import { Stage } from "./stage";

import { LineCrossingDetector } from "./hook/lineCrossingDetector";
import { LoopSpriteByDirection } from "./hook/loopSprite";
import { MoveableSprite } from "./hook/moveable";
import { Nearness } from "./hook/nearness";
import { SensorLine } from "./sensorLine";
import { Animate } from "./hook/animate";
import harang from "./asset/harang";
import eth from "./asset/eth.png";

const element = document.getElementById("stage")! as HTMLDivElement;

const stage = new Stage(element);

const line = new SensorLine({ left: 40, top: 50 }, { left: 320, top: 120 });
const harangSprite = new ImageSprite(harang.idle[0], 80, 80, 40, 40);
const ethSprite1 = new ImageSprite(eth, 40, 40, 200, 200);
const ethSprite2 = new ImageSprite(eth, 40, 40, 360, 200);

ethSprite1.tags.push("eth");
ethSprite2.tags.push("eth");
line.tags.push(LineCrossingDetector.LINE_TAG);

stage.addSprite(harangSprite);
stage.addSprite(ethSprite1);
stage.addSprite(ethSprite2);
stage.addSprite(line);

const lineCrossingDetector = new LineCrossingDetector({
  blockMove: true,
  clearMovePathAfterBlocking: true,
});

lineCrossingDetector.pubsub.sub("blocked", () => {
  console.log("Blocked by line");
});

const animate = new Animate();

harangSprite.use([
  new MoveableSprite(),
  lineCrossingDetector,
  animate,
  new Nearness(["eth"], 10, () => {
    console.log("이더리움을 획득했습니다!");
  }),
  new Nearness(["block"], 10, () => {
    console.log("차단선에 가까워짐");
  }),
  new LoopSpriteByDirection(harang),
]);

addEventListener("keydown", (e) => {
  const key = e.key;

  if (key === "ArrowUp") {
    animate.moveBy(0, -80);
  } else if (key === "ArrowDown") {
    animate.moveBy(0, 80);
  } else if (key === "ArrowLeft") {
    animate.moveBy(-80, 0);
  } else if (key === "ArrowRight") {
    animate.moveBy(80, 0);
  }
});
