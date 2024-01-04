import { ImageSprite } from "./sprite";
import { Stage } from "./stage";

import harang from "./asset/harang";
import eth from "./asset/eth.png";
import { SensorLine } from "./sensorLine";

const element = document.getElementById("stage")!;

const stage = new Stage(element);
const harangSprite = new ImageSprite(harang, 80, 80, 40, 40);

const ethSprite1 = new ImageSprite(eth, 40, 40, 200, 200);
ethSprite1.tags.push("eth");

const ethSprite2 = new ImageSprite(eth, 40, 40, 360, 200);
ethSprite2.tags.push("eth");

stage.addSprite(harangSprite);
stage.addSprite(ethSprite1);
stage.addSprite(ethSprite2);

const line = new SensorLine({ x: 40, y: 50 }, { x: 320, y: 120 });
line.tags.push("block");

stage.addSprite(line);

stage.nearnessDetector.addRule({
  distance: 10,
  source: harangSprite,
  targetTag: "eth",
  callback(_, target) {
    alert("이더리움을 획득했습니다!");
    target.destroy();
  },
});

addEventListener("keydown", (e) => {
  const key = e.key;

  if (key === "ArrowUp") {
    harangSprite.position.moveBy(0, -80);
  } else if (key === "ArrowDown") {
    harangSprite.position.moveBy(0, 80);
  } else if (key === "ArrowLeft") {
    harangSprite.position.moveBy(-80, 0);
  } else if (key === "ArrowRight") {
    harangSprite.position.moveBy(80, 0);
  }
});
