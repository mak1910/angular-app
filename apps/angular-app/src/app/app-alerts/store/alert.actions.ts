import { Action } from '@ngrx/store';
import { Alert } from './alert.model';

export enum AlertActionTypes {
  GetAlerts = '[Alert] Get Alerts',
  GetAlertsSuccess = '[Alert] Get Alerts Success'
}

export class GetAlertsAction implements Action {
  public readonly type = AlertActionTypes.GetAlerts;
}

export class GetAlertsSuccessAction implements Action {
  public readonly type = AlertActionTypes.GetAlertsSuccess;
  constructor(public payload: Array<Alert>) {}
}

export type AlertActions = GetAlertsAction | GetAlertsSuccessAction;
