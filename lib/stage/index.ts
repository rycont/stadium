import { PubSub } from "../pubsub";
import { Sprite } from "../sprite";

const DESIGNED_WIDTH = 800;
const DESIGNED_HEIGHT = 640;

export class Stage {
  sprites: Sprite[] = [];
  pubsub = new PubSub(["spriteMove"] as const);

  constructor(public element: HTMLDivElement, width = 800, height = 640) {
    this.element.style.setProperty("position", "relative");

    this.element.style.setProperty("--x-ratio", `${width / DESIGNED_WIDTH}`);
    this.element.style.setProperty("--y-ratio", `${height / DESIGNED_HEIGHT}`);

    this.element.style.setProperty("width", `${width}px`);
    this.element.style.setProperty("height", `${height}px`);
  }

  addSprite(sprite: Sprite) {
    this.sprites.push(sprite);
    this.element.appendChild(sprite.element);

    sprite.onMount(this, crypto.randomUUID());
    sprite.pubsub.sub("move", () => {
      this.pubsub.pub("spriteMove", [sprite]);
    });
  }
}
