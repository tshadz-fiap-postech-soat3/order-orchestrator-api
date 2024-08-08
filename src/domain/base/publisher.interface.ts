export interface IPublisher<TMessage> {
  handle(message: TMessage): void;
}
