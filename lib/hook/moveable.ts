import Moveable, { OnDrag } from "moveable";
import { Hook } from "./hook";
import { Sprite } from "../sprite";

/**
 * Sprite를 드래그 앤 드롭으로 이동할 수 있도록 합니다.
 * [@daybrush/moveable](https://github.com/daybrush/moveable)로 구현하였습니다.
 * 
 * ```ts
 * const sprite = new Sprite();
 * sprite.use([ new MoveableSprite() ]);
 * ```
 */
export class MoveableSprite extends Hook {
  private moveable?: Moveable;

  /**
   * MoveableSprite의 인스턴스를 생성합니다.
   */
  constructor() {
    super();
  }

  onMount(sprite: Sprite): void {
    super.onMount(sprite);

    const element = this.sprite.element;
    element.style.setProperty("cursor", "move");
    element.addEventListener("dragstart", this.onMouseDown.bind(this));
  }

  onDestroy(): void {
    this.moveable?.destroy();
  }

  onMouseDown(event: MouseEvent) {
    if (this.moveable) {
      this.moveable.destroy();
    }

    this.moveable = new Moveable(this.sprite.stadium!.element, {
      target: this.sprite.element,
      draggable: true,
    });

    this.moveable.on("drag", this.onDrag.bind(this));
    this.moveable.dragStart(event);
  }

  onDrag({ left, top }: OnDrag) {
    this.sprite.position.set(left, top);
  }
}
