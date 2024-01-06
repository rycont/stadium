import { Hook } from ".";
import { Sprite } from "../sprite";

export class Locator extends Hook {
  constructor() {
    super();
  }

  onMount(sprite: Sprite) {
    super.onMount(sprite);

    this.sprite.element.style.setProperty("transform", "translate(-50%, -50%)");
    this.sprite.element.style.setProperty("position", "absolute");

    this.onDraw();
    this.sprite.position.pubsub.sub("set", () => this.onDraw());
  }

  onDraw() {
    const { element, position } = this.sprite;

    element.style.setProperty("left", `${position.left}px`);
    element.style.setProperty("top", `${position.top}px`);

    this.sprite.pubsub.pub("move");
  }

  onDestroy() {
    this.sprite.element.style.removeProperty("transform");
    this.sprite.element.style.removeProperty("position");
  }
}
