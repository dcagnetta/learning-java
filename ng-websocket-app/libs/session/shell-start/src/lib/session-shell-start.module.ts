import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionFeatureCreateModule } from '@ng-websocket-app/session/feature-create';
import { SessionFeatureJoinModule } from '@ng-websocket-app/session/feature-join';
import { StartContainer } from './containers/start/start-container.component';
import { SessionDomainModule } from '@ng-websocket-app/session/domain';

@NgModule( {
  imports: [
    CommonModule,

    SessionDomainModule,

    SessionFeatureCreateModule,
    SessionFeatureJoinModule
  ],
  exports: [
    StartContainer
  ],
  declarations: [StartContainer]
})
export class SessionShellStartModule {}
