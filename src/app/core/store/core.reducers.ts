import { initialCoreState, CoreState } from './core.state';
import { CoreActions, CoreActionTypes } from './core.actions';

export const coreReducers = (
    state = initialCoreState,
    action: CoreActions
): CoreState => {
    switch(action.type) {
        case CoreActionTypes.GetUserSuccess : 
            return {
                ...state,
                user: action.payload
            }
        default :
            return state
    }
}
