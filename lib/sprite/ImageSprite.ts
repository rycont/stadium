import { Locator } from "../hook/locator";
import { Position } from "./position";
import { Sprite } from ".";
import { Point, Size, isPoint } from "../type";
import { z } from "zod";

/**
 * ```ts
 * const src = "/asset/eth.png"
 *
 * // 크기 설정
 * const size = { width: 80, height: 80 }
 *
 * // 위치 설정
 * const position = { left: 400, top: 320 }
 *
 * const image = new ImageSprite({ src, size, position })
 * stadium.addSprite(image)
 * ```
 * 이미지를 그릴 수 있는 Sprite입니다.
 */

export class ImageSprite extends Sprite {
  public element = document.createElement("img");
  private _image!: string;

  private size: Size;

  static propScheme = z.object({
    src: z.string(),
    position: z.custom(isPoint),
    size: z.object({ width: z.number(), height: z.number() }),
  });

  /**
   * 새 ImageSprite 인스턴스를 생성합니다.
   * @param image 표시될 이미지의 URL. `src` 속성으로 설정됩니다.
   * @param width 가로 크기
   * @param height 세로 크기
   * @param left
   * @param top
   */

  constructor(props: { src: string; position: Point; size: Size }) {
    ImageSprite.propScheme.parse(props);

    super(new Position(props.position.left, props.position.top));

    this._image = props.src;
    this.size = props.size;

    this.use([new Locator()]);
  }

  draw(): void {
    const element = this.element;
    const style = element.style;

    style.setProperty("width", `calc(var(--x-ratio) * ${this.size.width}px)`);
    style.setProperty("height", `calc(var(--y-ratio) * ${this.size.height}px)`);

    element.src = this.image;
  }

  get image() {
    return this._image;
  }

  /**
   * 새 이미지를 설정합니다.
   *
   * @param value 새 이미지의 URL
   */

  set image(value: string) {
    this._image = value;
    this.draw();
  }
}
