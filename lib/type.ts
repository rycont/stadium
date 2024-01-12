/**
 * 2차원 좌표계의 점을 나타내는 인터페이스
 *
 * ```ts
 * const point: Point = {
 *   left: 0,
 *   top: 0,
 * };
 * ```
 */

export interface Point {
  /**
   * x 좌표
   */
  left: number;
  /**
   * y 좌표
   */
  top: number;
}

/**
 * Size
 *
 * ```ts
 * const size: Size = {
 *   width: 100,
 *   height: 100,
 * };
 * ```
 */
export interface Size {
  /**
   * 가로 길이
   */
  width: number;
  /**
   * 세로 길이
   */
  height: number;
}

export const isSize = (value: any): value is Size => {
  return typeof value.width === "number" && typeof value.height === "number";
};

export type MoveTarget =
  | {
      left: number;
      top: number;
      duration: number;
    }
  | {
      dleft: number;
      dtop: number;
      duration: number;
    };

/**
 * 2차원 좌표계의 선을 나타내는 인터페이스
 *
 * ```ts
 * const line: Line = {
 *   p1: { left: 0, top: 0 },
 *   p2: { left: 100, top: 100 },
 * };
 * ```
 */
export interface Line {
  /**
   * 시작점
   */
  p1: Point;
  /**
   * 끝점
   */
  p2: Point;
}

/**
 * @param value
 * @returns `value`가 `Point` 인터페이스를 구현하는지 여부
 */

export const isPoint = (value: any): value is Point => {
  return typeof value.left === "number" && typeof value.top === "number";
};

/**
 *
 * @param value
 * @returns `value`가 `Line` 인터페이스를 구현하는지 여부
 */

export const isLine = (value: any): value is Line => {
  return isPoint(value.p1) && isPoint(value.p2);
};

export const DEFAULT_SPRITE_STATE = "idle";

/**
 * 스프라이트 시트를 나타내는 타입
 *
 * ```ts
 * const spriteSheet: SpriteSheet = {
 *   idle: [ 'idle-1.png', 'idle-2.png' ],
 *   walk: [ 'walk-1.png', 'walk-2.png' ],
 * };
 * ```
 */
export type SpriteSheet = Record<string, string[]> & {
  [DEFAULT_SPRITE_STATE]: string[];
};
