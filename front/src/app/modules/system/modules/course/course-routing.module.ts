import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CourseComponent} from './course.component';
import {CourseListComponent} from './components/course-list/course-list.component';
import {CourseAddComponent} from './components/course-add/course-add.component';
import {CourseEditComponent} from './components/course-edit/course-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
    children: [
      {
        path: '',
        component: CourseListComponent
      },
      {
        path: 'add',
        component: CourseAddComponent
      },
      {
        path: 'edit/:id',
        component: CourseEditComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule {
}
