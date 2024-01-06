import Moveable, { OnDrag } from "moveable";
import { Hook } from "./hook";
import { Sprite } from "../sprite";

export class MoveableSprite extends Hook {
  moveable?: Moveable;

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
