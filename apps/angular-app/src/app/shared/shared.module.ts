import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './elements/modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule
  ],
  exports: [
    ModalComponent
  ]
})
export class SharedModule { }
