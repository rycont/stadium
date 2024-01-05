import { Sprite } from "../sprite";
import { Position } from "../sprite/position";
import { Point } from "../type";

export interface Line {
  p1: Point;
  p2: Point;
}

export class SensorLine extends Sprite implements Line {
  static TAG = "sensorLine";

  element = document.createElement("div");
  tags = [SensorLine.TAG];

  position: Position;

  constructor(public p1: Point, public p2: Point) {
    super();

    this.position = new Position(this, p1.x, p1.y);

    const width = Math.sqrt(
      Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)
    );

    const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);

    const style = this.element.style;

    style.setProperty("position", "absolute");
    style.setProperty("height", "1px");

    style.setProperty("background-color", "red");
    style.setProperty("transform-origin", "0 0");

    style.setProperty("width", `${width}px`);
    style.setProperty("transform", `rotate(${angle}rad)`);
    style.setProperty("left", `${p1.x}px`);
    style.setProperty("top", `${p1.y}px`);
  }
}
