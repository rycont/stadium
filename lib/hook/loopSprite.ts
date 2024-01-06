import { Hook } from "./hook";
import { ImageSprite, Sprite, SpriteSheet } from "../sprite";
import { Point } from "../type";
import { Animate } from "./animate";

export class LoopSprite extends Hook {
  declare _sprite?: ImageSprite;

  private _state?: string;
  private timer?: number;

  constructor(private sheet: SpriteSheet, private interval: number = 200) {
    super();

    this.assertProperState("idle");
    this.preload();
  }

  preload() {
    for (const state in this.sheet) {
      for (const image of this.sheet[state]) {
        const img = new Image();
        img.src = image;
      }
    }
  }

  onMount(sprite: Sprite): void {
    super.onMount(sprite);
    this.state = "idle";
  }

  set state(value: string) {
    if (this._state === value) return;

    this.assertProperState(value);
    this._state = value;

    const images = this.sheet[value];
    this.sprite.image = images[0];

    clearInterval(this.timer);

    if (images.length === 1) return;
    let index = 1;

    this.timer = setInterval(() => {
      this.sprite.image = images[index];

      index += 1;
      if (index >= images.length) index = 0;
    }, this.interval);
  }

  assertProperState(state: string) {
    if (!(state in this.sheet))
      throw new Error(`State ${state} not found in ${this.sheet.name}`);

    const images = this.sheet[state];

    if (images.length === 0) throw new Error(`State ${state} has no images`);

    return;
  }
}

export class LoopSpriteByDirection extends LoopSprite {
  constructor(sheet: SpriteSheet, interval: number = 500) {
    super(sheet, interval);
    this.assertHaveAllDirection();
  }

  onMount(sprite: Sprite): void {
    super.onMount(sprite);

    const animate = sprite.hookManager.get(Animate.name) as Animate;

    animate.pubsub.sub("start", (from: Point, to: Point) => {
      this.state = this.getDirection(from, to);
    });

    animate.pubsub.sub("end", (from: Point, to: Point) => {
      this.state = "idle";
    });
  }

  getDirection(from: Point, to: Point) {
    const dx = to.left - from.left;
    const dy = to.top - from.top;

    let direction: "left" | "right" | "up" | "down" | "idle";

    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0) {
        direction = "right";
      } else {
        direction = "left";
      }
    } else {
      if (dy > 0) {
        direction = "down";
      } else {
        direction = "up";
      }
    }

    return direction;
  }

  assertHaveAllDirection() {
    const directions = ["left", "right", "up", "down", "idle"];

    for (const direction of directions) {
      this.assertProperState(direction);
    }
  }
}

// export class LoopSpriteByDirection extends Hook {
//   timer?: number;
//   animate?: Animate;

//   constructor() {
//     super();
//   }

//   onMount(sprite: Sprite): void {
//     super.onMount(sprite);

//     // sprite.position.pubsub.sub(
//     //   "set",
//     //   (
//     //     _moveFactor: ("left" | "top")[],
//     //     move: {
//     //       prev: Point;
//     //       current: Point;
//     //     }
//     //   ) => {
//     //     const dx = move.current.left - move.prev.left;
//     //     const dy = move.current.top - move.prev.top;

//     //     let direction: "left" | "right" | "up" | "down" | "idle";

//     //     if (Math.abs(dx) > Math.abs(dy)) {
//     //       if (dx > 0) {
//     //         direction = "right";
//     //       } else {
//     //         direction = "left";
//     //       }
//     //     } else {
//     //       if (dy > 0) {
//     //         direction = "down";
//     //       } else {
//     //         direction = "up";
//     //       }
//     //     }
//     //   }
//     // );

//     const animate = sprite.hookManager.get(Animate.name) as Animate;

//     animate.pubsub.sub("start", (from: Point, to: Point) => {
//       this.setSpriteFromMove(from, to);
//     });
//   }

//   setSpriteFromMove(from: Point, to: Point) {
//     const dx = to.left - from.left;
//     const dy = to.top - from.top;

//     let direction: "left" | "right" | "up" | "down" | "idle";

//     if (Math.abs(dx) > Math.abs(dy)) {
//       if (dx > 0) {
//         direction = "right";
//       } else {
//         direction = "left";
//       }
//     } else {
//       if (dy > 0) {
//         direction = "down";
//       } else {
//         direction = "up";
//       }
//     }
//   }

//   onDestroy(): void {}
// }
