import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ENV } from './const';
import { environment } from './environment';


@NgModule({
  imports: [CommonModule],
  providers: [
    {provide: ENV, useValue: environment},
  ]
})
export class SharedEnvironmentsModule {}
