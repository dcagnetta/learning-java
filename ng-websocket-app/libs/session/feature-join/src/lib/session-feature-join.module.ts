import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionDomainModule } from '@ng-websocket-app/session/domain';
import { JoinComponent } from './join.component';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    SessionDomainModule,

    NbCardModule,
    NbInputModule,
    NbButtonModule
  ],
  declarations: [JoinComponent],
  exports: [JoinComponent]
})
export class SessionFeatureJoinModule {}
