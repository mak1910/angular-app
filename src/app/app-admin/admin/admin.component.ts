import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ModalComponent } from 'src/app/shared/elements/modal/modal.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AppAdminComponent implements OnInit {

  @ViewChild('modalElement', { static: true }) modalElement: ModalComponent;
  constructor() { }

  ngOnInit() {
  }

  showModal() {
    this.modalElement.open();
  }

}
