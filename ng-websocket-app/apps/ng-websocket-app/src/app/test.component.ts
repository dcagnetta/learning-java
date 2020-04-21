import { Component, OnDestroy, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import { BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component( {
  selector: 'test',
  template: `
      <div id="messages">
          <button class="btn btn-primary">Send Test Message</button>
          <h2>Received messages</h2>
          
          <div  *ngIf="messageReceived | async as message">
              <ol>
                  <!-- we will use Angular binding to populate list of messages -->
                  <li>{{message}}</li>
              </ol>
          </div>
         
      </div>

  `,
  styleUrls: ['test.component.scss']
} )
export class TestComponent implements OnInit, OnDestroy {


  // https://stomp-js.github.io/stomp-websocket/codo/extra/docs-src/Usage.md.html#toc_7

  public connectionEstablished = new BehaviorSubject<boolean>( false );
  public messageReceived = new Subject<any>();

  private stompClient: any;

  constructor() {
  }

  ngOnDestroy(): void {
    this.disconnect();
  }

  ngOnInit(): void {
    this.connect();
  }

  connect() {
    //connect to stomp where stomp endpoint is exposed
    //let ws = new SockJS(http://localhost:8080/greeting);
    const ws = new WebSocket( 'ws://localhost:8080/websocket-demo' );
    this.stompClient = Stomp.over( ws );

    // Add the following if you need automatic reconnect (delay is in milli seconds)
    this.stompClient.reconnect_delay = 5000;

    const that = this;

    const headers = { user: 'dillan' };
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

  // on error
  private errorCallBack( error ) {
    console.error( 'errorCallBack -> ' + error );
  }

  private setConnected( connected: boolean ) {
    this.connectionEstablished.next( connected );
  }
}
