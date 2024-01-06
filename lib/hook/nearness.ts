import { Hook } from "./hook";
import { SensorLine } from "../sensorLine";
import { ImageSprite, Sprite } from "../sprite";
import { Point } from "../type";

export class Nearness extends Hook {
  constructor(
    public targetTags: string[],
    public threshold: number = 20,
    public handler: (source: Sprite, target: Sprite) => void
  ) {
    super();
  }

  onMount(sprite: Sprite) {
    super.onMount(sprite);
    sprite.stadium?.pubsub.sub("spriteMove", () => this.onMove());
  }

  private onMove() {
    const targets = this.sprite.stadium!.sprites.filter((sprite) => {
      return this.targetTags.some((tag) => sprite.tags.includes(tag));
    });

    if (!targets) return;

    for (const target of targets) {
      const distance = getDistanceBetween(this.sprite, target);

      if (distance < this.threshold) {
        this.handler(this.sprite, target);
      }
    }
  }

  onDestroy() {}
}

function getDistanceBetween(a: Sprite, b: Sprite) {
  if (a instanceof ImageSprite && b instanceof ImageSprite) {
    return euclideanDistance(a.position, b.position);
  }

  if (a instanceof ImageSprite && b instanceof SensorLine) {
    return distanceFromLine(a.position, b);
  }

  if (a instanceof SensorLine && b instanceof ImageSprite) {
    return distanceFromLine(b.position, a);
  }

  throw new Error("Invalid sprite type");
}

function euclideanDistance(a: Point, b: Point) {
  return Math.sqrt(Math.pow(a.left - b.left, 2) + Math.pow(a.top - b.top, 2));
}

function distanceFromLine(p: Point, line: SensorLine) {
  const { p1, p2 } = line;

  const distanceFromP1 = euclideanDistance(p, p1);
  const distanceFromP2 = euclideanDistance(p, p2);

  const lineLength = euclideanDistance(p1, p2);

  if (distanceFromP1 > lineLength) {
    return distanceFromP1;
  }

  if (distanceFromP2 > lineLength) {
    return distanceFromP2;
  }

  const x0 = p.left;
  const y0 = p.top;

  const x1 = p1.left;
  const y1 = p1.top;

  const x2 = p2.left;
  const y2 = p2.top;

  const numerator = Math.abs(
    (y2 - y1) * x0 - (x2 - x1) * y0 + x2 * y1 - y2 * x1
  );

  const denominator = Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2));
  const distance = numerator / denominator;

  return distance;
}
