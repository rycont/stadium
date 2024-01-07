/**
 * A generic PubSub class that allows subscribing to and publishing events.
 * @template T - The type of events that can be subscribed to.
 */
export class PubSub<T extends readonly string[]> {
  constructor(public events: T) { }

  handlers: {
    [key: string]: Function[];
  } = {};

  /**
   * Subscribes a listener function to an event.
   * @param event - The event to subscribe to.
   * @param listener - The listener function to be called when the event is published.
   */
  sub(event: T[number], listener: Function) {
    if (!this.handlers[event]) this.handlers[event] = [];
    this.handlers[event].push(listener);
  }

  /**
   * Publishes an event with optional arguments.
   * @param event - The event to publish.
   * @param args - Optional arguments to pass to the event listeners.
   */
  pub(event: T[number], args: any[] = []) {
    if (!this.handlers[event]) return;
    for (const listener of this.handlers[event]) {
      listener(...args);
    }
  }
}
