import { Sprite } from ".";
import { Position } from "./position";
import { Line, Point, isLine } from "../type";

/**
 * 다른 스프라이트의 접근 혹은 통과를 감지할 수 있는 스프라이트입니다.
 *
 * ```ts
 * const point1 = { left: 40,  top: 50  }
 * const point2 = { left: 320, top: 120 }
 *
 * const points = { p1: point1, p2: point2 }
 *
 * const line = new SensorLine(points);
 * ```
 */

export class SensorLine extends Sprite implements Line {
  /**
   * SensorLine의 태그입니다. 모든 SensorLine은 이 태그를 가집니다.
   */
  static TAG = "sensorLine";

  /**
   * SensorLine의 DOM 엘리먼트입니다. div 엘리먼트로 그려집니다.
   */
  element = document.createElement("div");
  tags = [SensorLine.TAG];

  public p1: Point;
  public p2: Point;

  /**
   * Line에서 새 SensorLine 인스턴스를 생성합니다. Position은 두 점의 중간지점으로 설정됩니다.
   */
  constructor(line: Line) {
    if (!isLine(line)) throw new Error("line must implement Line");
    const { p1, p2 } = line;

    const center = new Position((p1.left + p2.top) / 2, (p1.left + p2.top) / 2);
    super(center);

    this.p1 = p1;
    this.p2 = p2;
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
