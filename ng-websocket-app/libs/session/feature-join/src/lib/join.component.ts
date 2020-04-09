import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StartSession } from '@ng-websocket-app/session/domain';

@Component( {
  selector: 'session-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
} )
export class JoinComponent implements OnInit {

  @Output()
  joined = new EventEmitter<StartSession>();

  constructor() {
  }


  ngOnInit() {
  }

}

