import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimationFeatureCreateEstimationItemModule } from '@ng-websocket-app/estimation/feature-create-estimation-item';
import { EstimationFeatureMakeEstimationModule } from '@ng-websocket-app/estimation/feature-make-estimation';
import { EstimationHomeComponent } from './estimation-home/estimation-home.component';
import { EstimationRoutingModule } from './estimation-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EstimationRoutingModule,

    EstimationFeatureCreateEstimationItemModule,
    EstimationFeatureMakeEstimationModule
  ],
  declarations: [EstimationHomeComponent]
})
export class EstimationShellModule {}
