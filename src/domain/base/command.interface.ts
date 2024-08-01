export interface ICommand<TRequest, TResponse> {
  handle(request: TRequest): Promise<TResponse>;
}
