import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { AppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { GetUser, EUserActions, GetUserSuccess } from '../actions/user.action';
import { switchMap, delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {

    @Effect()
    getUser$ = this._actions$.pipe(
        ofType<GetUser>(EUserActions.GetUser),
        delay(1000),
        switchMap(() => of(new GetUserSuccess({ id: 1, name: 'Mridul' })))
    )

    constructor(
        private _actions$: Actions,
        private _store: Store<AppState>
    ) {}
}