import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/crud/crud.service';
import { User } from './user.model';

@Injectable()
export class UserService {

  constructor(
    private crudService: CrudService<User>
  ) { }
}
