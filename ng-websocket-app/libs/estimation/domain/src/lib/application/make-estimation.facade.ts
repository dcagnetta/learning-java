import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Estimation } from '../entities/estimation';
import { EstimationDataService } from '../infrastructure/estimation.data.service';


@Injectable({ providedIn: 'root' })
export class MakeEstimationFacade {

    private estimationListSubject = new BehaviorSubject<Estimation[]>([]); 
    estimationList$ = this.estimationListSubject.asObservable();

    constructor(private estimationDataService: EstimationDataService) {
    }

    load(): void {

    }

}
