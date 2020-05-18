import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MyCourseRoutingModule} from './my-course-routing.module';
import {CourseListComponent} from './components/course-list/course-list.component';


@NgModule({
  imports: [
    CommonModule,
    MyCourseRoutingModule
  ],
  declarations: [CourseListComponent]
})
export class MyCourseModule { }
