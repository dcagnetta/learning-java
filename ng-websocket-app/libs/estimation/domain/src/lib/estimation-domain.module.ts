import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstimationData } from './infrastructure/interfaces/estimation-data';
import { EstimationDataService } from './infrastructure/estimation.data.service';
import { EstimationItemFacade } from './application/estimation-item-facade.service';

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
    EstimationItemFacade
  ],
  exports: [
    MODULES
  ]
})
export class EstimationDomainModule {}
