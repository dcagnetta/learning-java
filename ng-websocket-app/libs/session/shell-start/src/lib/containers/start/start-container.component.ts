import { Component, OnDestroy, OnInit } from '@angular/core';
import { StartFacade, StartSession } from '@ng-websocket-app/session/domain';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'session-start-container',
  templateUrl: './start-container.component.html',
  styleUrls: ['./start-container.component.scss']
})
export class StartContainer implements OnInit, OnDestroy {

  constructor(public facade: StartFacade) { }

  ngOnInit(): void {
    this.facade.start$
      .pipe(untilDestroyed(this))
      .subscribe();
  }

  onSessionStarted( command: StartSession ) {
    this.facade.updateStartSession(command);
  }

  // This method must be present, even if empty.
  ngOnDestroy() {
    // We'll throw an error if it doesn't
    console.log('Session StartContainer Destroyed');
  }

}
