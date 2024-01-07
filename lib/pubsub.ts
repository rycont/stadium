/**
 * PubSub 클래스는 이벤트를 생성하고 구독하는 PubSub 패턴을 구현합니다.
 *
 *
 * ```ts
 * const pubsub = new PubSub<['event1', 'event2']>();
 *
 * pubsub.sub('event1', () => console.log('event1 발생'));
 * pubsub.pub('event1'); // 'event1 발생'
 * ```
 *
 *
 * ```ts
 * const pubsub = new PubSub<['점심시간']>();
 *
 * pubsub.sub('점심시간', (food: string) => console.log(`${food} 먹을 시간입니다.`));
 * pubsub.pub('점심시간', ['김치찌개']);
 * ```
 *
 */
export class PubSub<Events extends string[]> {
  constructor() {}

  private handlers: {
    [key: string]: Function[];
  } = {};

  /**
   * 이벤트를 구독합니다.
   * @param event - 구독할 이벤트의 이름입니다
   * @param listener - 이벤트가 발생했을 때 실행할 함수입니다.
   *
   *
   * ```ts
   * pubsub.sub('register', (name: string) => console.log(`${name}님이 입장하셨습니다.`));
   * ```
   */
  public sub(event: Events[number], listener: Function) {
    if (!this.handlers[event]) this.handlers[event] = [];
    this.handlers[event].push(listener);
  }

  /**
   * 지정된 이벤트를 생성합니다.
   * @param event - 생성할 이벤트의 이름입니다.
   * @param args - 이벤트 핸들러에 전달할 인수의 배열입니다.
   *
   *
   * ```ts
   * pubsub.pub('register', ['홍길동']);
   * ```
   */
  public pub(event: Events[number], args: any[] = []) {
    if (!this.handlers[event]) return;
    for (const listener of this.handlers[event]) {
      listener(...args);
    }
  }
}
