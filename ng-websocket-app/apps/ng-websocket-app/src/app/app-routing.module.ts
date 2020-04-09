import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test.component';
import { SessionCreatedGuard } from './session-created.guard';

const routes: Routes = [
  { path: 'test', component: TestComponent, canActivate: [SessionCreatedGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
