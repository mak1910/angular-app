import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../shared/elements/modal/modal.component';
import { State } from '@ngrx/store';
import { AppState } from '../../app.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AppAdminComponent implements OnInit {
  @ViewChild('modalElement', { static: true }) modalElement: ModalComponent;
  constructor(private state: State<AppState>) {}

  ngOnInit() {}

  showModal() {
    this.modalElement.open();
  }
}
