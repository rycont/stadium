export type Result<S, R> =
  | {
      type: "success";
      value: S;
    }
  | {
      type: "fail";
      value: R;
    };

export interface Point {
  x: number;
  y: number;
}
