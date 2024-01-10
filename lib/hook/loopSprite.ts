import { Sprite } from "../sprite";
import { ImageSprite } from "../sprite/ImageSprite";
import { Point, SpriteSheet } from "../type";
import { Animate } from "./animate";
import { Hook } from "./hook";

/**
 * ImageSprite에 반복되는 이미지를 표시할 수 있게 해주는 Hook입니다.
 *
 * ```ts
 * const sprite = new ImageSprite("image", 10, 10, 0, 100);
 * const sheet = {
 *     idle: ["idle1.png", "idle2.png", "idle3.png"],
 *     fly: ["fly1.png", "fly2.png", "fly3.png"],
 * }
 * const loop = new LoopSprite(sheet, 100)
 *
 * sprite.use([ loop ])
 * loop.state = "fly";
 * ```
 */
export class LoopSprite extends Hook {
  declare _sprite?: ImageSprite;

  private _state?: string;
  private timer?: ReturnType<typeof setInterval>;

  /**
   * LoopSprite를 생성합니다. 생성자가 호출될 때, 시트에 있는 모든 이미지를 미리 로드합니다.
   *
   * @param sheet 스프라이트 시트
   * @param interval 이미지 전환 간격
   */
  constructor(private sheet: SpriteSheet, private interval: number = 200) {
    super();

    this.assertProperState("idle");
    this.preload();
  }

  public onMount(sprite: Sprite): void {
    super.onMount(sprite);
    this.state = "idle";
  }

  /**
   * 보여줄 시트의 상태를 설정합니다.
   * @param value 상태 값
   *
   * ```ts
   * loop.state = "fly";
   * ```
   */
  public set state(value: string) {
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

  private preload() {
    for (const state in this.sheet) {
      for (const image of this.sheet[state]) {
        const img = new Image();
        img.src = image;
      }
    }
  }

  protected assertProperState(state: string) {
    if (!(state in this.sheet))
      throw new Error(`State ${state} not found in ${this.sheet.name}`);

    const images = this.sheet[state];

    if (images.length === 0) throw new Error(`State ${state} has no images`);

    return;
  }
}

/**
 * LoopSprite를 상속받아, Animate Hook의 이동 방향에 따라 이미지를 전환하는 Hook입니다.
 * Animate Hook보다 이후에 마운트되어야 합니다.
 *
 * ```ts
 * const sprite = new ImageSprite("image", 10, 10, 0, 100);
 *
 * const sheet = {
 *     left: ["left1.png", "left2.png", "left3.png"],
 *     right: ["right1.png", "right2.png", "right3.png"],
 *     up: ["up1.png", "up2.png", "up3.png"],
 *     down: ["down1.png", "down2.png", "down3.png"],
 *     idle: ["idle1.png", "idle2.png", "idle3.png"],
 * }
 *
 * const loop = new LoopSpriteByDirection(sheet, 100)
 * const animate = new Animate();
 *
 * sprite.use([ animate, loop ])
 *
 * animate.moveTo(100, 0) // 오른쪽으로 이동하며 이미지가 전환됩니다.
 * ```
 */

export class LoopSpriteByDirection extends LoopSprite {
  /**
   * @param sheet 스프라이트 시트에는 `left`, `right`, `up`, `down`, `idle` 상태가 있어야 합니다.
   * @param interval 이미지 전환 간격
   */
  constructor(sheet: SpriteSheet, interval: number = 500) {
    super(sheet, interval);
    this.assertHaveAllDirection();
  }

  public onMount(sprite: Sprite): void {
    super.onMount(sprite);

    const animate = sprite.hookManager.get(Animate.name) as Animate;

    animate.pubsub.sub("start", (from: Point, to: Point) => {
      this.state = this.getDirection(from, to);
    });

    animate.pubsub.sub("end", () => {
      this.state = "idle";
    });
  }

  private getDirection(from: Point, to: Point) {
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

  private assertHaveAllDirection() {
    const directions = ["left", "right", "up", "down", "idle"];

    for (const direction of directions) {
      this.assertProperState(direction);
    }
  }
}
