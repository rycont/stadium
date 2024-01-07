[stadium](../README.md) / [Exports](../modules.md) / LoopSprite

# Class: LoopSprite

ImageSprite에 반복되는 이미지를 표시할 수 있게 해주는 Hook입니다.

```ts
const sprite = new ImageSprite("image", 10, 10, 0, 100);
const sheet = {
    idle: ["idle1.png", "idle2.png", "idle3.png"],
    fly: ["fly1.png", "fly2.png", "fly3.png"],
}
const loop = new LoopSprite(sheet, 100)

sprite.use([ loop ])
loop.state = "fly";
```

## Hierarchy

- `Hook`

  ↳ **`LoopSprite`**

  ↳↳ [`LoopSpriteByDirection`](LoopSpriteByDirection.md)

## Table of contents

### Constructors

- [constructor](LoopSprite.md#constructor)

### Accessors

- [state](LoopSprite.md#state)

## Constructors

### constructor

• **new LoopSprite**(`sheet`, `interval?`): [`LoopSprite`](LoopSprite.md)

LoopSprite를 생성합니다. 생성자가 호출될 때, 시트에 있는 모든 이미지를 미리 로드합니다.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `sheet` | `Record`\<`string`, `string`[]\> & \{ `idle`: `string`[]  } | `undefined` | 스프라이트 시트 |
| `interval` | `number` | `200` | 이미지 전환 간격 |

#### Returns

[`LoopSprite`](LoopSprite.md)

#### Overrides

Hook.constructor

#### Defined in

[lib/hook/loopSprite.ts:33](https://github.com/rycont/stadium/blob/7ca00c5/lib/hook/loopSprite.ts#L33)

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

#### Defined in

[lib/hook/loopSprite.ts:53](https://github.com/rycont/stadium/blob/7ca00c5/lib/hook/loopSprite.ts#L53)
