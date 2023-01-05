import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button>{{text}}</button>`,
  styles: [],
})
export class ButtonComponent {
  @Input() text = 'click me'
}
