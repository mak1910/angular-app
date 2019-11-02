import { Action } from '@ngrx/store';
import { User } from './core.model';

export enum CoreActionTypes {
    GetUser = '[Core] Get User',
    GetUserSuccess = '[Core] Get User Success'
}

export class GetUserAction implements Action {
    public readonly type = CoreActionTypes.GetUser;
}

export class GetUserSuccessAction implements Action {
    public readonly type = CoreActionTypes.GetUserSuccess;
    constructor(public payload: User) {}
}

export type CoreActions = GetUserAction | GetUserSuccessAction;