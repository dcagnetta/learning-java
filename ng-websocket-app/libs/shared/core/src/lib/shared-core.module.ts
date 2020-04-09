import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbToastrService } from '@nebular/theme';
import { ToastrService } from './services/toastr.service';
import { httpInterceptorProviders } from './interceptors';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,

    HttpClientModule
  ],
  providers: [
    {provide: ToastrService, useClass: NbToastrService},
    httpInterceptorProviders
  ],
  exports: [HttpClientModule]
})
export class SharedCoreModule {}
