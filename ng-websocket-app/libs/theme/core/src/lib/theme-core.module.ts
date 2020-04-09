import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbDialogModule, NbIconModule, NbLayoutModule, NbSidebarModule, NbThemeModule, NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const MODULES = [
  NbThemeModule.forRoot({ name: 'dark' }),
  NbSidebarModule.forRoot(),
  NbLayoutModule,
  NbDialogModule.forRoot(),
  NbToastrModule.forRoot(),

  // Icons
  NbEvaIconsModule,
  NbIconModule
];

@NgModule({
  imports: [
    CommonModule,

    MODULES
  ],
  exports: [MODULES]
})
export class ThemeCoreRootModule {}

@NgModule({})
export class ThemeCoreModule{
  static forRoot(): ModuleWithProviders<ThemeCoreRootModule>{
    return {
      ngModule: ThemeCoreRootModule
    }
  }
}
