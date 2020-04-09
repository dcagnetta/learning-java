import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ThemeCoreModule } from '@ng-websocket-app/theme/core';
import { SessionShellStartModule } from '@ng-websocket-app/session/shell-start';
import { SharedCoreModule } from '@ng-websocket-app/shared/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,

    SharedCoreModule,
    ThemeCoreModule,

    SessionShellStartModule,


    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
