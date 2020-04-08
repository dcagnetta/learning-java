import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionDomainModule } from '@ng-websocket-app/session/domain';
import { CreateComponent } from './components/create/create.component';

@NgModule({
  imports: [CommonModule, SessionDomainModule],
  declarations: [CreateComponent],
  exports: [CreateComponent]
})
export class SessionFeatureCreateModule {}
