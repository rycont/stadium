import { DEFAULT_SPRITE_STATE, ImageSprite, Sprite } from ".";
import { Point } from "../type";

const DEFAULT_ANIMATION_DURATION = 500;

export interface MoveTo {
  x: number;
  y: number;
  animationDuration: number;
}

interface MoveBy {
  dx: number;
  dy: number;
  animationDuration: number;
}

type Move = MoveTo | MoveBy;

export class Position implements Point {
  onMoveEventListeners: ((move: MoveTo) => void)[] = [];

  constructor(public sprite: Sprite, public x: number, public y: number) {}

  onMove(callback: (move: MoveTo) => void) {
    this.onMoveEventListeners.push(callback);

    return () => {
      this.onMoveEventListeners = this.onMoveEventListeners.filter(
        (listener) => listener !== callback
      );
    };
  }

  set(x: number, y: number) {
    this.x = x;
    this.y = y;

    this.onMoveEventListeners.forEach((listener) =>
      listener({ x, y, animationDuration: 0 })
    );
  }
}

export class MovableImageSpritePosition extends Position {
  targets: Move[] = [];
  isMoving = false;
  sprite: ImageSprite;

  constructor(sprite: ImageSprite, x: number, y: number) {
    super(sprite, x, y);
    this.sprite = sprite;

    this.set(x, y, 0);
  }

  set(
    x: number,
    y: number,
    animationDuration: number = DEFAULT_ANIMATION_DURATION
  ) {
    this.targets.push({ x, y, animationDuration });
    if (!this.isMoving) this.runMovingQueue();
  }

  private async runMovingQueue() {
    this.isMoving = true;

    while (this.targets.length > 0) {
      const target = this.targets.shift()!;
      await this.run(target);
    }

    this.isMoving = false;

    if (this.sprite instanceof ImageSprite)
      this.sprite.loopSpriteImage?.setState(DEFAULT_SPRITE_STATE);
  }

  private async run(_target: Move) {
    const target = this.getMovingPoint(_target);

    if (this.sprite.stage) {
      if (!this.sprite.stage.canMoveTo(this.sprite, target)) {
        alert("해당 방향은 벽으로 막혀있습니다");
        return;
      }
    }

    this.setSpriteTypeForMove(target.x, target.y);

    const animation = this.sprite.element.animate(
      [
        {
          transform: `translate(${this.x - this.sprite.width / 2}px, ${
            this.y - this.sprite.height / 2
          }px)`,
        },
        {
          transform: `translate(${target.x - this.sprite.width / 2}px, ${
            target.y - this.sprite.height / 2
          }px)`,
        },
      ],
      {
        duration: target.animationDuration,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    await new Promise<void>((resolve) => {
      animation.addEventListener("finish", () => {
        this.x = target.x;
        this.y = target.y;
        this.onMoveEventListeners.forEach((listener) => listener(target));

        resolve();
      });
    });
  }

  private getMovingPoint(target: Move) {
    if ("x" in target)
      return {
        ...target,
        dx: target.x - this.x,
        dy: target.y - this.y,
      };

    return {
      ...target,
      x: this.x + target.dx,
      y: this.y + target.dy,
    };
  }

  private setSpriteTypeForMove(targetX: number, targetY: number) {
    const dx = targetX - this.x;
    const dy = targetY - this.y;

    const direction: "left" | "right" | "up" | "down" =
      Math.abs(dx) > Math.abs(dy)
        ? dx > 0
          ? "right"
          : "left"
        : dy > 0
        ? "down"
        : "up";

    this.sprite.loopSpriteImage?.setState(direction);
  }

  moveBy(dx: number, dy: number) {
    this.targets.push({
      dx,
      dy,
      animationDuration: DEFAULT_ANIMATION_DURATION,
    });

    if (!this.isMoving) this.runMovingQueue();
  }
}
