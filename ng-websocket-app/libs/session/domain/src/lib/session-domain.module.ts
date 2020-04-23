import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionData } from './infrastructure/interfaces/session.data';
import { SessionDataService } from './infrastructure/session.data.service';
import { StartFacade } from './application/start.facade';
import { WebsocketStream } from './infrastructure/interfaces/websocket.stream';
import { WebsocketStreamService } from './infrastructure/websocket.stream.service';

const MODULES = [
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: [
    CommonModule,

    MODULES
  ],
  providers: [
    {provide: SessionData, useClass: SessionDataService},
    {provide: WebsocketStream, useClass: WebsocketStreamService},
    StartFacade
  ],
  exports: [
    MODULES
  ]
})
export class SessionDomainModule {}
