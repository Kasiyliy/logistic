import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CourseRoutingModule} from './course-routing.module';
import {CourseComponent} from './course.component';
import {CourseListComponent} from './components/course-list/course-list.component';
import {CourseAddComponent} from './components/course-add/course-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddEditFormComponent} from './components/add-edit-form/add-edit-form.component';
import {CourseEditComponent} from './components/course-edit/course-edit.component';

@NgModule({
  declarations: [
    CourseComponent,
    CourseListComponent,
    CourseAddComponent,
    AddEditFormComponent,
    CourseEditComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CourseModule {
}
