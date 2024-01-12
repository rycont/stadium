<h1 align="center">
Stadium
</h1>
<p align="center">
코딩 교육용 웹 게임을 쉽게 개발할 수 있도록 도와주는 UI 라이브러리
</p>

<p align="center">
  <a href="https://stadium.pages.dev/">문서</a> | <a href="https://stadium.pages.dev/따라하기/1.%20맵%20만들기">따라하며 배우기</a>
</p>

```js
const picture = new ImageSprite({
  src: "https://picsum.photos/200",
  size: {
    width: 40,
    height: 40,
  },
  position: {
    left: 160,
    top: 220,
  },
});
const animate = new Animate();

picture.use([animate]);
stadium.addSprite(picture);

addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      animate.moveBy(0, -20, 100);
      break;
    case "ArrowDown":
      animate.moveBy(0, 20, 100);
      break;
    case "ArrowLeft":
      animate.moveBy(-20, 0, 100);
      break;
    case "ArrowRight":
      animate.moveBy(20, 0, 100);
      break;
  }
});
```
