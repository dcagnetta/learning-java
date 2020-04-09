import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ThemeCoreModule } from '@ng-websocket-app/theme/core';
import { SessionShellStartModule } from '@ng-websocket-app/session/shell-start';
import { SharedCoreModule } from '@ng-websocket-app/shared/core';
import { SharedEnvironmentsModule } from '@ng-websocket-app/shared/environments';
import { SharedDataAccessModule } from '@ng-websocket-app/shared/data-access';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,

    SharedEnvironmentsModule,
    SharedCoreModule,
    ThemeCoreModule.forRoot(),

    SharedDataAccessModule.forRoot(),

    SessionShellStartModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
