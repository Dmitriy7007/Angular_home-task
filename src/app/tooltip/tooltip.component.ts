import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `
    <p class='tooltip'>
      <small>
      В смартфонах используются не только SIM-карты, но и более компактные версии micro SIM и nano SIM. eSIM это SIM-карта, интегрированная в телефон
      </small>

    </p>
  `,
  styles: [
    '.tooltip { width: 220px; line-height: 1  }'
  ]
})
export class TooltipComponent {

}
