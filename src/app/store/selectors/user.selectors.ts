import { AppState } from "../state/app.state";
import { createSelector } from '@ngrx/store';
import { UserState } from '../state/user.state';

const selectUsers = (state: AppState) => state.user;

export const selectUser = createSelector(
    selectUsers, 
    (state: UserState) => state.user
)