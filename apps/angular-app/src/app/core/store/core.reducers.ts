import { initialCoreState, CoreState } from './core.state';
import { CoreActions, CoreActionTypes } from './core.actions';

export const coreReducers = (
  state = initialCoreState,
  action: CoreActions
): CoreState => {
  switch (action.type) {
    case CoreActionTypes.GetUser:
      return {
        ...state,
        user: {
          data: null,
          loading: true
        }
      };
    case CoreActionTypes.GetUserSuccess:
      return {
        ...state,
        user: {
          data: action.payload,
          loading: false
        }
      };
    default:
      return state;
  }
};
