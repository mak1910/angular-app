import { initialAlertState, AlertState } from './alert.state';
import { AlertActions, AlertActionTypes } from './alert.actions';

export const alertReducers = (
  state = initialAlertState,
  action: AlertActions
): AlertState => {
  switch (action.type) {
    case AlertActionTypes.GetAlertsSuccess:
      return {
        ...state,
        alerts: action.payload
      };
    default:
      return state;
  }
};
