import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstimationHomeComponent } from './estimation-home/estimation-home.component';
import {
  CreateEstimationItemComponent,
  EditItemComponent,
  ListItemsComponent
} from '@ng-websocket-app/estimation/feature-create-estimation-item';
import { ITEM_ID_PARAM, SESSION_ID_PARAM } from '@ng-websocket-app/estimation/domain';

const routes: Routes = [
  { path: 'new', component: EstimationHomeComponent }, // pages/estimations
  {
    path: `new/:${SESSION_ID_PARAM}`, // pages/estimation/3
    component: EstimationHomeComponent,
    children: [
      { path: '', redirectTo: 'items', pathMatch: 'full' },
      { path: 'items', component: ListItemsComponent }, // pages/estimation/3/items
      { path: 'items/create', component: CreateEstimationItemComponent }, // pages/estimation/3/items/create
      { path: `items/:${ITEM_ID_PARAM}/edit`, component: EditItemComponent }, // pages/estimation/3/items/1/edit
      { path: '**', redirectTo: 'items' }
    ]
  }
];

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class EstimationRoutingModule {
}
