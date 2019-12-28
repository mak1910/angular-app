import { createSelector } from '@ngrx/store';
import { User, RestContainer } from './core.model';
import { AppState } from '../../app.model';

const user = (state: AppState) => state.core.user;

export const userSelector = createSelector(
  user,
  (user: RestContainer<User>) => user
);
