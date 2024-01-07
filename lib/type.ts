import { z } from "zod";

/**
 * 2차원 좌표계의 점을 나타내는 스키마
 */
export const Point = z.object({
  left: z.number(),
  top: z.number(),
});

/**
 * 2차원 좌표계의 점을 나타내는 인터페이스
 */
export type Point = z.infer<typeof Point>;

/**
 * Size
 */
export interface Size {
  width: number;
  height: number;
}

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
 * 2차원 좌표계의 선을 나타내는 스키마
 */
export const Line = z.object({
  p1: Point,
  p2: Point,
});

/**
 * 2차원 좌표계의 선을 나타내는 인터페이스
 */
export type Line = z.infer<typeof Line>;

export const DEFAULT_SPRITE_STATE = "idle";
export const SpriteSheet = z.intersection(
  z.record(z.string().array()),
  z.object({
    [DEFAULT_SPRITE_STATE]: z.array(z.string()),
  })
);

export type SpriteSheet = z.infer<typeof SpriteSheet>;
