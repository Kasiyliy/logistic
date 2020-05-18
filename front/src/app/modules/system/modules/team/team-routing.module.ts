import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TeamComponent} from './team.component';
import {TeamListComponent} from './components/team-list/team-list.component';
import {TeamAddComponent} from './components/team-add/team-add.component';
import {CourseEditComponent} from "../course/components/course-edit/course-edit.component";
import {TeamEditComponent} from "./components/team-edit/team-edit.component";

const routes: Routes = [
  {
    path: '',
    component: TeamComponent,
    children: [
      {
        path: '',
        component: TeamListComponent,
      },
      {
        path: 'add',
        component: TeamAddComponent,
      },
      {
        path: 'edit/:id',
        component: TeamEditComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule {
}
