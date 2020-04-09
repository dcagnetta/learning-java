import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, combineLatest } from 'rxjs';

import { Session } from '../entities/session';
import { SessionData } from '../infrastructure/interfaces/session.data';
import { switchMap, tap } from 'rxjs/operators';
import { StartSession } from './commands';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '@ng-websocket-app/shared/data-access';

@Injectable()
export class StartFacade {

  private sessionListSubject = new BehaviorSubject<Session[]>( [] );
  private sessionSubject = new Subject<StartSession>();

  // ------- Internal State  ------------------------
  session$ = this.sessionSubject.asObservable();
  sessionList$ = this.sessionListSubject.asObservable();


  isSessionCreated$ = this.store.pipe( select( fromRoot.selectSessionIsCreated ) );


  /**
   * Triggers create Session from api automatically whenever new session is created
   */
  start$: Observable<any> =
    combineLatest( [this.session$] )
      .pipe(
        switchMap( ( [command] ) => {

          switch ( command.type ) {
            case 'New':
              return this.api.create( { name: command.name } )
                .pipe( tap( _ => {
                  this.store.dispatch( fromRoot.StartSession( { name: command.name } ) );
                } ) );
          }

        } )
      );


  constructor( private api: SessionData, private store: Store<fromRoot.State> ) {
  }

  load(): void {
    this.api.load().subscribe(
      sessionList => {
        this.sessionListSubject.next( sessionList );
      },
      err => {
        console.error( 'err', err );
      }
    );
  }


  // ------- Public Methods ------------------------
  updateStartSession( session: StartSession ) {
    this.sessionSubject.next( session );
  }

}
