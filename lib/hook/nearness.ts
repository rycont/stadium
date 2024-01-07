import { Hook } from "./hook";
import { SensorLine } from "../sensorLine";
import { ImageSprite, Sprite } from "../sprite";
import { Point } from "../type";

/**
 * Nearness는 Sprite와 다른 Sprite 사이 거리의 근접을 감지하는 Hook입니다.
 * 
 * ```ts
 * const me = new ImageSprite(...);
 * 
 * const enemy1 = new ImageSprite(...);
 * const enemy2 = new ImageSprite(...);
 * 
 * enemy1.tags.push("enemy");
 * enemy2.tags.push("enemy");
 * 
 * me.use([
 *     new Nearness(["enemy"], 20, onNearEnemy),
 * ]);
 * 
 * function onNearEnemy(me: Sprite, enemy: Sprite) {
 *     console.log("Near enemy!");
 * }
 * ```
 */
export class Nearness extends Hook {
  /**
   * ```ts
   * new Nearness(["enemy"], 20, onNearEnemy),
   * ```
   * @param targetTags 근접을 감지할 태그
   * @param threshold  감지 거리
   * @param handler    근접을 감지했을 때 호출할 함수
   */
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

  onDestroy() { }
}

/**
 * 두 Sprite 사이의 거리를 구합니다.
 * 
 * ```ts
 * const me = new ImageSprite(...);
 * const enemy = new ImageSprite(...);
 * 
 * const distance = getDistanceBetween(me, enemy);
 * ```
 * 
 * @param a
 * @param b 
 * @returns Sprite 사이의 거리
 */

export function getDistanceBetween(a: Sprite, b: Sprite) {
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
