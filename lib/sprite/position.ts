import { PubSub } from "../pubsub";
import { Point } from "../type";

/**
 * ```ts
 * const position = new Position(40, 50)
 *
 * position.pubsub.sub('set', (changed, movement) => { /* ... *\/ })
 *
 * position.left = 40
 * position.top = 50
 *
 * position.set(40, 50)
 * ```
 * 위치를 다루는 클래스입니다.
 */

export class Position implements Point {
  /**
   * 이벤트를 생성하고 구독하는 PubSub 인스턴스입니다.
   * `set` 이벤트가 생성됩니다.
   *
   * ```ts
   * type handler = (changed: (|"left"|"top")[], movement: {
   *   prev: Point,
   *   current: Point
   * }): void
   *
   * position.pubsub.sub('set', (changed, movement) => {
   *  console.log(changed, movement.prev, movement.current)
   * })
   * ```
   */
  pubsub = new PubSub<{
    set: (
      changed: ("left" | "top")[],
      movement: { prev: Point; current: Point }
    ) => void;
  }>();

  /**
   * 새 Position 인스턴스를 생성합니다.
   * @param _left 가로방향 위치
   * @param _top 세로방향 위치
   */

  constructor(public _left: number, public _top: number) {
    if (typeof _left !== "number") throw new Error("left must be number");
    if (typeof _top !== "number") throw new Error("top must be number");
  }

  /**
   * 가로방향 위치를 설정합니다. `set` 이벤트가 발생합니다.
   *
   * ```ts
   * position.left = 40
   * ```
   */

  set left(value: number) {
    const prev = {
      left: this._left,
      top: this._top,
    };

    this._left = value;

    const current = {
      left: this._left,
      top: this._top,
    };

    this.pubsub.pub("set", [
      ["left"],
      {
        prev,
        current,
      },
    ]);
  }

  /**
   * 가로방향 위치를 가져옵니다.
   *
   * ```ts
   * const left = position.left
   * ```
   */

  get left() {
    return this._left;
  }

  /**
   * 세로방향 위치를 설정합니다. `set` 이벤트가 발생합니다.
   *
   * ```ts
   * position.top = 40
   * ```
   */

  set top(value: number) {
    const prev = {
      left: this._left,
      top: this._top,
    };

    this._top = value;

    const current = {
      left: this._left,
      top: this._top,
    };

    this.pubsub.pub("set", [
      ["top"],
      {
        prev,
        current,
      },
    ]);
  }

  /**
   * 세로방향 위치를 가져옵니다.
   *
   * ```ts
   * const top = position.top
   * ```
   */

  get top() {
    return this._top;
  }

  /**
   * 가로방향 위치와 세로방향 위치를 설정합니다. `set` 이벤트가 발생합니다.
   *
   * ```ts
   * position.set(40, 50)
   * ```
   */

  set(left: number, top: number) {
    const prev = {
      left: this._left,
      top: this._top,
    };

    this._left = left;
    this._top = top;

    const current = {
      left: this._left,
      top: this._top,
    };

    this.pubsub.pub("set", [
      ["left", "top"],
      {
        prev,
        current,
      },
    ]);
  }

  /**
   * Point 객체로 변환합니다
   */
  toPoint(): Point {
    return {
      left: this.left,
      top: this.top,
    };
  }
}
