import { User } from './core.model';

export interface CoreState {
    user: User
}

export const initialCoreState = {
    user: null
}