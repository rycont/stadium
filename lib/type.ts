import { z } from "zod";

export const Point = z.object({
  left: z.number(),
  top: z.number(),
});

export type Point = z.infer<typeof Point>;

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

export const Line = z.object({
  p1: Point,
  p2: Point,
});

export type Line = z.infer<typeof Line>;
