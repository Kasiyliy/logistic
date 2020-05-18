import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LessonComponent} from './lesson.component';
import {LessonListComponent} from './components/lesson-list/lesson-list.component';
import {LessonAddComponent} from './components/lesson-add/lesson-add.component';
import {LessonEditComponent} from './components/lesson-edit/lesson-edit.component';

const routes: Routes = [
  {
    path: ':id',
    component: LessonComponent,
    children: [
      {
        path: '',
        component: LessonListComponent
      },
      {
        path: 'add',
        component: LessonAddComponent
      },
      {
        path: 'edit/:lesson_id',
        component: LessonEditComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonRoutingModule {
}
