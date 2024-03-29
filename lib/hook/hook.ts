import { Sprite } from "../sprite";
/**
 * Sprite를 확장해 더 다양한 기능을 추가할 수 있도록 합니다.
 */
export class Hook {
  _sprite?: Sprite;

  constructor() {}

  public onMount(sprite: Sprite): void {
    this._sprite = sprite;
  }

  public onDestroy() {}

  get sprite() {
    if (!this._sprite) throw new Error("Hook is not mounted");
    return this._sprite as Exclude<this["_sprite"], null | undefined>;
  }
}

export class HookManager {
  hooks: Hook[] = [];

  constructor(public sprite: Sprite) {}

  mount() {
    for (const hook of this.hooks) {
      hook.onMount(this.sprite);
    }
  }

  destroy() {
    for (const hook of this.hooks) {
      hook.onDestroy();
    }
  }

  use(hooks: Hook[]) {
    for (const hook of hooks) {
      hook.onMount(this.sprite);
      this.hooks.push(hook);
    }
  }

  has(hook: typeof Hook) {
    for (const h of this.hooks) {
      if (h instanceof hook) return true;
    }

    return false;
  }

  get(name: string) {
    // for (const h of this.hooks) {
    //   if (h.constructor.name === name) return h;
    // }

    const hook = this.hooks.filter((h) => h.constructor.name === name);
    return hook;

    // throw new Error(`Hook ${name} not found`);
  }
}
