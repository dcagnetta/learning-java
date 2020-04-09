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
import { TestComponent } from './test.component';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { EstimationFeatureCreateEstimationItemModule } from '@ng-websocket-app/estimation/feature-create-estimation-item';
import { HttpClientModule } from '@angular/common/http';
import { EstimationFeatureMakeEstimationModule } from '@ng-websocket-app/estimation/feature-make-estimation';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,

    SharedEnvironmentsModule,
    SharedCoreModule,
    ThemeCoreModule.forRoot(),

    SharedDataAccessModule.forRoot(),

    SessionShellStartModule,

    AppRoutingModule,


    // Delete test component
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    EstimationFeatureCreateEstimationItemModule,
    HttpClientModule,
    EstimationFeatureMakeEstimationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
