import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppAdminRoutingModule } from './app-admin-routing.module';
import { AppAdminComponent } from './admin/admin.component';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [AppAdminComponent],
  imports: [
    CommonModule,
    AppAdminRoutingModule,
    UserModule
  ]
})
export class AppAdminModule { }
