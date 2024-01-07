import { Sprite } from "../sprite";
import { Position } from "../sprite/position";
import { Line, Point } from "../type";

export class SensorLine extends Sprite implements Line {
  static TAG = "sensorLine";

  element = document.createElement("div");
  tags = [SensorLine.TAG];

  constructor(public p1: Point, public p2: Point) {
    const center = new Position((p1.left + p2.top) / 2, (p1.left + p2.top) / 2);
    super(center);
  }

  draw(): void {
    const { p1, p2 } = this;

    const xRatio = this.stadium!.element.style.getPropertyValue("--x-ratio");
    const yRatio = this.stadium!.element.style.getPropertyValue("--y-ratio");

    const r1 = {
      left: p1.left * Number(xRatio),
      top: p1.top * Number(yRatio),
    };

    const r2 = {
      left: p2.left * Number(xRatio),
      top: p2.top * Number(yRatio),
    };

    const width = Math.sqrt(
      Math.pow(r2.left - r1.left, 2) + Math.pow(r2.top - r1.top, 2)
    );

    const angle = Math.atan2(r2.top - r1.top, r2.left - r1.left);

    const style = this.element.style;

    style.setProperty("position", "absolute");
    style.setProperty("height", "1px");

    style.setProperty("background-color", "red");
    style.setProperty("transform-origin", "0 0");

    style.setProperty("width", `${width}px`);

    style.setProperty("transform", `rotate(${angle}rad)`);

    style.setProperty("left", `${r1.left}px`);
    style.setProperty("top", `${r1.top}px`);
  }
}
