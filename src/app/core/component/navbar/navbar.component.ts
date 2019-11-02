import { Component, OnInit } from '@angular/core';
import { Store, select, createSelector } from '@ngrx/store';
import { CoreState } from '../../store/core.state';
import { GetUserAction } from '../../store/core.actions';
import { userSelector } from '../../store/core.selectors';
import { AppState } from 'src/app/app.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user$ = this._store.pipe(select(userSelector));

  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit() {
    this._store.dispatch(new GetUserAction());
  }

}
