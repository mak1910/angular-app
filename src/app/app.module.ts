import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppAdminModule } from './app-admin/app-admin.module';
import { AppAlertsModule } from './app-alerts/app-alerts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AppAdminModule,
    AppAlertsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
