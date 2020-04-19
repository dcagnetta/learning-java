import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test.component';
import { SessionStartedGuard } from './session-started-guard';

const routes: Routes = [
  {
    path: 'pages',
    canActivate: [SessionStartedGuard],
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  },
  { path: 'test', component: TestComponent/*, canActivate: [SessionStartedGuard]*/ },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
