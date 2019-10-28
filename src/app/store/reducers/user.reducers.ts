import { initialUserState, UserState } from '../state/user.state';
import { UserActions, EUserActions } from '../actions/user.action';

export const userReducers = (
    state = initialUserState,
    action: UserActions
): UserState => {
    switch (action.type) {
        case EUserActions.GetUserSuccess :
            return {
                ...state,
                user: action.payload
            }
        default :
            return state;
    }
}