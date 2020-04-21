import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimationShellModule } from '@ng-websocket-app/estimation/shell';
import { EstimationShellMakeEstimationsModule } from '@ng-websocket-app/estimation/shell-make-estimations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    // Shells
    EstimationShellModule,
    EstimationShellMakeEstimationsModule
  ]
})
export class EstimationModule { }
