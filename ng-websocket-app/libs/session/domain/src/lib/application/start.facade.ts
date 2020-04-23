import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, combineLatest, throwError } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { generate as shortid } from 'shortid';

import { Session } from '../entities/session';
import { SessionData } from '../infrastructure/interfaces/session.data';
import { map, switchMap, tap } from 'rxjs/operators';
import { StartSession } from './commands';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '@ng-websocket-app/shared/data-access';
import { ToastrService } from '../../../../../shared/core/src/lib/services/toastr.service';
import { WebsocketStream } from '../infrastructure/interfaces/websocket.stream';

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
            case 'New': {
              const id = uuidv4(); // Generate unique id
              const shortId = shortid();
              return this.api.create( { id, name: command.name, shortId } )
                .pipe( tap( _ => {
                  this.store.dispatch( fromRoot.StartSession( { id, name: command.name, shortId } ) );
                } ) );
            }

            case 'Join': {
              return this.api.join( { username: command.username, shortId: command.name } )
                .pipe(
                  map( response => {

                    if ( !response.success ) {
                      const toastConfig = {
                        destroyByClick: true,
                        duration: 6000
                      };
                      this.messenger.info( 'Invalid Session Code.', response.error, toastConfig );
                    } else {
                      this.store.dispatch( fromRoot.JoinSession( { shortId: command.name, username: command.username } ) );
                      this.socket.connect(command.username + command.name);
                    }

                  } ) );
            }

            default:
              throwError( 'StartSession command type unknown.' );
          }

        } )
      );


  constructor(
    private api: SessionData,
    private store: Store<fromRoot.State>,
    private socket: WebsocketStream,
    private messenger: ToastrService ) {
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
