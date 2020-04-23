import { Observable } from 'rxjs';
import { EstimationItem } from '@ng-websocket-app/estimation/domain';
import { ApiResponse } from '@ng-websocket-app/shared/core';

export abstract class EstimationData {
  abstract load(): Observable<EstimationItem[]>;
  abstract create(item: EstimationItem): Observable<ApiResponse>;
}
