import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MODULES = [
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: [
    CommonModule,

    MODULES
  ],
  exports: [
    MODULES
  ]
})
export class SessionDomainModule {}
