import { z } from "zod";
import { Stage } from "../stage";
import { Point } from "../type";
import { Hook, HookManager } from "../hook/hook";
import { Locator } from "../hook/locator";
import { PubSub } from "../pubsub";
import { Position } from "./position";
export const DEFAULT_SPRITE_STATE = "idle";

export abstract class Sprite {
  abstract element: HTMLElement;
  tags: string[] = [];

  pubsub = new PubSub(["move"] as const);
  hookManager = new HookManager(this);

  stage?: Stage;
  id?: string;

  constructor(public position: Position) {}

  onMount(stage: Stage, id: string) {
    this.id = id;
    this.stage = stage;
    this.element.id = id;

    this.draw();
  }

  toJSON() {
    return {
      ...this,
      type: this.constructor.name,
    };
  }

  destroy() {
    this.element.remove();
  }

  use(hooks: Hook[]) {
    this.hookManager.use(hooks);
  }

  get mounted() {
    return !!this.id;
  }

  abstract draw(): void;
}

export class ImageSprite extends Sprite {
  element = document.createElement("img");
  private _image!: string;

  constructor(
    image: string,
    public width: number,
    public height: number,
    left: number = 0,
    top: number = 0
  ) {
    super(new Position(left, top));

    this._image = image;
    this.use([new Locator()]);
  }

  draw(): void {
    const element = this.element;
    const style = element.style;

    style.setProperty("width", `${this.width}px`);
    style.setProperty("height", `${this.height}px`);

    element.src = this.image;
  }

  get image() {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
    this.draw();
  }
}

export const SpriteSheet = z.intersection(
  z.record(z.string().array()),
  z.object({
    [DEFAULT_SPRITE_STATE]: z.array(z.string()),
  })
);

export type SpriteSheet = z.infer<typeof SpriteSheet>;
