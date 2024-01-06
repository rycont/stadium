import { PubSub } from "../pubsub";
import { Point } from "../type";

export class Position implements Point {
  pubsub = new PubSub(["set"] as const);

  constructor(public _left: number, public _top: number) {}

  set left(value: number) {
    this.left = value;
    this.pubsub.pub("set", ["left"]);
  }

  get left() {
    return this._left;
  }

  set top(value: number) {
    this.top = value;
    this.pubsub.pub("set", ["top"]);
  }

  get top() {
    return this._top;
  }

  set(left: number, top: number) {
    this._left = left;
    this._top = top;

    this.pubsub.pub("set", ["left", "top"]);
  }
}
