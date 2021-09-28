import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const PRIMENG_MODULES = [
  CommonModule, // DropdownModule
];

@NgModule({
  imports: [...PRIMENG_MODULES],
  exports: [...PRIMENG_MODULES],
})
export class PrimengCustomModule { }
