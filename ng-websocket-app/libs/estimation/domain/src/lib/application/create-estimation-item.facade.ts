import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { EstimationItem } from '../entities/estimation-item';
import { EstimationItemDataService } from '../infrastructure/estimation-item.data.service';


@Injectable({ providedIn: 'root' })
export class CreateEstimationItemFacade {

    private estimationItemListSubject = new BehaviorSubject<EstimationItem[]>([]); 
    estimationItemList$ = this.estimationItemListSubject.asObservable();

    constructor(private estimationItemDataService: EstimationItemDataService) {
    }

    load(): void {
        this.estimationItemDataService.load().subscribe(
            estimationItemList => {
                this.estimationItemListSubject.next(estimationItemList)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
