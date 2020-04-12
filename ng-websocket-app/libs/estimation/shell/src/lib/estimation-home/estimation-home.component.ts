import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSession, State } from '@ng-websocket-app/shared/data-access';
import { Observable } from 'rxjs';
import { Session } from '@ng-websocket-app/session/domain';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ng-websocket-app-estimation-home',
  templateUrl: './estimation-home.component.html',
  styleUrls: ['./estimation-home.component.scss']
})
export class EstimationHomeComponent implements OnInit {

  constructor(private store: Store<State>) { }

  session$: Observable<Session>;

  ngOnInit(): void {
    // map state to a session domain object
    this.session$ = this.store.select(selectSession)
      .pipe(
        map( state => {
          return {id: state.id, name: state.name};
        } )
      );
  }

}
