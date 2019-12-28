import { CoreState } from './core/store/core.state';
import { AlertState } from './app-alerts/store/alert.state';

export enum StateFeatures {
  Core = 'core',
  Alert = 'alert'
}

export interface AppState {
  core: CoreState;
  alert: AlertState;
}
