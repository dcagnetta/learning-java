import { Component, OnInit } from '@angular/core';
import { CreateEstimationItemFacade } from '@ng-websocket-app/estimation/domain';

@Component({
  selector: 'estimation-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

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
