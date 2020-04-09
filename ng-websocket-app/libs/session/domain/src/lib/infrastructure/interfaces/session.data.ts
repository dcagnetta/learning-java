import { Session } from '@ng-websocket-app/session/domain';
import { Observable } from 'rxjs';

export abstract class SessionData {
  abstract load(): Observable<Session[]>;
  abstract create(session: Session): Observable<any>;
}
