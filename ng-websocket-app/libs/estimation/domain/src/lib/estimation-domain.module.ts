import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstimationData } from './infrastructure/interfaces/estimation-data';
import { EstimationDataService } from './infrastructure/estimation.data.service';
import { EstimationItemFacade } from './application/estimation-item-facade.service';
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
    {provide: EstimationData, useClass: EstimationDataService},
    {provide: WebsocketStream, useClass: WebsocketStreamService},
    EstimationItemFacade
  ],
  exports: [
    MODULES
  ]
})
export class EstimationDomainModule {}
