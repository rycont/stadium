import { Point } from "./type";

export function relativePixels(pixels: number) {
  return `calc(var(--x-ratio) * ${pixels}px)`;
}

export function pointToRelativePixels(point: Point) {
  return {
    left: relativePixels(point.left),
    top: relativePixels(point.top),
  };
}
