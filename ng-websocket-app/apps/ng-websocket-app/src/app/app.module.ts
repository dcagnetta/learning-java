import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SessionFeatureCreateModule } from '@ng-websocket-app/session/feature-create';
import { HttpClientModule } from '@angular/common/http';
import { SessionFeatureJoinModule } from '@ng-websocket-app/session/feature-join';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ThemeCoreModule } from '@ng-websocket-app/theme/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,

    SessionFeatureCreateModule,
    SessionFeatureJoinModule,

    ThemeCoreModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
