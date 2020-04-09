import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { selectSessionIsCreated, State } from '@ng-websocket-app/shared/data-access';
import { Store } from '@ngrx/store';

@Injectable({providedIn: 'root'})
export class SessionCreatedGuard implements CanActivate {
  constructor(private store: Store<State>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.select(selectSessionIsCreated)
      .pipe(
        tap(isCreated => {
          if (!isCreated) {
            this.router.navigate(['/']);
          }
        }),
      );

  }
}
