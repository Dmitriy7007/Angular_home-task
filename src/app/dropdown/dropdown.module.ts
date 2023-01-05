import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { ButtonModule } from '../button/button.module';
import { DropdownListModule } from '../dropdown-list/dropdown-list.module';



@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DropdownListModule
  ],
  exports: [
    DropdownComponent
  ]
})
export class DropdownModule { }
