import { Component, OnInit } from '@angular/core';
import { StartSession } from '@ng-websocket-app/session/domain';

@Component({
  selector: 'session-start-container',
  templateUrl: './start-container.component.html',
  styleUrls: ['./start-container.component.scss']
})
export class StartContainer implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSessionStarted( event: StartSession ) {
    console.log('onSessionStarted', event);
  }

}
