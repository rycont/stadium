import { Hook } from "./hook";
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

    element.style.setProperty(
      "left",
      `calc(var(--x-ratio) * ${position.left}px)`
    );

    element.style.setProperty(
      "top",
      `calc(var(--y-ratio) * ${position.top}px)`
    );

    this.sprite.pubsub.pub("move", [this.sprite]);
  }

  onDestroy() {
    this.sprite.element.style.removeProperty("transform");
    this.sprite.element.style.removeProperty("position");
  }
}
