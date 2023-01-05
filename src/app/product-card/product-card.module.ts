import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BageModule } from '../bage/bage.module';
import { ReitingModule } from '../reiting/reiting.module';
import { ButtonModule } from '../button/button.module';
import { ProductCardComponent } from './product-card.component';



@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    BageModule,
    ReitingModule,
    ButtonModule
  ],
  exports: [
    ProductCardComponent
  ]
})
export class ProductCardModule { }
