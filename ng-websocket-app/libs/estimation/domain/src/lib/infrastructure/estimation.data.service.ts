import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpBaseService } from '@ng-websocket-app/shared/core';
import { EstimationData } from './interfaces/estimation-data';
import { ENV } from '@ng-websocket-app/shared/environments';
import { EstimationItem } from '../..';

@Injectable()
export class EstimationDataService extends HttpBaseService implements EstimationData {

  private _baseUrl = this.environment.baseUrls.apiUrl + '/estimation';

  constructor( private http: HttpClient, @Inject( ENV ) private environment ) {
    super( http );
  }

  load(): Observable<EstimationItem[]> {
    return of( [
      { id: '1', name: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet' },
      { id: '2', name: 'At vero eos', description: 'At vero eos et accusam et justo duo dolores' },
      { id: '3', name: 'Duis autem', description: 'Duis autem vel eum iriure dolor in hendrerit' }
    ] );
  }

  create( item: EstimationItem ): Observable<any> {
    // console.log('create item', item);
    return super.post<any>( this._baseUrl + '/create-item', item );  }
}
