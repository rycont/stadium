import { PubSub } from "../pubsub";
import { Sprite } from "../sprite";
import { Line, Point, isLine } from "../type";
import { Hook } from "./hook";

/**
 * 스프라이트가 [Animate](/docs/api/classes/Animate) 훅을 통해 이동할 때 [SensorLine](./docs/api/classes/Animate)을
 * 지나치게 되는지를 검사하는 Hook입니다. `LineCrossingDetector.LINE_TAG`를 태그로 가지는
 * SensorLine만 검사 대상입니다.
 *
 * ```ts
 * const sprite = new ImageSprite("image", 10, 10, 0, 100);
 *
 * const lineCrossingDetector = new LineCrossingDetector({
 *     blockMove: true
 * });
 * const animte = new Animate();
 *
 * const line = new SensorLine({ left: 0, top: 0 }, { left: 100, top: 100 });
 * line.tags.push(LineCrossingDetector.LINE_TAG);
 *
 * sprite.use([ lineCrossingDetector, animate ]);
 *
 * lineCrossingDetector.pubsub.sub("blocked", (from: Point, to: Point) => {
 *     console.log(from, "에서", to, "로 이동하려 했으나 라인에 막혔습니다.");
 * })
 *
 * animate.moveTo(100, 0) // { left: 0, top: 100 }에서 { left: 100, top: 0 }으로 이동하려 했으나 라인에 막혔습니다.
 * ```
 */
export class LineCrossingDetector extends Hook {
  /**
   * `SensorLine`에 `LineCrossingDetector.LINE_TAG` 태그가 붙어있어야 감지할 수 있습니다.
   *
   * ```ts
   * const line = new SensorLine({ left: 0, top: 0 }, { left: 100, top: 100 });
   * line.tags.push(LineCrossingDetector.LINE_TAG);
   * ```
   */
  public static LINE_TAG = "blockline";

  /**
   * `crossed`, `blocked` 이벤트를 생성하는 PubSub 인스턴스입니다.
   *
   * - 스프라이트가 `target`으로 이동할 때 `SensorLine`을 지나치게 되면 `crossed` 이벤트를 생성합니다.
   * - 만일 `behavior.blockMove`가 `true`여서 이동이 가로막혔다면 `blocked` 이벤트를 생성합니다.
   *
   * ```ts
   * lineCrossingDetector.pubsub.sub("crossed", (from: Point, to: Point) => {
   *     console.log(from, "에서", to, "로 이동하며 라인을 지났습니다.");
   * });
   *
   * lineCrossingDetector.pubsub.sub("blocked", (from: Point, to: Point) => {
   *     console.log(from, "에서", to, "로 이동하려 했으나 라인에 막혔습니다.");
   * });
   * ```
   */
  public pubsub = new PubSub<["crossed", "blocked"]>();

  /**
   * LineCrossingDetector 클래스의 인스턴스를 생성합니다.
   * @param behavior.blockMove Animate의 이동 경로에 SensorLine이 있을 때, 이동할 수 없도록 합니다.
   * @param behavior.clearMovePathAfterBlocking Animate가 LineCrossingDetector에 의해 가로막혔을 때, 나머지 이동 대기열을 비웁니다.
   */
  constructor(
    public behavior: {
      blockMove?: boolean;
      clearMovePathAfterBlocking?: boolean;
    }
  ) {
    super();
  }

  public onMount(sprite: Sprite) {
    super.onMount(sprite);
  }

  /**
   * 스프라이트가 `target`으로 이동할 때 `SensorLine`을 지나치는지 검사합니다.
   * @param target 이동할 목적지입니다.
   * @returns 라인을 건너는지 여부를 나타내는 불리언 값입니다.
   *
   * ```ts
   * const lineCrossingDetector = new LineCrossingDetector({});
   * const sprite = new ImageSprite(...);
   *
   * sprite.use([lineCrossingDetector]);
   *
   * const line = new SensorLine({ left: 0, top: 0 }, { left: 100, top: 100 });
   * line.tags.push(LineCrossingDetector.LINE_TAG);
   *
   * lineCrossingDetector.isCrossing({ left: 50, top: 50 }); // true
   * ```
   */
  isCrossing(target: Point) {
    const blockLines = this.sprite.stadium!.sprites.filter(
      (sprite): sprite is Sprite & Line =>
        sprite.tags.includes(LineCrossingDetector.LINE_TAG) && isLine(sprite)
    );

    for (const _blockLine of blockLines) {
      const blockLine = _blockLine;

      if (isIntersecting({ p1: this.sprite.position, p2: target }, blockLine)) {
        return true;
      }
    }

    return false;
  }
}

/**
 * 두 선분이 교차하는지 여부를 확인합니다.
 *
 * ```ts
 * const line1 = new Line({ left: 0, top: 0 }, { left: 100, top: 100 });
 * const line2 = new Line({ left: 0, top: 100 }, { left: 100, top: 0 });
 *
 * isIntersecting(line1, line2); // true
 * ```
 *
 * @param a 첫 번째 선분
 * @param b 두 번째 선분
 * @returns 교차 여부
 */
export function isIntersecting(a: Line, b: Line) {
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
