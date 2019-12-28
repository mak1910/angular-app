import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
template: '<button class="btn btn-primary" (click)="onClick()">{{ name }}</button>'
})
export class ButtonComponent {
  @Input() id: string;
  @Input() name: string;
  @Output() action = new EventEmitter<string>();

  constructor() {}

  onClick() {
    this.action.emit(this.id);
  }
}
