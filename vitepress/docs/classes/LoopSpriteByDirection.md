[stadium](../README.md) / [Exports](../modules.md) / LoopSpriteByDirection

# Class: LoopSpriteByDirection

LoopSprite를 상속받아, Animate Hook의 이동 방향에 따라 이미지를 전환하는 Hook입니다.
Animate Hook보다 이후에 마운트되어야 합니다.

```ts
const sprite = new ImageSprite("image", 10, 10, 0, 100);

const sheet = {
    left: ["left1.png", "left2.png", "left3.png"],
    right: ["right1.png", "right2.png", "right3.png"],
    up: ["up1.png", "up2.png", "up3.png"],
    down: ["down1.png", "down2.png", "down3.png"],
    idle: ["idle1.png", "idle2.png", "idle3.png"],
}

const loop = new LoopSpriteByDirection(sheet, 100)
const animate = new Animate();

sprite.use([ animate, loop ])

animate.moveTo(100, 0) // 오른쪽으로 이동하며 이미지가 전환됩니다.
```

## Hierarchy

- [`LoopSprite`](LoopSprite.md)

  ↳ **`LoopSpriteByDirection`**

## Table of contents

### Constructors

- [constructor](LoopSpriteByDirection.md#constructor)

### Accessors

- [state](LoopSpriteByDirection.md#state)

## Constructors

### constructor

• **new LoopSpriteByDirection**(`sheet`, `interval?`): [`LoopSpriteByDirection`](LoopSpriteByDirection.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `sheet` | `Record`\<`string`, `string`[]\> & \{ `idle`: `string`[]  } | `undefined` | 스프라이트 시트에는 `left`, `right`, `up`, `down`, `idle` 상태가 있어야 합니다. |
| `interval` | `number` | `500` | 이미지 전환 간격 |

#### Returns

[`LoopSpriteByDirection`](LoopSpriteByDirection.md)

#### Overrides

[LoopSprite](LoopSprite.md).[constructor](LoopSprite.md#constructor)

#### Defined in

[lib/hook/loopSprite.ts:125](https://github.com/rycont/stadium/blob/574e59c/lib/hook/loopSprite.ts#L125)

## Accessors

### state

• `set` **state**(`value`): `void`

보여줄 시트의 상태를 설정합니다.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 상태 값 ```ts loop.state = "fly"; ``` |

#### Returns

`void`

#### Inherited from

LoopSprite.state

#### Defined in

[lib/hook/loopSprite.ts:53](https://github.com/rycont/stadium/blob/574e59c/lib/hook/loopSprite.ts#L53)
