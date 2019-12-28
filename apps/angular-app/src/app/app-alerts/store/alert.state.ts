import { Alert } from './alert.model';

export interface AlertState {
  alerts: Array<Alert>;
}

export const initialAlertState: AlertState = {
  alerts: null
};
