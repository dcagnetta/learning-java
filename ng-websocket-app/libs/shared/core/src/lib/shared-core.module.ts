import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbToastrService } from '@nebular/theme';
import { ToastrService } from './services/toastr.service';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    {provide: ToastrService, useClass: NbToastrService},
    httpInterceptorProviders
  ]
})
export class SharedCoreModule {}
