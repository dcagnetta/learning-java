import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Session } from '../entities/session';
import { SessionDataService } from '../infrastructure/session.data.service';


@Injectable({ providedIn: 'root' })
export class CreateFacade {

    private sessionListSubject = new BehaviorSubject<Session[]>([]); 
    sessionList$ = this.sessionListSubject.asObservable();

    constructor(private sessionDataService: SessionDataService) {
    }

    load(): void {
        this.sessionDataService.load().subscribe(
            sessionList => {
                this.sessionListSubject.next(sessionList)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
