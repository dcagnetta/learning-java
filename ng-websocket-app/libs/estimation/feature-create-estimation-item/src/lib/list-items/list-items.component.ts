import { Component } from '@angular/core';
import { EstimationItemFacade } from '@ng-websocket-app/estimation/domain';

@Component({
  selector: 'estimation-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent {

  public estimationItems$ = this.facade.estimationItems$;

  constructor(private facade: EstimationItemFacade) {
  }


}
