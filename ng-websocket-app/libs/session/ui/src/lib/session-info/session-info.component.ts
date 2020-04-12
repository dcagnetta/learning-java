import { Component, Input, OnInit } from '@angular/core';
import { Session } from '@ng-websocket-app/session/domain';

@Component({
  selector: 'session-info',
  templateUrl: './session-info.component.html',
  styleUrls: ['./session-info.component.scss']
})
export class SessionInfoComponent {

  @Input()
  session: Session;

}
