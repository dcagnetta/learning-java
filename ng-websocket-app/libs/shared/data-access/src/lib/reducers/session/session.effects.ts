import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { JoinSession, StartSession, StopSession } from './session.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class SessionEffects {

  /*
  * Once a session has started we navigate to the session
  * */
  navigateToNewSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StartSession),
      tap(action => this.router.navigate(['pages','estimation', 'new', action.id]) )
    ), { dispatch: false });

  navigateToJoinSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JoinSession),
      tap(action => this.router.navigate(['pages','estimation','join', action.shortId]) )
    ), { dispatch: false });

  navigateToResetSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StopSession),
      tap(action =>  this.router.navigate(['../../'], { relativeTo: this.route }) )
    ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private router: Router,
    private route: ActivatedRoute
  ) {}

}
