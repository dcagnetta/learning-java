import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimationDomainModule } from '@ng-websocket-app/estimation/domain';
import { CreateEstimationItemComponent } from './create-estimation-item.component';

@NgModule({
  imports: [CommonModule, EstimationDomainModule],
  declarations: [CreateEstimationItemComponent],
  exports: [CreateEstimationItemComponent]
})
export class EstimationFeatureCreateEstimationItemModule {}
