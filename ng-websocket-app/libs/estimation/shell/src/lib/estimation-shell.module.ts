import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimationFeatureCreateEstimationItemModule } from '@ng-websocket-app/estimation/feature-create-estimation-item';
import { EstimationFeatureMakeEstimationModule } from '@ng-websocket-app/estimation/feature-make-estimation';
import { EstimationHomeComponent } from './estimation-home/estimation-home.component';
import { EstimationRoutingModule } from './estimation-routing.module';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { SessionInfoComponent, SessionResetComponent } from '@ng-websocket-app/session/ui';

const NEBULAR = [
  NbCardModule,
  NbButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    EstimationRoutingModule,

    EstimationFeatureCreateEstimationItemModule,
    EstimationFeatureMakeEstimationModule,

    NEBULAR
  ],
  declarations: [
    EstimationHomeComponent,

    // External
    SessionInfoComponent,
    SessionResetComponent
  ]
})
export class EstimationShellModule {}
