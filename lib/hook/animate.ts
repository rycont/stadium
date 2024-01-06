import { Hook } from "./hook";
import { PubSub } from "../pubsub";
import { Sprite } from "../sprite";
import { LineCrossingDetector } from "./lineCrossingDetector";

type Target =
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

export class Animate extends Hook {
  targets: Target[] = [];
  isMoving = false;
  pubsub = new PubSub(["start", "end"] as const);

  blocklineDetector?: LineCrossingDetector;

  constructor() {
    super();
  }

  onMount(sprite: Sprite): void {
    super.onMount(sprite);
    try {
      this.blocklineDetector = sprite.hookManager.get(
        LineCrossingDetector.name
      ) as LineCrossingDetector;
    } catch (_e) {}
  }
  onDraw(): void {}
  onDestroy(): void {}

  public moveTo(target: Target) {
    this.targets.push(target);

    if (!this.isMoving) {
      this.runQueue();
    }
  }

  public moveBy(dleft: number, dtop: number, duration: number = 500) {
    this.moveTo({
      dleft,
      dtop,
      duration,
    });
  }

  async runQueue() {
    this.isMoving = true;

    while (this.targets.length > 0) {
      const target = this.targets.shift()!;
      await this.move(target);
    }

    this.isMoving = false;
  }

  async move(_target: Target) {
    const target = this.completeTarget(_target);

    if (this.blocklineDetector?.isCrossing(target)) {
      if (this.blocklineDetector.behavior.clearMovePathAfterBlocking) {
        this.targets = [];
      }

      if (this.blocklineDetector.behavior.blockMove) {
        this.blocklineDetector.pubsub.pub("blocked", [this.sprite]);
        return;
      }

      this.blocklineDetector.pubsub.pub("crossed", [this.sprite]);
    }

    this.pubsub.pub("start", [
      { left: this.sprite.position.left, top: this.sprite.position.top },
      { ...target },
    ]);

    const animate = this.sprite.element.animate(
      [
        {
          left: `calc(var(--x-ratio) * ${this.sprite.position.left}px)`,
          top: `calc(var(--y-ratio) * ${this.sprite.position.top}px)`,
        },
        {
          left: `calc(var(--x-ratio) * ${target.left}px)`,
          top: `calc(var(--y-ratio) * ${target.top}px)`,
        },
      ],
      {
        duration: target.duration,
        easing: "ease-in-out",
      }
    );

    this.sprite.position.set(target.left, target.top);
    await animate.finished;

    this.pubsub.pub("end", [
      { left: this.sprite.position.left, top: this.sprite.position.top },
    ]);
    return;
  }

  private completeTarget(target: Target) {
    if ("left" in target) {
      return {
        ...target,
        dleft: target.left - this.sprite.position.left,
        dtop: target.top - this.sprite.position.top,
      };
    } else {
      return {
        ...target,
        left: target.dleft + this.sprite.position.left,
        top: target.dtop + this.sprite.position.top,
      };
    }
  }
}
