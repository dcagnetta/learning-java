import { Component, OnInit} from '@angular/core';
import { JoinFacade } from '@ng-websocket-app/session/domain';

@Component({
  selector: 'session-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
    


    constructor(private joinFacade: JoinFacade) {
    }


    ngOnInit() {
    }

}

