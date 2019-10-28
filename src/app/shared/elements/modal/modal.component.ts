import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  
  modalRef: BsModalRef;
  @ViewChild('modalTemplate', { static: true }) modalTemplate: TemplateRef<any>;
  
  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() { }

  open() {
    this.modalRef = this.modalService.show(this.modalTemplate);
  }

}
