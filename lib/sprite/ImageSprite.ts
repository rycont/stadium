import { Locator } from "../hook/locator";
import { Position } from "./position";
import { Sprite } from ".";


export class ImageSprite extends Sprite {
    element = document.createElement("img");
    private _image!: string;

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

    set image(value: string) {
        this._image = value;
        this.draw();
    }
}
