import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppAlertsRoutingModule } from './app-alerts-routing.module';
import { AlertsComponent } from './alerts/alerts.component';
import { StoreModule } from '@ngrx/store';
import { alertReducers } from './store/alert.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AlertEffects } from './store/alert.effects';
import { StateFeatures } from '../app.model';


@NgModule({
  declarations: [AlertsComponent],
  imports: [
    CommonModule,
    AppAlertsRoutingModule,
    StoreModule.forFeature(StateFeatures.Alert, alertReducers),
    EffectsModule.forFeature([AlertEffects])
  ],
})
export class AppAlertsModule { }
