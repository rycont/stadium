import { PubSub } from "../pubsub";
import { Sprite } from "../sprite";

export class Stage {
  sprites: Sprite[] = [];
  pubsub = new PubSub(["spriteMove"] as const);

  constructor(public element: HTMLDivElement) {
    this.element.style.setProperty("position", "relative");
  }

  addSprite(sprite: Sprite) {
    this.sprites.push(sprite);
    this.element.appendChild(sprite.element);

    sprite.onMount(this, crypto.randomUUID());
    sprite.pubsub.sub("move", () => {
      this.pubsub.pub("spriteMove", [sprite]);
    });
  }

  removeSprite(sprite: Sprite) {}
}
