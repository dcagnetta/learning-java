import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstimationHomeComponent } from './estimation-home/estimation-home.component';
import {
  CreateEstimationItemComponent,
  EditItemComponent,
  ListItemsComponent
} from '@ng-websocket-app/estimation/feature-create-estimation-item';
import { ITEM_ID_PARAM } from '@ng-websocket-app/estimation/domain';

const routes: Routes = [
  { path: '', component: EstimationHomeComponent,
    children: [
      { path: '', redirectTo: 'items', pathMatch: 'full' },
      { path: 'items', component: ListItemsComponent },
      { path: 'items/create', component: CreateEstimationItemComponent },
      { path: `items/:${ITEM_ID_PARAM}/edit`, component: EditItemComponent },
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
