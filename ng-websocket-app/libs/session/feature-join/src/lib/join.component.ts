import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { JoinFacade, StartSession } from '@ng-websocket-app/session/domain';

@Component( {
  selector: 'session-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
} )
export class JoinComponent implements OnInit {

  @Output()
  joined = new EventEmitter<StartSession>();

  constructor( private joinFacade: JoinFacade ) {
  }


  ngOnInit() {
  }

}

