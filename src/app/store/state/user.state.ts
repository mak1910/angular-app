import { User } from 'src/app/models/user.interface';

export interface UserState {
    user: User;
}

export const initialUserState: UserState = {
    user: null
}