import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimationShellModule } from '@ng-websocket-app/estimation/shell';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    // Shells
    EstimationShellModule
  ]
})
export class EstimationModule { }
