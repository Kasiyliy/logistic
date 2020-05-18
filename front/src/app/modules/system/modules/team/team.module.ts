import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeamRoutingModule} from './team-routing.module';
import {TeamAddComponent} from './components/team-add/team-add.component';
import {TeamListComponent} from './components/team-list/team-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TeamComponent } from './team.component';
import { AddEditFormComponent } from './components/add-edit-form/add-edit-form.component';
import { TeamEditComponent } from './components/team-edit/team-edit.component';

@NgModule({
  declarations: [TeamAddComponent, TeamListComponent, TeamComponent, AddEditFormComponent, TeamEditComponent],
  imports: [
    CommonModule,
    TeamRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class TeamModule {
}
