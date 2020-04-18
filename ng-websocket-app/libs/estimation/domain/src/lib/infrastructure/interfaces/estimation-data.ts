import { Observable } from 'rxjs';
import { EstimationItem } from '@ng-websocket-app/estimation/domain';

export abstract class EstimationData {
  abstract load(): Observable<EstimationItem[]>;
  abstract create(item: EstimationItem): Observable<any>;
}
