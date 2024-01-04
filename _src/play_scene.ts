import { Scene } from "./scene";

const sceneData = JSON.parse(prompt("장면의 JSON 데이터를 붙여넣으세요")!);

const scene = Scene.fromJSON(
  document.getElementById("scene") as HTMLDivElement,
  sceneData
);

const sprite1 = Object.values(scene.sprites)[0];
const sprite2 = Object.values(scene.sprites)[1];

addEventListener("keydown", (event) => {
  switch (event.key) {
    case "a":
      sprite1.moveBy(-100, 0, 1000);
      break;
    case "d":
      sprite1.moveBy(100, 0, 1000);
      break;
    case "w":
      sprite1.moveBy(0, -100, 1000);
      break;
    case "s":
      sprite1.moveBy(0, 100, 1000);
      break;
    case "ArrowLeft":
      sprite2.moveBy(-100, 0, 1000);
      break;
    case "ArrowRight":
      sprite2.moveBy(100, 0, 1000);
      break;
    case "ArrowUp":
      sprite2.moveBy(0, -100, 1000);
      break;
    case "ArrowDown":
      sprite2.moveBy(0, 100, 1000);
      break;
  }

  console.log(event.key);
});
