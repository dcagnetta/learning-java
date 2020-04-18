import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimationDomainModule } from '@ng-websocket-app/estimation/domain';
import { CreateEstimationItemComponent } from './create/create-estimation-item.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { RouterModule } from '@angular/router';
import { NbActionsModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';

const NEBULAR = [
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule
];


const COMPONENTS = [
  CreateEstimationItemComponent,
  ListItemsComponent,
  EditItemComponent
];

@NgModule( {
  imports: [
    CommonModule,
    RouterModule,

    EstimationDomainModule,

    NEBULAR
  ],
  declarations: [...COMPONENTS],
  exports: [COMPONENTS]
} )
export class EstimationFeatureCreateEstimationItemModule {
}
