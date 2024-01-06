import { Hook } from "./hook";
import { PubSub } from "../pubsub";
import { Line } from "../sensorLine";
import { Sprite } from "../sprite";
import { Point } from "../type";

// Animate, Locator를 통해 스프라이트가 이동할 때, BlockLine을 지나게 되는지 검사하는 훅

export class LineCrossingDetector extends Hook {
  static LINE_TAG = "blockline";

  pubsub = new PubSub(["crossed", "blocked"] as const);

  constructor(
    public behavior: {
      blockMove?: boolean;
      clearMovePathAfterBlocking?: boolean;
    }
  ) {
    super();
  }

  onMount(sprite: Sprite) {
    super.onMount(sprite);
  }

  isCrossing(target: Point) {
    const blockLines = this.sprite.stadium!.sprites.filter((sprite) => {
      return sprite.tags.includes(LineCrossingDetector.LINE_TAG);
    });

    for (const _blockLine of blockLines) {
      const blockLine = Line.parse(_blockLine);

      if (isIntersecting({ p1: this.sprite.position, p2: target }, blockLine)) {
        return true;
      }
    }

    return false;
  }
}

function isIntersecting(a: Line, b: Line) {
  const { p1: a1, p2: a2 } = a;
  const { p1: b1, p2: b2 } = b;

  const denominator =
    (a2.top - a1.top) * (b2.left - b1.left) -
    (a2.left - a1.left) * (b2.top - b1.top);

  if (denominator === 0) return false;

  const ua =
    ((a2.left - a1.left) * (b1.top - a1.top) -
      (a2.top - a1.top) * (b1.left - a1.left)) /
    denominator;
  const ub =
    ((b2.left - b1.left) * (b1.top - a1.top) -
      (b2.top - b1.top) * (b1.left - a1.left)) /
    denominator;

  if (ua < 0 || ua > 1 || ub < 0 || ub > 1) return false;

  return true;
}
