import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppAlertsRoutingModule } from './app-alerts-routing.module';
import { AlertsComponent } from './alerts/alerts.component';


@NgModule({
  declarations: [AlertsComponent],
  imports: [
    CommonModule,
    AppAlertsRoutingModule
  ],
})
export class AppAlertsModule { }
