import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionDomainModule } from '@ng-websocket-app/session/domain';
import { CreateComponent } from './components/create/create.component';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    SessionDomainModule,

    NbCardModule,
    NbInputModule,
    NbButtonModule
  ],
  declarations: [CreateComponent],
  exports: [CreateComponent]
})
export class SessionFeatureCreateModule {}
