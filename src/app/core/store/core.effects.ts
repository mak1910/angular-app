import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CoreState } from './core.state';
import { GetUserAction, CoreActionTypes, GetUserSuccessAction } from './core.actions';
import { switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CoreEffects {
    constructor(
        private _actions: Actions,
        private _store: Store<CoreState>
    ) {}

    @Effect()
    getUserEffect = this._actions.pipe(
        ofType<GetUserAction>(CoreActionTypes.GetUser),
        switchMap(() => of(new GetUserSuccessAction({ id: 1, name: 'Mridul '})))
    );
}