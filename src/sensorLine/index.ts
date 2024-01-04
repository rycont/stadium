import { Sprite } from "../sprite";
import { Position } from "../sprite/position";
import { Point } from "../type";

export interface Line {
  p1: Point;
  p2: Point;
}

export class SensorLine extends Sprite implements Line {
  static TAG = "sensorLine";
  tags = [SensorLine.TAG];
  position: Position;

  constructor(public p1: Point, public p2: Point) {
    super();

    const element = document.createElement("div");
    this.element = element;

    element.style.position = "absolute";

    const width = Math.sqrt(
      Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)
    );

    const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);

    element.style.setProperty("width", `${width}px`);
    element.style.setProperty("height", "1px");

    element.style.setProperty("background-color", "red");
    element.style.setProperty("transform", `rotate(${angle}rad)`);
    element.style.setProperty("transform-origin", "0 0");

    element.style.setProperty("left", `${p1.x}px`);
    element.style.setProperty("top", `${p1.y}px`);

    this.position = new Position(this, p1.x, p1.y);
  }

  public distance(point: Point): number {
    const { p1, p2 } = this;
    const { x: x1, y: y1 } = p1;

    const x2 = p2.x - x1;
    const y2 = p2.y - y1;

    const x0 = point.x;
    const y0 = point.y;

    const numerator = Math.abs(y2 * x0 - x2 * y0 + p2.x * p1.y - p2.y * p1.x);
    const denominator = Math.sqrt(y2 ** 2 + x2 ** 2);

    const distance = numerator / denominator;
    return distance;
  }
}
