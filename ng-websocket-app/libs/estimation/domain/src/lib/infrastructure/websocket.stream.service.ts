import { WebsocketStream } from './interfaces/websocket.stream';
import { Inject, OnDestroy, OnInit } from '@angular/core';
import { ENV } from '@ng-websocket-app/shared/environments';

import * as Stomp from 'stompjs';
import { BehaviorSubject, Subject } from 'rxjs';

/**
 * https://stomp-js.github.io/stomp-websocket/codo/extra/docs-src/Usage.md.html#toc_7
 * */
export class WebsocketStreamService implements WebsocketStream, OnDestroy {

  public connectionEstablished = new BehaviorSubject<boolean>( false );
  public messageReceived = new Subject<any>();

  private stompClient: any;

  constructor( @Inject( ENV ) private environment ) {
  }

  connect( username: string ): void {
    //connect to stomp where stomp endpoint is exposed
    //let ws = new SockJS(http://localhost:8080/greeting);
    const ws = new WebSocket( this.environment.baseUrls.websocketUrl );
    this.stompClient = Stomp.over( ws );

    // Add the following if you need automatic reconnect (delay is in milli seconds)
    this.stompClient.reconnect_delay = 5000;

    const that = this;

    // Try Connect
    const headers = { user: username };
    this.stompClient.connect( headers, function( frame ) {
      that.setConnected( true );
      console.log( 'Connected: ' + frame );

      // Subscriptions
      that.registerOnServerEvents(that);

    }, this.errorCallBack );
  }

  private registerOnServerEvents(that): void {
    // server events
    that.stompClient.subscribe( '/user/queue/user-reply', function( message ) {
      console.log( 'Message Received: ' + message.body );
      that.messageReceived.next( message.body );
    } );

    that.stompClient.subscribe( '/user/queue/user-reply', function( message ) {
      console.log( 'Message Received: ' + message.body );
      that.messageReceived.next( message.body );
    } );

    that.stompClient.subscribe( '/topic/notification', function( message ) {
      console.log( 'Message Received: ' + message.body );
      that.messageReceived.next( message.body );
    } );

  }

  public disconnect() {
    if ( this.stompClient !== null ) {
      this.stompClient.disconnect();
    }
    this.setConnected( false );
    console.log( 'Disconnected' );
  }

  ngOnDestroy(): void {
    console.log( 'WebsocketStreamService ngOnDestroy called' );
    this.disconnect();
  }

  // on error
  private errorCallBack( error ) {
    console.error( 'errorCallBack -> ' + error );
  }

  private setConnected( status: boolean ) {
    this.connectionEstablished.next( status );
  }

}
