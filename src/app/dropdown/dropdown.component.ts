import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template: `
    <app-button text="Dropdown Button" (click)='hideDropdownList()'></app-button>
    <app-dropdown-list></app-dropdown-list>
  `,
  styles: [
    '.dropdownlist-hide { display: none; }'
  ]
})
export class DropdownComponent {
  hideDropdownList() {
    document.querySelector('app-dropdown-list')?.classList.toggle('dropdownlist-hide')
  }
}
