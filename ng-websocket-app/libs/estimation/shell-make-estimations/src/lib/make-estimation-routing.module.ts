import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SESSION_SHORT_ID_PARAM } from '@ng-websocket-app/estimation/domain';

const routes: Routes = [
  { path: 'join', component: HomeComponent },  // pages/estimations/make
  {
    path: `:${SESSION_SHORT_ID_PARAM}`, // pages/estimation/make/3
    component: HomeComponent,
    children: []
  }
];

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class MakeEstimationRoutingModule {
}
