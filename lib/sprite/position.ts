import { PubSub } from "../pubsub";
import { Point } from "../type";

export class Position implements Point {
  pubsub = new PubSub(["set"] as const);

  constructor(public _left: number, public _top: number) {}

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

  get left() {
    return this._left;
  }

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

  get top() {
    return this._top;
  }

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
}
