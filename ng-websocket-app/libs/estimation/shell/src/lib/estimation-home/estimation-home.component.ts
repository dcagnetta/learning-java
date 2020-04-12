import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSessionName, State } from '@ng-websocket-app/shared/data-access';

@Component({
  selector: 'ng-websocket-app-estimation-home',
  templateUrl: './estimation-home.component.html',
  styleUrls: ['./estimation-home.component.scss']
})
export class EstimationHomeComponent implements OnInit {

  constructor(private store: Store<State>) { }

  sessionName$ = this.store.select(selectSessionName);

  ngOnInit(): void {
  }

}
