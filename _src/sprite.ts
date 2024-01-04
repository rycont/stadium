import { Scene } from "./scene";

export interface SpriteSheet {
  right: string[];
  left: string[];
  up: string[];
  down: string[];
  idle: string[];
}

export class Sprite {
  element: HTMLImageElement;
  isMoving = false;
  _spriteType: keyof SpriteSheet = "idle";
  spriteInterval?: number;

  constructor(
    public image: SpriteSheet,
    public id: string = crypto.randomUUID(),
    public width = 100,
    public height = 100,
    public x = 0,
    public y = 0,
    public rotate = 0
  ) {
    const imageElement = document.createElement("img");

    imageElement.id = id;
    imageElement.width = 100;
    imageElement.height = 100;
    imageElement.style.position = "absolute";

    this.element = imageElement;

    this.setPosition(x, y);
    this.setRotate(rotate);
    this.setSize(width, height);

    this.loopSprite();
  }

  loopSprite() {
    if (this.spriteInterval !== undefined) {
      clearInterval(this.spriteInterval);
    }

    const sprite = this.image[this._spriteType];
    const imageElement = this.element;
    imageElement.src = sprite[0];

    let i = 1;

    this.spriteInterval = setInterval(() => {
      if (!this.isMoving) return;

      if (i >= sprite.length) {
        i = 0;
      }
      imageElement.src = sprite[i];
      i++;
    }, 500);
  }

  get spriteType() {
    return this._spriteType;
  }

  set spriteType(value: keyof SpriteSheet) {
    this._spriteType = value;
    this.loopSprite();
  }

  setPosition(x: number, y: number) {
    this.x = x;
    this.y = y;

    // this.element.style.setProperty("left", `${x}px`);
    // this.element.style.setProperty("top", `${y}px`);
  }

  moveTo(x: number, y: number, duration: number) {
    if (this.isMoving) return;

    const dx = x - this.x;
    const dy = y - this.y;

    let spriteType: keyof SpriteSheet = "idle";

    if (Math.abs(dx) > Math.abs(dy)) {
      spriteType = dx > 0 ? "right" : "left";
    } else {
      spriteType = dy > 0 ? "down" : "up";
    }

    this.spriteType = spriteType;

    this.isMoving = true;
    this.element
      .animate(
        [
          {
            left: `${this.x}px`,
            top: `${this.y}px`,
          },
          {
            left: `${x}px`,
            top: `${y}px`,
          },
        ],
        {
          duration,
          fill: "forwards",
        }
      )
      .addEventListener("finish", () => {
        this.isMoving = false;
      });

    this.x = x;
    this.y = y;
  }

  moveBy(x: number, y: number, duration: number) {
    this.moveTo(this.x + x, this.y + y, duration);
  }

  setSize(width: number, height: number) {
    this.width = width;
    this.height = height;

    this.element.width = width;
    this.element.height = height;
  }

  setRotate(deg: number) {
    this.rotate = deg;
    this.element.style.setProperty("transform", `rotate(${deg}deg)`);
  }

  onMount(scene: Scene) {}

  toJSON() {
    return {
      id: this.id,
      width: this.width,
      height: this.height,
      image: this.image,
      x: this.x,
      y: this.y,
      rotate: this.rotate,
    };
  }

  static fromJSON(json: {
    id: string;
    width: number;
    height: number;
    image: SpriteSheet;
    x: number;
    y: number;
    rotate: number;
  }) {
    return new Sprite(
      json.image,
      json.id,
      json.width,
      json.height,
      json.x,
      json.y,
      json.rotate
    );
  }
}
