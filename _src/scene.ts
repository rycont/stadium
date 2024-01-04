import { Sprite } from "./sprite";

export class Scene {
  sprites: Record<string, Sprite> = {};

  constructor(public element: HTMLDivElement) {}

  addSprite(sprite: Sprite) {
    this.sprites[sprite.id] = sprite;
    this.element.appendChild(sprite.element);

    sprite.onMount(this);
  }

  toJSON() {
    return {
      sprites: Object.fromEntries(
        Object.entries(this.sprites).map(([key, sprite]) => [
          key,
          sprite.toJSON(),
        ])
      ),
    };
  }

  static fromJSON(
    element: HTMLDivElement,
    json: { sprites: Record<string, any> }
  ) {
    const scene = new Scene(element);

    Object.entries(json.sprites).forEach(([key, sprite]) => {
      scene.addSprite(Sprite.fromJSON(sprite));
    });

    return scene;
  }
}
