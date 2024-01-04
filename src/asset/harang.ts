import { SpriteSheet } from "../sprite";
import down_a from "./down_a.png";
import down_b from "./down_b.png";
import down_c from "./down_c.png";

import left_a from "./left_a.png";
import left_b from "./left_b.png";
import left_c from "./left_c.png";

import right_a from "./right_a.png";
import right_b from "./right_b.png";
import right_c from "./right_c.png";

import up_a from "./up_a.png";
import up_b from "./up_b.png";
import up_c from "./up_c.png";

export default {
  down: [down_a, down_b, down_c],
  left: [left_a, left_b, left_c],
  right: [right_a, right_b, right_c],
  up: [up_a, up_b, up_c],

  idle: [down_b],
} satisfies SpriteSheet;
