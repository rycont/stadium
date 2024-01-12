import { Hook, HookManager } from "../hook/hook";
import { PubSub } from "../pubsub";
import { Stadium } from "../stadium";
import { Point } from "../type";
import { Position } from "./position";

/**
 * Sprite는 Stadium에 추가되는 개체입니다. 추상개체이기에, 상속받아서 `draw` 메서드를
 * 구현한 후 사용해야 합니다. ImageSprite, SensorLine이 미리 구현되어있으며, 이 외에
 * 필요한 스프라이트를 직접 구현할 수 있습니다.
 *
 * 모든 Sprite의 element는 `.sprite` 클래스를 가집니다.
 */

export abstract class Sprite {
  /**
   * DOM에 그려질 엘리먼트
   */
  public element: HTMLElement = document.createElement("div");

  /**
   * Sprite에 부여할 태그. Hook(Nearness, DetectLineCrossing 등)에서 사용됩니다.
   */
  public tags: string[] = [];

  /**
   * Sprite의 PubSub 인스턴스입니다. Position에 변화가 생기면 `move` 이벤트가 생성됩니다.
   */
  public pubsub = new PubSub<{
    move: (position: Point) => void;
  }>();

  public hookManager = new HookManager(this);

  /**
   * Sprite가 속한 Stadium 인스턴스입니다. mount되기 전에는 undefined입니다.
   */
  public stadium?: Stadium;

  /**
   * Sprite의 고유 ID입니다. mount되기 전에는 undefined입니다.
   */
  public id?: string;

  constructor(public position: Position) {
    if (!(position instanceof Position))
      throw new Error("position must be instance of Position");
    this.element.classList.add("sprite");
  }

  public onMount(stadium: Stadium, id: string) {
    this.id = id;
    this.stadium = stadium;
    this.element.id = id;

    this.draw();
  }

  public toJSON() {
    return {
      ...this,
      type: this.constructor.name,
    };
  }

  /**
   * Sprite를 DOM에서 제거합니다.
   */
  public destroy() {
    this.element.remove();
  }

  /**
   * 새 Hook을 스프라이트에 추가합니다.
   *
   * ```ts
   * sprite.use([ new Hook() ])
   * ```
   *
   * @param hooks
   */
  public use(hooks: Hook[]) {
    this.hookManager.use(hooks);
  }

  /**
   * Sprite가 mount 되었는지 여부를 반환합니다.
   */
  get mounted() {
    return !!this.id;
  }

  abstract draw(): void;
}
