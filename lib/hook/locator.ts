import { Hook } from "./hook";
import { Sprite } from "../sprite";

/**
 * Locator는 DOM 상에 Sprite의 위치를 설정하는 Hook입니다. Position의 변경을 감지하여
 * left, top 스타일을 변경합니다. ImageSprite에선 기본 Hook이기에, 직접 사용할 필요는 없습니다.
 */
export class Locator extends Hook {
  /**
   * Locator의 인스턴스를 생성합니다.
   */
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

  private onDraw() {
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
