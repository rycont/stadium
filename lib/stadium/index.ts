import { PubSub } from "../pubsub";
import { Sprite } from "../sprite";
import { Size, isSize } from "../type";

/**
 * Stadium은 스프라이트가 배치될 수 있는 공간입니다.
 *
 * ```ts
 * const element = document.querySelector('.stadium')
 * const designedSize = { width: 1000, height: 1000 }
 * const actualSize = { width: 500, height: 500 }
 *
 * const stadium = new Stadium(element, designedSize, actualSize);
 * ```
 *
 * > **Stadium을 초기화하면 `element`에는 다음과 같은 변화가 생깁니다**
 * > 1. `position`이 `relative`로 설정됩니다
 * > 2. `width`와 `height`가 `actualSize`의 값으로 설정됩니다
 * > 3. 종횡비가 CSS Variable에 저장됩니다
 * >    - `--x-ratio`: `width / designedSize.width`
 * >    - `--y-ratio`: `height / designedSize.height`
 */
export class Stadium {
  /**
   * Stadium에 배치된 스프라이트들의 목록
   */
  public sprites: Sprite[] = [];

  /**
   * Stadium의 이벤트를 구독할 수 있는 PubSub 객체
   *
   * ```ts
   * stadium.pubsub.sub('spriteMove', (sprite: Sprite) => {
   *    console.log(sprite, `가 이동했습니다.`);
   * })
   * ```
   */
  public pubsub = new PubSub<["spriteMove"]>();

  /**
   * Stadium 클래스의 생성자입니다.
   * @param element 스타디움을 표시할 HTMLDivElement입니다.
   * @param designedSize 스타디움의 설계 크기
   * @param actualSize 실제 렌더링될 Element의 크기
   */
  constructor(
    public element: HTMLDivElement,
    designedSize: Size,
    actualSize: Size = designedSize
  ) {
    if (!(element instanceof HTMLDivElement))
      throw new Error("element must be HTMLDivElement");

    if (!isSize(designedSize)) throw new Error("designedSize must be Size");
    if (!isSize(actualSize)) throw new Error("actualSize must be Size");

    this.element.style.setProperty("position", "relative");

    const { width, height } = actualSize;

    this.element.style.setProperty(
      "--x-ratio",
      `${width / designedSize.width}`
    );
    this.element.style.setProperty(
      "--y-ratio",
      `${height / designedSize.height}`
    );

    this.element.style.setProperty("width", `${width}px`);
    this.element.style.setProperty("height", `${height}px`);
  }

  /**
   * 스프라이트를 스타디움에 추가합니다. Stadium에 Sprite를 추가하는 과정을 `mount`라고 합니다.
   *
   * ```ts
   * stadium.add(sprite);
   * ```
   *
   * 다음의 순서로 mount됩니다:
   *
   * 1. DOM에 Sprite의 엘리먼트가 추가됩니다.
   * 2. `sprite.onMount` 이벤트를 호출합니다
   *     - onMount 함수에는 `Stadium`과 `id`가 전달됩니다.
   *     - `id`는 crypto.randomUUID 함수를 사용해서 만들어집니다. **고유함을 보장하지 않습니다.**
   *
   * @param sprite 추가할 스프라이트 객체입니다.
   * @deprecated `Stadium.addSprite`는 `Stadium.add`로 대체되었습니다.
   */
  addSprite(sprite: Sprite) {
    this.sprites.push(sprite);
    this.element.appendChild(sprite.element);

    sprite.onMount(this, crypto.randomUUID());
    sprite.pubsub.sub("move", () => {
      this.pubsub.pub("spriteMove", [sprite]);
    });
  }

  public add(target: Sprite | Sprite[]) {
    if (target instanceof Sprite) {
      this.addSprite(target);
      return;
    }

    if (Array.isArray(target)) {
      for (const sprite of target) {
        this.addSprite(sprite);
      }

      return;
    }

    throw new Error("Invalid target for [Stadium].add");
  }
}
