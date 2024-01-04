import { DEFAULT_SPRITE_STATE, ImageSprite, SpriteSheet } from ".";
import { Result } from "../type";

export enum LoopSrpiteImageFailure {
  NOT_FOUND_STATE,
  STATE_HAS_NO_IMAGES,
}

export class LoopSpriteImage {
  private timer?: number;
  private state?: string;

  constructor(
    private sprite: ImageSprite,
    private sheet: SpriteSheet,
    state: string = DEFAULT_SPRITE_STATE
  ) {
    this.setState(state);
  }

  public setState(state: string): Result<this, LoopSrpiteImageFailure> {
    if (this.state === state)
      return {
        type: "success",
        value: this,
      };

    const sheet = this.sheet;

    if (!(state in sheet)) {
      return {
        type: "fail",
        value: LoopSrpiteImageFailure.NOT_FOUND_STATE,
      };
    }

    this.state = state;
    clearInterval(this.timer);

    const images = sheet[state];

    if (images.length === 0) {
      return {
        type: "fail",
        value: LoopSrpiteImageFailure.STATE_HAS_NO_IMAGES,
      };
    }

    this.sprite.setImage(images[0]);

    if (images.length === 1)
      return {
        type: "success",
        value: this,
      };

    let index = 1;

    this.timer = setInterval(() => {
      const image = images[index];
      this.sprite.setImage(image);

      index = (index + 1) % images.length;
    }, 500);

    return {
      type: "success",
      value: this,
    };
  }
}
