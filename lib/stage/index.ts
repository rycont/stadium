import { PubSub } from "../pubsub";
import { Sprite } from "../sprite";

// const DESIGNED_WIDTH = 800;
// const DESIGNED_HEIGHT = 640;

interface Size {
  width: number;
  height: number;
}

export class Stage {
  sprites: Sprite[] = [];
  pubsub = new PubSub(["spriteMove"] as const);

  constructor(
    public element: HTMLDivElement,
    designedSize: Size,
    actualSize: Size = designedSize
  ) {
    this.element.style.setProperty("position", "relative");

    const { width, height } = actualSize;

    this.element.style.setProperty(
      "--x-ratio",
      `${width / designedSize.width}`
    );
    this.element.style.setProperty(
      "--y-ratio",
      `${height / designedSize.height}`
    );

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
