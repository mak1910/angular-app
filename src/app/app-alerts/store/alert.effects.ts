import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { State } from '@ngrx/store';
import { AlertState } from './alert.state';
import { GetAlertsAction, AlertActionTypes, GetAlertsSuccessAction } from './alert.actions';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AlertEffects {
    
    constructor(
        private _actions: Actions,
        private _state: State<AlertState>
    ) { }
    
    @Effect()
    getAlerts = this._actions.pipe(
        ofType<GetAlertsAction>(AlertActionTypes.GetAlerts),
        switchMap(() => of(new GetAlertsSuccessAction([
            {
                id: 1,
                message: 'New user added'
            },
            {
                id: 2,
                message: 'Password changed'
            }
        ])))
    );
}