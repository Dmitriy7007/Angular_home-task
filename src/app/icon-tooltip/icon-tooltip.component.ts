import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-tooltip',
  template: `
    <app-icon class="tooltip-icon"></app-icon>
    <app-tooltip class="tooltip"></app-tooltip>
  `,
  styles: [
    '.tooltip { display: none; }; .tooltip-icon:hover + .tooltip { display: block; }; .tooltip-icon { font-size: 24px; cursor: pointer } '
  ]
})
export class IconTooltipComponent {
}
