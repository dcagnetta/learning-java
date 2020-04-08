import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbIconModule, NbLayoutModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const MODULES = [
  NbThemeModule.forRoot({ name: 'dark' }),
  NbSidebarModule.forRoot(),
  NbLayoutModule,
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
export class ThemeCoreModule {}
