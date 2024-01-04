import { z } from "zod";
import { Stage } from ".";
import { ImageSprite, Sprite } from "../sprite";
import { Point } from "../type";
import { MoveTo, Position } from "../sprite/position";
import { SensorLine } from "../sensorLine";

export interface NearnessRules {
  source: Sprite;
  targetTag: string;
  distance: number;
  callback: (source: Sprite, target: Sprite) => void;
}

export class nearnessDetector {
  private rules: NearnessRules[] = [];

  constructor(private stage: Stage) {}

  public addRule(rule: NearnessRules) {
    this.rules.push(rule);
  }

  public addSprite(sprite: Sprite) {
    sprite.position?.onMove(() => this.checkRules(sprite));
  }

  private checkRules(sprite: Sprite) {
    const rules = this.rules.filter((rule) => rule.source === sprite);

    for (const rule of rules) {
      const targetSprites = this.stage.sprites.filter((sprite) =>
        sprite.tags.includes(rule.targetTag)
      );

      for (const targetSprite of targetSprites) {
        if (!targetSprite.position) continue;
        const distanceFunction = getDistanceFunction(sprite, targetSprite);

        const distance = distanceFunction(sprite, targetSprite);
        if (distance <= rule.distance) {
          rule.callback(rule.source, targetSprite);
        }
      }
    }
  }

  removeSprite(sprite: Sprite) {
    this.rules = this.rules.filter((rule) => rule.source !== sprite);
  }
}

function getDistanceFunction(a: Sprite, b: Sprite) {
  if (a instanceof ImageSprite && b instanceof ImageSprite) {
    return euclideanImageDistnace;
  }

  if (a instanceof ImageSprite && b instanceof SensorLine) {
    return (s1: ImageSprite, s2: SensorLine) => distanceFromPointToLine(s1, s2);
  }

  if (a instanceof SensorLine && b instanceof ImageSprite) {
    return (s1: SensorLine, s2: ImageSprite) => distanceFromPointToLine(s2, s1);
  }

  throw new Error("not implemented");
}

function euclidean(p1: Point, p2: Point) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;

  return Math.sqrt(dx ** 2 + dy ** 2);
}

function euclideanImageDistnace(s1: ImageSprite, s2: ImageSprite) {
  const p1 = s1.position!;
  const p2 = s2.position!;

  return euclidean(p1, p2);
}

function distanceFromPointToLine(s1: ImageSprite, s2: SensorLine) {
  const { p1, p2 } = s2;
  const { x: x1, y: y1 } = p1;

  const x2 = p2.x - x1;
  const y2 = p2.y - y1;

  const x0 = s1.position!.x;
  const y0 = s1.position!.y;

  const numerator = Math.abs(y2 * x0 - x2 * y0 + p2.x * p1.y - p2.y * p1.x);
  const denominator = Math.sqrt(y2 ** 2 + x2 ** 2);

  const distance = numerator / denominator;

  const distanceFromP1 = euclidean(s1.position!, p1);
  const distanceFromP2 = euclidean(s1.position!, p2);

  const lineLength = euclidean(p1, p2);

  if (distanceFromP1 > lineLength) return distanceFromP2;
  if (distanceFromP2 > lineLength) return distanceFromP1;

  return distance;
}

// const distanceFunctionScheme = z.function(
//   z.tuple([
//     z.object({
//       x: z.number(),
//       y: z.number(),
//     }),
//   ]),
//   z.number()
// );
