import { z } from "zod";
import { Stage } from "../stage";
import { LoopSpriteImage } from "./loopSpriteImage";
import { MovableImageSpritePosition, Position } from "./position";

export const DEFAULT_SPRITE_STATE = "idle";

export class Sprite {
  element: HTMLElement = document.createElement("div");
  tags: string[] = [];

  position?: Position;
  stage?: Stage;
  id?: string;

  constructor() {}

  onMount(stage: Stage, id: string) {
    this.id = id;
    this.stage = stage;
  }

  toJSON() {
    return {
      ...this,
      type: this.constructor.name,
    };
  }

  destroy() {
    this.stage?.removeSprite(this);
    this.element.remove();
  }
}

export class ImageSprite extends Sprite {
  loopSpriteImage?: LoopSpriteImage;
  position: MovableImageSpritePosition;
  element: HTMLImageElement;

  constructor(
    public image: SpriteSheet | string,
    public width: number,
    public height: number,
    x: number = 0,
    y: number = 0
  ) {
    super();

    const element = document.createElement("img");
    this.element = element;

    element.style.position = "absolute";
    element.style.setProperty("width", `${width}px`);
    element.style.setProperty("height", `${height}px`);

    if (typeof image === "string") {
      this.setImage(image);
    } else {
      this.loopSpriteImage = new LoopSpriteImage(this, image);
    }
    this.position = new MovableImageSpritePosition(this, x, y);
  }

  setImage(image: string) {
    this.element.src = image;
  }

  onMount(stage: Stage, id: string): void {
    super.onMount(stage, id);

    this.position.onMove((move) => {
      stage.onSpriteMoveEventListeners.forEach((listener) => listener(move));
    });
  }
}

// export class Sprite {
//   element: HTMLImageElement;
//   tags: string[] = [];

//   loopSpriteImage?: LoopSpriteImage;
//   stage?: Stage;
//   id?: string;

//   constructor(
//     public image: SpriteSheet | string,
//     public width: number,
//     public height: number,
//     x: number = 0,
//     y: number = 0
//   ) {
//     const element = document.createElement("img");
//     this.element = element;

//     element.style.position = "absolute";
//     element.style.setProperty("width", `${width}px`);
//     element.style.setProperty("height", `${height}px`);

//     if (typeof image === "string") {
//       this.setImage(image);
//     } else {
//       this.loopSpriteImage = new LoopSpriteImage(this, image);
//     }
//     this.position = new Position(this, x, y);
//   }

//   setImage(image: string) {
//     this.element.src = image;
//   }

//   onMount(stage: Stage, id: string) {
//     this.id = id;
//     this.stage = stage;
//   }

//   toJSON() {
//     return {
//       ...this,
//       type: this.constructor.name,
//     };
//   }
// }

export const SpriteSheet = z.intersection(
  z.record(z.string().array()),
  z.object({
    [DEFAULT_SPRITE_STATE]: z.array(z.string()),
  })
);

export type SpriteSheet = z.infer<typeof SpriteSheet>;
