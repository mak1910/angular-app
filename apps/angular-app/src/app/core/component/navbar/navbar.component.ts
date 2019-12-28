import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../app.model';
import { GetUserAction } from '../../store/core.actions';

import { userSelector } from '../../store/core.selectors';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faSpinner = faSpinner;
  user$ = this._store.pipe(select(userSelector));
  
  constructor(
    private _store: Store<AppState>
  ) {}

  ngOnInit() {
    this._store.dispatch(new GetUserAction());
  }

}
