import harang from "./asset/harang";
import { SceneForStudio } from "./studio/scene";
import { SpriteForStudio } from "./studio/spriteForStudio";

const section = document.getElementById("scene") as HTMLDivElement;
const scene = new SceneForStudio(section);

addEventListener("keypress", (event) => {
  if (event.key === "a") {
    const sprite = new SpriteForStudio(harang);
    scene.addSprite(sprite);
  } else if (event.key === "s") {
    prompt("장면의 JSON 데이터를 복사하세요", JSON.stringify(scene.toJSON()));
  }
});
