import { Component, OnInit} from '@angular/core';
import { CreateEstimationItemFacade } from '@ng-websocket-app/estimation/domain';

@Component({
  selector: 'estimation-create-estimation-item',
  templateUrl: './create-estimation-item.component.html',
  styleUrls: ['./create-estimation-item.component.scss']
})
export class CreateEstimationItemComponent implements OnInit {
    
    
    estimationItemList$ = this.createEstimationItemFacade.estimationItemList$;


    constructor(private createEstimationItemFacade: CreateEstimationItemFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.createEstimationItemFacade.load();
    }

}

