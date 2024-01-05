import { Sprite } from "../sprite";
import { Stage } from "../stage";
import Moveable from "moveable";
// import Selecto from "selecto";

export class Studio {
  moveable?: Moveable;

  constructor(public stage: Stage) {
    for (const sprite of stage.sprites) {
      sprite.element.addEventListener("click", () => {
        this.setMoveable(sprite);
      });
    }
  }

  setMoveable(sprite: Sprite) {
    if (this.moveable) {
      this.moveable.destroy();
    }

    const moveable = new Moveable(this.stage.element, {
      target: sprite.element,
      draggable: true,
      verticalGuidelines: [40, 120, 200, 280, 360, 440],
      horizontalGuidelines: [40, 120, 200, 280, 360, 440],
      snappable: true,
      snapThreshold: 150,
      snapDirections: { middle: true, center: true },
    });

    moveable.on("drag", (e): void => {
      sprite.position?.setDirectly(e.left, e.top);
    });

    this.moveable = moveable;
  }
}
