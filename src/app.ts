import { ImageSprite, Stadium } from "../lib/main";
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

stadium.addSprite(harangSprite);
