import { JoinSession, Session } from '@ng-websocket-app/session/domain';
import { Observable } from 'rxjs';
import { ApiResponse } from '@ng-websocket-app/shared/core';

export abstract class SessionData {
  abstract load(): Observable<Session[]>;
  abstract create(session: Session): Observable<any>;
  abstract join(command: JoinSession): Observable<ApiResponse>;
}
