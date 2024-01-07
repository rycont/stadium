import { Hook } from "./hook";
import { PubSub } from "../pubsub";
import { Sprite } from "../sprite";
import { LineCrossingDetector } from "./lineCrossingDetector";
import { MoveTarget } from "../type";

/**
 * 스프라이트의 위치를 부드럽게 조작할 수 있게 하는 Hook 입니다.
 * 애니메이션 재생 시간의 기본값은 500ms입니다.
 *
 * 이동할 목적지는 Queue에 저장되기 때문에, 이동중에 새로운 목적지를 추가한다면
 * 현재 이동이 끝난 이후 이어서 이동합니다.
 *
 * ```ts
 * const animate = new Animate()
 * imageSprite.use([ animate ])
 *
 * const dleft = 80
 * const dtop = 0
 * const duration = 1000
 *
 * animate.moveBy(dleft, dtop, duration) // 1초 동안 오른쪽으로 80px 이동
 * animate.moveTo({ left: 0, top: 0, duration: 500 }) // 0.5초 동안 (0, 0)으로 이동
 * ```
 */
export class Animate extends Hook {
  private targets: MoveTarget[] = [];
  private isMoving = false;

  /**
   * 이벤트를 발행하고 구독하는 PubSub 인스턴스입니다.
   * "start"와 "end" 이벤트를 발행합니다.
   *
   * ```ts
   * animate.pubsub.sub("start", (from: Point, to: Point) => {
   *  console.log(from, "에서", to, "로 이동합니다.");
   * });
   *
   * animate.pubsub.sub("end", (position: Point) => {
   *  console.log(position, "에 도착했습니다.");
   * });
   * ```
   */
  public pubsub = new PubSub<["start", "end"]>();

  private blocklineDetector?: LineCrossingDetector;

  constructor() {
    super();
  }

  /**
   * 훅이 스프라이트에 마운트될 때 호출되는 메서드입니다.
   * 스프라이트에서 `LineCrossingDetector` 훅을 찾고, 있다면 `blocklineDetector`에 저장합니다.
   * @param sprite 마운트된 스프라이트
   */
  public onMount(sprite: Sprite): void {
    super.onMount(sprite);
    try {
      this.blocklineDetector = sprite.hookManager.get(
        LineCrossingDetector.name
      ) as LineCrossingDetector;
    } catch (_e) {}
  }

  private addMoveTarget(target: MoveTarget) {
    this.targets.push(target);

    if (!this.isMoving) {
      this.runQueue();
    }
  }

  /**
   * 상대적인 좌표로 스프라이트를 이동합니다.
   * @param dleft 좌측으로 이동할 거리
   * @param dtop 상단으로 이동할 거리
   * @param duration 애니메이션의 지속 시간 (ms)
   *
   * ```ts
   * animate.moveBy(80, 0, 1000) // 1초 동안 오른쪽으로 80px 이동
   * ```
   */
  public moveBy(dleft: number, dtop: number, duration: number = 500) {
    this.addMoveTarget({
      dleft,
      dtop,
      duration,
    });
  }

  /**
   * 절대적인 좌표로 스프라이트를 이동합니다.
   * @param left 이동할 좌표의 x값
   * @param top 이동할 좌표의 y값
   * @param duration 애니메이션의 지속 시간 (ms)
   *
   * ```ts
   * animate.moveTo(0, 0, 800) // 0.8초 동안 (0, 0)으로 이동
   * ```
   */
  public moveTo(left: number, top: number, duration: number = 500) {
    this.addMoveTarget({
      left,
      top,
      duration,
    });
  }

  private async runQueue() {
    this.isMoving = true;

    while (this.targets.length > 0) {
      const target = this.targets.shift()!;
      await this.move(target);
    }

    this.isMoving = false;
  }

  private async move(_target: MoveTarget) {
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

  private completeTarget(target: MoveTarget) {
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
