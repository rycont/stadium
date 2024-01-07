[stadium](README.md) / Exports

# stadium

## Table of contents

### Classes

- [Animate](classes/Animate.md)
- [LineCrossingDetector](classes/LineCrossingDetector.md)
- [LoopSprite](classes/LoopSprite.md)
- [LoopSpriteByDirection](classes/LoopSpriteByDirection.md)
- [Stadium](classes/Stadium.md)

### Interfaces

- [Size](interfaces/Size.md)

### Type Aliases

- [Line](modules.md#line)
- [Point](modules.md#point)

### Variables

- [Line](modules.md#line-1)
- [Point](modules.md#point-1)

### Functions

- [isIntersecting](modules.md#isintersecting)

## Type Aliases

### Line

Ƭ **Line**: `Object`

2차원 좌표계의 선을 나타내는 인터페이스

#### Type declaration

| Name | Type |
| :------ | :------ |
| `p1` | \{ `left`: `number` ; `top`: `number`  } |
| `p1.left` | `number` |
| `p1.top` | `number` |
| `p2` | \{ `left`: `number` ; `top`: `number`  } |
| `p2.left` | `number` |
| `p2.top` | `number` |

#### Defined in

[lib/type.ts:39](https://github.com/rycont/stadium/blob/7ca00c5/lib/type.ts#L39)

[lib/type.ts:47](https://github.com/rycont/stadium/blob/7ca00c5/lib/type.ts#L47)

___

### Point

Ƭ **Point**: `Object`

2차원 좌표계의 점을 나타내는 인터페이스

#### Type declaration

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `top` | `number` |

#### Defined in

[lib/type.ts:6](https://github.com/rycont/stadium/blob/7ca00c5/lib/type.ts#L6)

[lib/type.ts:14](https://github.com/rycont/stadium/blob/7ca00c5/lib/type.ts#L14)

## Variables

### Line

• `Const` **Line**: `ZodObject`\<[`Line`](modules.md#line)\>

2차원 좌표계의 선을 나타내는 스키마

#### Defined in

[lib/type.ts:39](https://github.com/rycont/stadium/blob/7ca00c5/lib/type.ts#L39)

[lib/type.ts:47](https://github.com/rycont/stadium/blob/7ca00c5/lib/type.ts#L47)

___

### Point

• `Const` **Point**: `ZodObject`\<[`Point`](modules.md#point)\>

2차원 좌표계의 점을 나타내는 스키마

#### Defined in

[lib/type.ts:6](https://github.com/rycont/stadium/blob/7ca00c5/lib/type.ts#L6)

[lib/type.ts:14](https://github.com/rycont/stadium/blob/7ca00c5/lib/type.ts#L14)

## Functions

### isIntersecting

▸ **isIntersecting**(`a`, `b`): `boolean`

두 선분이 교차하는지 여부를 확인합니다.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `a` | `Object` | `undefined` | 첫 번째 선분 |
| `a.p1` | `Object` | `Point` | - |
| `a.p1.left` | `number` | `undefined` | - |
| `a.p1.top` | `number` | `undefined` | - |
| `a.p2` | `Object` | `Point` | - |
| `a.p2.left` | `number` | `undefined` | - |
| `a.p2.top` | `number` | `undefined` | - |
| `b` | `Object` | `undefined` | 두 번째 선분 |
| `b.p1` | `Object` | `Point` | - |
| `b.p1.left` | `number` | `undefined` | - |
| `b.p1.top` | `number` | `undefined` | - |
| `b.p2` | `Object` | `Point` | - |
| `b.p2.left` | `number` | `undefined` | - |
| `b.p2.top` | `number` | `undefined` | - |

#### Returns

`boolean`

교차 여부

#### Defined in

[lib/hook/lineCrossingDetector.ts:119](https://github.com/rycont/stadium/blob/7ca00c5/lib/hook/lineCrossingDetector.ts#L119)
