import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MakeEstimationRoutingModule } from './make-estimation-routing.module';
import { EstimationFeatureMakeEstimationModule } from '@ng-websocket-app/estimation/feature-make-estimation';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

const NEBULAR = [
  NbCardModule,
  NbButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    MakeEstimationRoutingModule,

    // Features
    EstimationFeatureMakeEstimationModule,

    NEBULAR
  ],
  declarations: [HomeComponent]
})
export class EstimationShellMakeEstimationsModule {}
