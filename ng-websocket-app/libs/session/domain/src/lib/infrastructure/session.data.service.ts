import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Session } from '../entities/session';
import { ENV } from '@ng-websocket-app/shared/environments';
import { ApiResponse, HttpBaseService } from '@ng-websocket-app/shared/core';
import { SessionData } from './interfaces/session.data';
import { JoinSession } from '../..';

@Injectable()
export class SessionDataService extends HttpBaseService implements SessionData {

  private _baseUrl = this.environment.baseUrls.apiUrl + '/session';

  constructor( private http: HttpClient, @Inject( ENV ) private environment ) {
    super( http );
  }

  create( session: Session ): Observable<any> {
    console.log('session', session);
    return super.post<any>( this._baseUrl + '/create', session );
  }

  load(): Observable<Session[]> {
    return this.get<Session[]>(this._baseUrl);
  }

  join( command: JoinSession ): Observable<ApiResponse> {
    console.log('join', command);
    return super.post<ApiResponse>( this._baseUrl + '/join', command );
  }
}
