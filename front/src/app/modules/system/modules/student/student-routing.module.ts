import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StudentComponent} from './student.component';
import {StudentListComponent} from './components/student-list/student-list.component';
import {StudentAddComponent} from './components/student-add/student-add.component';

const routes: Routes = [
  {
    path: ':id',
    component: StudentComponent,
    children: [
      {
        path: '',
        component: StudentListComponent
      },
      {
        path: 'add',
        component: StudentAddComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {
}
