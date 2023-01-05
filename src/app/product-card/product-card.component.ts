import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  template: `
    <app-bage></app-bage>
    <app-reiting></app-reiting>
    <app-button text="Добавить в корзину"></app-button>
  `,
  styles: [

  ]
})
export class ProductCardComponent {

}
