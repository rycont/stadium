import {
  Stadium,
  ImageSprite,
  SensorLine,
  Line,
  Animate,
  DetectLineCrossing,
  Nearness,
} from "../lib/main";
import harang from "./harang";

const element = document.getElementById("stadium")! as HTMLDivElement;
const stadium = new Stadium(element, {
  width: 800,
  height: 640,
});

const harangSprite = new ImageSprite({
  src: harang.idle[0],
  position: {
    left: 400,
    top: 320,
  },
  size: {
    width: 80,
    height: 80,
  },
});

stadium.add(harangSprite);

const animate = new Animate();
harangSprite.use([animate]);

const detector = new DetectLineCrossing({
  blockMove: true,
});
harangSprite.use([detector]);

const lines: Line[] = [
  {
    p1: {
      left: 50,
      top: 50,
    },
    p2: {
      left: 250,
      top: 50,
    },
  },
  {
    p1: {
      left: 250,
      top: 50,
    },
    p2: {
      left: 250,
      top: 250,
    },
  },
  {
    p1: {
      left: 250,
      top: 250,
    },
    p2: {
      left: 50,
      top: 250,
    },
  },
  {
    p1: {
      left: 50,
      top: 250,
    },
    p2: {
      left: 50,
      top: 50,
    },
  },
];

for (const line of lines) {
  const sensorLine = new SensorLine(line);
  sensorLine.tags.push(detector.targetTag);

  stadium.add(sensorLine);
}

addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    animate.moveBy(-100, 0);
  } else if (e.key === "ArrowRight") {
    animate.moveBy(100, 0);
  } else if (e.key === "ArrowUp") {
    animate.moveBy(0, -100);
  } else if (e.key === "ArrowDown") {
    animate.moveBy(0, 100);
  }
});

const eth = new ImageSprite({
  src: "/asset/eth.png",
  position: {
    left: 600,
    top: 320,
  },
  size: {
    width: 40,
    height: 40,
  },
});

stadium.add(eth);

eth.tags.push("eth");

const near = new Nearness({
  targetTags: ["eth"],
  distance: 10,
  handler: (sprite, target) => {
    console.log(sprite, target);
  },
});

harangSprite.use([near]);
