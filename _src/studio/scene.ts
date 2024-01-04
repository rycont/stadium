import Moveable, { MoveableOptions } from "moveable";
import { SpriteForStudio } from "./spriteForStudio";
import Selecto from "selecto";
import { Scene } from "../scene";

export class SceneForStudio extends Scene {
  moveableConfig: MoveableOptions = {
    container: this.element,
    draggable: true,
    resizable: true,
    scalable: true,
    rotatable: true,
    warpable: true,
    pinchable: true,
    origin: true,
    keepRatio: true,
    edge: true,
    throttleDrag: 0,
    throttleResize: 0,
    throttleScale: 0,
    throttleRotate: 0,
    verticalGuidelines: [0, 300, 600, 900, 1200],
    horizontalGuidelines: [0, 200, 400, 600, 800],
    snappable: true,
    snapThreshold: 100,
    snapDirections: {
      middle: true,
      center: true,
    },
    snapRotationDegrees: [0, 45, 90, 135, 180, 225, 270, 315],
    elementSnapDirections: {
      left: true,
      right: true,
      top: true,
      bottom: true,
      middle: true,
      center: true,
    },
  };

  selecto = new Selecto({
    container: this.element,
  });

  moveable?: Moveable;

  _moveableTarget = new Set<string>();

  constructor(public element: HTMLDivElement) {
    super(element);

    this.selecto.on("dragStart", (event) => {
      const target = event.inputEvent.target;

      const isSprite = target.id in this.sprites;
      const isSelectedArea = target.classList.contains("moveable-area");

      if (!isSprite && !isSelectedArea) return;

      if (isSprite) {
        this.moveableTarget = new Set([target.id]);
      }

      this.moveable?.dragStart(event.inputEvent);
      event.stop();
    });

    this.selecto.on("select", (event) => {
      this.moveableTarget = new Set(event.selected.map((el) => el.id));
    });
  }

  addSprite(sprite: SpriteForStudio) {
    super.addSprite(sprite);

    this.selecto.selectableTargets = [
      ...this.selecto.selectableTargets,
      sprite.element,
    ];
  }

  get moveableTarget() {
    return this._moveableTarget;
  }

  set moveableTarget(target: Set<string>) {
    if (!this.moveable) {
      this.moveable = new Moveable(this.element, {
        ...this.moveableConfig,
        target: [...target].map((id) => this.sprites[id].element),
      });

      this.moveable.on("drag", ({ target, left, top }) => {
        const sprite = this.sprites[target.id];
        sprite.setPosition(left, top);
      });

      this.moveable.on("resize", ({ target, width, height }) => {
        const sprite = this.sprites[target.id];
        sprite.setSize(width, height);
      });

      this.moveable.on("rotate", ({ target, rotation }) => {
        const sprite = this.sprites[target.id];
        sprite.setRotate(rotation);
      });
    }

    this.moveable.target = [...target].map((id) => this.sprites[id].element);
    this._moveableTarget = target;
  }
}
