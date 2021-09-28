// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// shared module
import { PrimengCustomModule } from './primeng/index';
import { TranslateModule } from '@ngx-translate/core';

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  PrimengCustomModule,
  TranslateModule
];

// shared components
import { NotFoundComponent } from './components/index';
const COMPONENST = [
  NotFoundComponent
];

@NgModule({
  declarations: [
    ...COMPONENST
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...COMPONENST,
    ...MODULES
  ]
})
export class SharedModule { }
