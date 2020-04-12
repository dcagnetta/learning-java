import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StartSession } from './session.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class SessionEffects {

  /*
  * Once a session has started we navigate to the session
  * */
  navigateToSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StartSession),
      tap(action => this.router.navigate(['pages', 'estimation']) )
    ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private router: Router
  ) {}

}
