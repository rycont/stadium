// // Stage는 코딩교육 프로그램에 사용되는 컴포넌트이다
// // Stage는 StageStudio와 StagePlayer로 구성되어 있다

// // Studio는 코딩을 할 수 있는 맵을 만드는 공간이다
// // Player는 만들어진 맵을 실행하는 공간이다

// // Studio에서 만든 맵은 JSON으로 저장되며, Player에서 실행할 수 있다
// // Studio는 다음과 같은 기능을 가진다

// // 1. Sprite를 추가할 수 있다
// // 2. Sprite를 삭제할 수 있다
// // 3. 드래그 앤 드랍으로 Sprite의 위치를 변경할 수 있다

// // Sprite는 맵에 배치되는 객체이다
// // 다음과 같은 Sprite가 미리 정의되어 있다

// // 1. 벽: 플레이어가 통과할 수 없는 장애물
// // 2. 물: 플레이어가 물에 빠지면 게임이 종료된다
// // 3. 고기: 맵에 배치된 고기를 모두 먹으면 게임이 클리어된다
// // 4. 이미지 스프라이트: 이미지를 표시하는 스프라이트

// export class Sprite {
//   constructor(
//     public x: number,
//     public y: number,
//     public width: number,
//     public height: number,
//     public rotate: number
//   ) {
//     // Sprite의 위치와 크기를 초기화한다
//   }

//   toJSON() {
//     return {
//       x: this.x,
//       y: this.y,
//       width: this.width,
//       height: this.height,
//       rotate: this.rotate,
//       type: this.constructor.name,
//     };
//   }
// }

// export class Wall extends Sprite {
//   constructor(x: number, y: number, width: number, height: number) {
//     super(x, y, width, height, 0);
//   }

//   toJSON() {
//     return {
//       ...super.toJSON(),
//       color: "black",
//     };
//   }
// }

// export class StageStudio {
//   constructor(public element: HTMLElement) {
//     // Studio를 보여줄 HTML Element를 받아서 초기화한다
//   }

//   addSprite(sprite: Sprite) {
//     // Sprite를 추가한다
//   }

//   removeSprite(sprite: Sprite) {
//     // Sprite를 삭제한다
//   }
// }
