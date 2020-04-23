export abstract class WebsocketStream {
  abstract connect( username: string ): void;
  abstract disconnect(): void;
}
