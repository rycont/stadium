import Moveable, { MoveableOptions } from "moveable";
import Selecto from "selecto";

import { Line, SensorLine } from "../sensorLine";
import { Sprite } from "../sprite";
import { MoveTo } from "../sprite/position";
import { Point } from "../type";
import { nearnessDetector } from "./nearnessDetector";

export class Stage {
  onSpriteMoveEventListeners: ((move: MoveTo) => void)[] = [];
  onSpriteAddEventListeners: ((sprite: Sprite) => void)[] = [];

  nearnessDetector = new nearnessDetector(this);
  sprites: Sprite[] = [];

  constructor(public element: HTMLDivElement) {
    this.element.style.setProperty("position", "relative");
  }

  addSprite(sprite: Sprite) {
    this.element.appendChild(sprite.element);
    this.sprites.push(sprite);
    sprite.onMount(this, crypto.randomUUID());
    this.nearnessDetector.addSprite(sprite);
    this.onSpriteAddEventListeners.forEach((listener) => listener(sprite));
  }

  onSpriteAdd(listener: (sprite: Sprite) => void) {
    this.onSpriteAddEventListeners.push(listener);
  }

  canMoveTo(sprite: Sprite, to: Point) {
    const movingLine: Line = {
      p1: sprite.position!,
      p2: to,
    };

    const blockingLines = this.sprites.filter<SensorLine>(
      (s): s is SensorLine =>
        s.tags.includes("block") && s instanceof SensorLine
    );

    for (const blockingLine of blockingLines) {
      if (isIntersecting(movingLine, blockingLine)) return false;
    }

    return true;
  }

  removeSprite(sprite: Sprite) {
    this.sprites = this.sprites.filter((s) => s !== sprite);
    this.nearnessDetector.removeSprite(sprite);
  }
}

function isIntersecting(a: Line, b: Line) {
  const { p1: a1, p2: a2 } = a;
  const { p1: b1, p2: b2 } = b;

  const denominator =
    (a2.y - a1.y) * (b2.x - b1.x) - (a2.x - a1.x) * (b2.y - b1.y);

  if (denominator === 0) return false;

  const ua =
    ((a2.x - a1.x) * (b1.y - a1.y) - (a2.y - a1.y) * (b1.x - a1.x)) /
    denominator;
  const ub =
    ((b2.x - b1.x) * (b1.y - a1.y) - (b2.y - b1.y) * (b1.x - a1.x)) /
    denominator;

  if (ua < 0 || ua > 1 || ub < 0 || ub > 1) return false;

  return true;
}
