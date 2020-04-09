import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, combineLatest} from 'rxjs';

import { Session } from '../entities/session';
import { SessionData } from '../infrastructure/interfaces/session.data';
import { switchMap } from 'rxjs/operators';
import { StartSession } from './commands';


@Injectable()
export class StartFacade {

  private sessionListSubject = new BehaviorSubject<Session[]>( [] );
  private sessionSubject = new Subject<StartSession>();

  // ------- Internal State  ------------------------
  session$ = this.sessionSubject.asObservable();
  sessionList$ = this.sessionListSubject.asObservable();

  /**
   * Triggers create Session from api automatically whenever new session is created
   */
  start$: Observable<any> =
    combineLatest( [this.session$] )
      .pipe(
        switchMap( ( [session] ) => {

          switch ( session.type ) {
            case 'New': return this.api.create({name: session.session})
          }

        } )
      );


  constructor( private api: SessionData ) {
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
