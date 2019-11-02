import { CoreState } from './core.state';
import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.model';
import { User } from './core.model';

const user = (state: AppState) => state.core.user

export const userSelector = createSelector( user,
    (user: User) => user );