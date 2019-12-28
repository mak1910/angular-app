import { User, RestContainer } from './core.model';

export interface CoreState {
  user: RestContainer<User>;
}

export const initialCoreState = {
  user: null
};
