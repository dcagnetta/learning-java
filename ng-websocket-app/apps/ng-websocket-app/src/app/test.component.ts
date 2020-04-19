import { Component, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Component( {
  selector: 'test',
  template: `
      <div id="messages">
          <button class="btn btn-primary">Send Test Message</button>
          <h2>Received messages</h2>
          <ol>
              <!-- we will use Angular binding to populate list of messages -->
              <li class="message">message</li>
          </ol>
      </div>

  `,
  styleUrls: ['test.component.scss']
} )
export class TestComponent {


  // https://www.toptal.com/java/stomp-spring-boot-websocket

  constructor() {
    const ws = new SockJS( 'http://localhost:8080/websocket-demo' );
    const stompClient = Stomp.over( ws );

    stompClient.connect( { user: 'dillan' }, function( frame ) {
      console.log( 'Connected: ' + frame );
    } );
  }

}
