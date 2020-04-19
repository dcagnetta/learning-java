export abstract class WebsocketStream {
  abstract connect(): void;
  abstract disconnect(): void;
}
