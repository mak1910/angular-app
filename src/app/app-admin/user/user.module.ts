import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { CrudService } from 'src/app/crud/crud.service';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    CrudService
  ]
})
export class UserModule { }
