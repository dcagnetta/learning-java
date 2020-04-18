import { Injectable, OnDestroy } from '@angular/core';

import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { exhaustMap, tap } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

import { EstimationItem } from '../entities/estimation-item';
import { EstimationData } from '../infrastructure/interfaces/estimation-data';
import { State } from '@ng-websocket-app/shared/data-access';
import { Store } from '@ngrx/store';


@Injectable()
export class EstimationItemFacade implements OnDestroy {

  private createSubject = new Subject<EstimationItem>();
  private listSubject = new BehaviorSubject<EstimationItem[]>([]);

  // ------- Streams  ------------------------

  /**
   * Items data Stream
   * */
  estimationItems$: Observable<EstimationItem[]> = this.listSubject.asObservable();

  /**
   * Create Item Subscription
   * Triggers create item to  api call whenever subject changes
   */
  createSubscription: Subscription =
    this.createSubject
      .pipe(
        tap( item => this.addToList( item )), // This order matters
        exhaustMap( item =>  this.api.create( item ) )
      ).subscribe();

  constructor( private api: EstimationData, private store: Store<State> ) {
  }

  // ------- Public Methods ------------------------

  create( item: EstimationItem ) {
    console.log('create', item);
    item.id =  uuidv4(); // Generate unique id
    this.createSubject.next( item );
  }


  // ------- Private Methods ------------------------
  private addToList( item: EstimationItem ) {
    const list = this.listSubject.getValue();
    list.push(item);
    this.listSubject.next(list);
  }

  ngOnDestroy(): void {
    console.log('Service destroy')
  }
}
