import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimationDomainModule } from '@ng-websocket-app/estimation/domain';
import { MakeEstimationComponent } from './make-estimation.component';

@NgModule({
  imports: [CommonModule, EstimationDomainModule],
  declarations: [MakeEstimationComponent],
  exports: [MakeEstimationComponent]
})
export class EstimationFeatureMakeEstimationModule {}
