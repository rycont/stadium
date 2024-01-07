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
