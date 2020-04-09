import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from './reducers';
import { environment } from '@ng-websocket-app/shared/environments';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      maxAge: 25,
    }),
  ],
})
export class SharedDataAccessRootModule {}

@NgModule({})
export class SharedDataAccessModule {
  static forRoot(): ModuleWithProviders<SharedDataAccessRootModule> {
    return {
      ngModule: SharedDataAccessRootModule,
    };
  }
}
