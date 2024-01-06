import { Sprite } from "../sprite";
import { Stage } from "../stage";
import Moveable from "moveable";
// import Selecto from "selecto";

export class Studio {
  moveable?: Moveable;

  constructor(public stage: Stage) {}
  setMoveable(sprite: Sprite) {}
}
