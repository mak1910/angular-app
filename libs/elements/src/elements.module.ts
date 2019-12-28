import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [ButtonComponent],
  entryComponents: [ButtonComponent]
})
export class ElementsModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(ButtonComponent, {
      injector: this.injector
    });
    customElements.define(`e-button`, el);
  }
}
