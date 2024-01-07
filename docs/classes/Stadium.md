[stadium](../README.md) / [Exports](../modules.md) / Stadium

# Class: Stadium

Stadium은 스프라이트가 배치될 수 있는 공간입니다.

```ts
const element = document.querySelector('.stadium')
const designedSize = { width: 1000, height: 1000 }
const actualSize = { width: 500, height: 500 }

const stadium = new Stadium(element, designedSize, actualSize);
```

> **Stadium을 초기화하면 `element`에는 다음과 같은 변화가 생깁니다**
> 1. `position`이 `relative`로 설정됩니다
> 2. `width`와 `height`가 `actualSize`의 값으로 설정됩니다
> 3. 종횡비가 CSS Variable에 저장됩니다
>    - `--x-ratio`: `width / designedSize.width`
>    - `--y-ratio`: `height / designedSize.height`

## Table of contents

### Constructors

- [constructor](Stadium.md#constructor)

### Properties

- [element](Stadium.md#element)
- [pubsub](Stadium.md#pubsub)
- [sprites](Stadium.md#sprites)

### Methods

- [addSprite](Stadium.md#addsprite)

## Constructors

### constructor

• **new Stadium**(`element`, `designedSize`, `actualSize?`): [`Stadium`](Stadium.md)

Stadium 클래스의 생성자입니다.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `element` | `HTMLDivElement` | `undefined` | 스타디움을 표시할 HTMLDivElement입니다. |
| `designedSize` | [`Size`](../interfaces/Size.md) | `undefined` | 스타디움의 설계 크기 |
| `actualSize` | [`Size`](../interfaces/Size.md) | `designedSize` | 실제 렌더링될 Element의 크기 |

#### Returns

[`Stadium`](Stadium.md)

#### Defined in

[lib/stadium/index.ts:46](https://github.com/rycont/stadium/blob/7ca00c5/lib/stadium/index.ts#L46)

## Properties

### element

• **element**: `HTMLDivElement`

스타디움을 표시할 HTMLDivElement입니다.

#### Defined in

[lib/stadium/index.ts:47](https://github.com/rycont/stadium/blob/7ca00c5/lib/stadium/index.ts#L47)

___

### pubsub

• **pubsub**: `PubSub`\<[``"spriteMove"``]\>

Stadium의 이벤트를 구독할 수 있는 PubSub 객체

```ts
stadium.pubsub.sub('spriteMove', (sprite: Sprite) => {
   console.log(sprite, `가 이동했습니다.`);
})
```

#### Defined in

[lib/stadium/index.ts:38](https://github.com/rycont/stadium/blob/7ca00c5/lib/stadium/index.ts#L38)

___

### sprites

• **sprites**: `Sprite`[] = `[]`

Stadium에 배치된 스프라이트들의 목록

#### Defined in

[lib/stadium/index.ts:27](https://github.com/rycont/stadium/blob/7ca00c5/lib/stadium/index.ts#L27)

## Methods

### addSprite

▸ **addSprite**(`sprite`): `void`

스프라이트를 스타디움에 추가합니다. Stadium에 Sprite를 추가하는 과정을 `mount`라고 합니다.

```ts
stadium.addSprite(sprite);
```

다음의 순서로 mount됩니다:

1. DOM에 Sprite의 엘리먼트가 추가됩니다.
2. `sprite.onMount` 이벤트를 호출합니다
    - onMount 함수에는 `Stadium`과 `id`가 전달됩니다.
    - `id`는 crypto.randomUUID 함수를 사용해서 만들어집니다. **고유함을 보장하지 않습니다.**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sprite` | `Sprite` | 추가할 스프라이트 객체입니다. |

#### Returns

`void`

#### Defined in

[lib/stadium/index.ts:85](https://github.com/rycont/stadium/blob/7ca00c5/lib/stadium/index.ts#L85)
