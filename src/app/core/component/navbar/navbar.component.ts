import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { GetUser } from 'src/app/store/actions/user.action';
import { selectUser } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user$ = this._store.pipe(select(selectUser));

  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit() {
    this._store.dispatch(new GetUser());
  }

}
