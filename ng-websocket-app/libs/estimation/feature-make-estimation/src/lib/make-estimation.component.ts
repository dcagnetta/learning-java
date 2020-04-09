import { Component, OnInit} from '@angular/core';
import { MakeEstimationFacade } from '@ng-websocket-app/estimation/domain';

@Component({
  selector: 'estimation-make-estimation',
  templateUrl: './make-estimation.component.html',
  styleUrls: ['./make-estimation.component.scss']
})
export class MakeEstimationComponent implements OnInit {
    
    
    estimationList$ = this.makeEstimationFacade.estimationList$;


    constructor(private makeEstimationFacade: MakeEstimationFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.makeEstimationFacade.load();
    }

}

