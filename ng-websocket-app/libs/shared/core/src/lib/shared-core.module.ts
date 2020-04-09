import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbToastrService } from '@nebular/theme';
import { ToastrService } from './services/toastr.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    {provide: ToastrService, useClass: NbToastrService}
  ]
})
export class SharedCoreModule {}
