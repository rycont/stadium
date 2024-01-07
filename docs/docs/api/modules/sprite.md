---
id: "sprite"
title: "Module: sprite"
sidebar_label: "sprite"
sidebar_position: 0
custom_edit_url: null
---

## Classes

- [ImageSprite](../classes/sprite.ImageSprite.md)
- [Sprite](../classes/sprite.Sprite.md)

## Type Aliases

### SpriteSheet

Ƭ **SpriteSheet**: `z.infer`\<typeof [`SpriteSheet`](sprite.md#spritesheet-1)\>

#### Defined in

[lib/sprite/index.ts:90](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L90)

[lib/sprite/index.ts:97](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L97)

## Variables

### DEFAULT\_SPRITE\_STATE

• `Const` **DEFAULT\_SPRITE\_STATE**: ``"idle"``

#### Defined in

[lib/sprite/index.ts:7](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L7)

___

### SpriteSheet

• `Const` **SpriteSheet**: `ZodIntersection`\<`ZodRecord`\<`ZodString`, `ZodArray`\<`ZodString`, ``"many"``\>\>, `ZodObject`\<\{ `idle`: `ZodArray`\<`ZodString`, ``"many"``\>  }, ``"strip"``, `ZodTypeAny`, \{ `idle`: `string`[]  }, \{ `idle`: `string`[]  }\>\>

#### Defined in

[lib/sprite/index.ts:90](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L90)

[lib/sprite/index.ts:97](https://github.com/rycont/stadium/blob/85a354b/lib/sprite/index.ts#L97)
