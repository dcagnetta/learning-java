import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Session } from '../entities/session';
import { ENV } from '@ng-websocket-app/shared/environments';

@Injectable({ providedIn: 'root' })
export class SessionDataService {

    constructor(private http: HttpClient, @Inject( ENV ) private environment) {
    }

    load(): Observable<Session[]> {

        // Uncomment if needed
        /*
        const url = '...';
        const params = new HttpParams().set('param', 'value');
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Session[]>(url, {params, headers});
        */
        
        return of([
            {id: 1, name: 'Lorem ipsum'},
            {id: 2, name: 'At vero eos'},
            {id: 3, name: 'Duis autem'},
        ]);
      }
}
