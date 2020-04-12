import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { selectSessionIsStarted, State } from '@ng-websocket-app/shared/data-access';
import { Store } from '@ngrx/store';

@Injectable({providedIn: 'root'})
export class SessionStartedGuard implements CanActivate {
  constructor(private store: Store<State>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.select(selectSessionIsStarted)
      .pipe(
        tap(started => {
          if (!started) {
            this.router.navigate(['/']);
          }
        }),
      );

  }
}
