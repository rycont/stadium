import { z } from "zod";
import { Sprite } from "../sprite";
import { Position } from "../sprite/position";
import { Point } from "../type";

export const Line = z.object({
  p1: Point,
  p2: Point,
});

export type Line = z.infer<typeof Line>;

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

    const width = Math.sqrt(
      Math.pow(p2.left - p1.left, 2) + Math.pow(p2.top - p1.top, 2)
    );

    const angle = Math.atan2(p2.top - p1.top, p2.left - p1.left);

    const style = this.element.style;

    style.setProperty("position", "absolute");
    style.setProperty("height", "1px");

    style.setProperty("background-color", "red");
    style.setProperty("transform-origin", "0 0");

    style.setProperty("width", `${width}px`);
    style.setProperty("transform", `rotate(${angle}rad)`);
    style.setProperty("left", `${p1.left}px`);
    style.setProperty("top", `${p1.top}px`);
  }
}
