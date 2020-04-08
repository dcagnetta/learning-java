import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SessionFeatureCreateModule } from '@ng-websocket-app/session/feature-create';
import { HttpClientModule } from '@angular/common/http';
import { SessionFeatureJoinModule } from '@ng-websocket-app/session/feature-join';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,

    SessionFeatureCreateModule,
    SessionFeatureJoinModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
