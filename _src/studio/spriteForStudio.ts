import Moveable from "moveable";
import { Scene } from "./scene";
import { Sprite, SpriteSheet } from "../sprite";

export class SpriteForStudio extends Sprite {
  moveable?: Moveable;
  scene?: Scene;

  constructor(
    image: SpriteSheet,
    public id = crypto.randomUUID(),
    public width = 100,
    public height = 100
  ) {
    super(image, id, width, height);
    this.element.addEventListener("click", this.onClick.bind(this));
  }

  onMount(scene: Scene) {
    this.scene = scene;
  }

  onClick(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
  }
}
