export class PubSub<T extends string[]> {
  constructor(public events: T) {}

  handlers: {
    [key: string]: Function[];
  } = {};

  sub(event: T[number], listener: Function) {
    if (!this.handlers[event]) this.handlers[event] = [];
    this.handlers[event].push(listener);
  }

  pub(event: T[number], args: any[] = []) {
    if (!this.handlers[event]) return;
    for (const listener of this.handlers[event]) {
      listener(...args);
    }
  }
}
