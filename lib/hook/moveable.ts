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

  public onMount(sprite: Sprite): void {
    super.onMount(sprite);

    const element = this.sprite.element;

    element.style.setProperty("cursor", "move");
    element.setAttribute("draggable", "true");

    element.addEventListener("dragstart", this.onMouseDown.bind(this));
    addEventListener("click", this.onDocumentClick.bind(this));
  }

  public onDestroy(): void {
    this.removeMoveable();

    const element = this.sprite.element;

    element.style.removeProperty("cursor");
    element.removeAttribute("draggable");

    element.removeEventListener("dragstart", this.onMouseDown.bind(this));
    removeEventListener("click", this.onDocumentClick.bind(this));

    super.onDestroy();
  }

  private removeMoveable() {
    this.moveable?.destroy();
    delete this.moveable;
  }

  private onMouseDown(event: MouseEvent) {
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

  private onDocumentClick(event: MouseEvent) {
    if (event.target === this.sprite.element) {
      event.stopPropagation();
    }

    if (this.moveable) {
      this.moveable.destroy();
      delete this.moveable;
    }
  }

  private onDrag({ left, top }: OnDrag) {
    this.sprite.position.set({ left, top });
  }
}
