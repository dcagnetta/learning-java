import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StartSession, StopSession } from './session.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class SessionEffects {

  /*
  * Once a session has started we navigate to the session
  * */
  navigateToSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StartSession),
      tap(action => this.router.navigate(['pages','estimation', action.id]) )
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
