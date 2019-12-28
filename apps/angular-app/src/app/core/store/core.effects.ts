import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CoreState } from './core.state';
import {
  GetUserAction,
  CoreActionTypes,
  GetUserSuccessAction
} from './core.actions';
import { switchMap, delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CoreEffects {
  constructor(private actions: Actions, private store: Store<CoreState>) {}

  @Effect()
  getUserEffect = this.actions.pipe(
    ofType<GetUserAction>(CoreActionTypes.GetUser),
    delay(5000),
    switchMap(() => of(new GetUserSuccessAction({ id: 1, name: 'Mridul ' })))
  );
}
