import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, combineLatest, throwError } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { generate as shortid }  from 'shortid';

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
  isSessionJoined$ = this.store.pipe( select( fromRoot.selectSessionIsJoined ) );


  /**
   * Triggers create Session from api automatically whenever new session is created
   */
  start$: Observable<any> =
    combineLatest( [this.session$] )
      .pipe(
        switchMap( ( [command] ) => {

          switch ( command.type ) {
            case 'New':
              const id = uuidv4(); // Generate unique id
              const shortId = shortid();
              return this.api.create( { id, name: command.name, shortId } )
                .pipe( tap( _ => {
                  this.store.dispatch( fromRoot.StartSession( { id, name: command.name, shortId } ) );
                } ) );

            case 'Join': {

            }

            throwError('StartSession command type unknown.');
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
