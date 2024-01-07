import { Locator } from "../hook/locator";
import { Position } from "./position";
import { Sprite } from ".";

/**
 * ```ts
 * const src = "/asset/eth.png"
 *
 * // 크기 설정
 * const width = 80
 * const height = 80
 *
 * // 위치 설정
 * const left = 40
 * const top = 40
 *
 * const image = new ImageSprite(src, width, height, left, top)
 * stadium.addSprite(image)
 * ```
 * 이미지를 그릴 수 있는 Sprite입니다.
 */

export class ImageSprite extends Sprite {
  public element = document.createElement("img");
  private _image!: string;

  /**
   * 새 ImageSprite 인스턴스를 생성합니다.
   * @param image 표시될 이미지의 URL. `src` 속성으로 설정됩니다.
   * @param width 가로 크기
   * @param height 세로 크기
   * @param left
   * @param top
   */

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

    style.setProperty("width", `calc(var(--x-ratio) * ${this.width}px)`);
    style.setProperty("height", `calc(var(--y-ratio) * ${this.height}px)`);

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
