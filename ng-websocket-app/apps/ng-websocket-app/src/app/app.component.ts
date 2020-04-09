import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '@ng-websocket-app/shared/data-access';

@Component({
  selector: 'ng-websocket-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-websocket-app';


  constructor(private store: Store<State>) {
  }

}
