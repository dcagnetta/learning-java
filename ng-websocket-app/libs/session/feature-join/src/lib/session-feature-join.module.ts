import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionDomainModule } from '@ng-websocket-app/session/domain';
import { JoinComponent } from './join.component';

@NgModule({
  imports: [
    CommonModule,
    SessionDomainModule,
  ],
  declarations: [JoinComponent],
  exports: [JoinComponent]
})
export class SessionFeatureJoinModule {}
