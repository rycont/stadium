import { SpriteSheet } from "../lib/sprite";

export default {
  down: ["/asset/down_a.png", "/asset/down_b.png", "/asset/down_c.png"],
  left: ["/asset/left_a.png", "/asset/left_b.png", "/asset/left_c.png"],
  right: ["/asset/right_a.png", "/asset/right_b.png", "/asset/right_c.png"],
  up: ["/asset/up_a.png", "/asset/up_b.png", "/asset/up_c.png"],

  idle: ["/asset/down_b.png"],
} satisfies SpriteSheet;
