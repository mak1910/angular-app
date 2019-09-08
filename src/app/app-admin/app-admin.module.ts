import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppAdminRoutingModule } from './app-admin-routing.module';
import { AppAdminComponent } from './admin/admin.component';
import { UserModule } from './user/user.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AppAdminComponent],
  imports: [
    CommonModule,
    AppAdminRoutingModule,
    SharedModule,
    UserModule
  ]
})
export class AppAdminModule { }
