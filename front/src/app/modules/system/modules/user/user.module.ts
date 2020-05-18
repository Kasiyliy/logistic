import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddEditFormComponent } from './components/add-edit-form/add-edit-form.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

@NgModule({
  declarations: [UserComponent, UserListComponent, UserAddComponent, AddEditFormComponent, UserEditComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UserModule { }
