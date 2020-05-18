import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LessonRoutingModule} from './lesson-routing.module';
import {LessonComponent} from './lesson.component';
import {LessonListComponent} from './components/lesson-list/lesson-list.component';
import {AddEditFormComponent} from './components/add-edit-form/add-edit-form.component';
import {LessonAddComponent} from './components/lesson-add/lesson-add.component';
import {LessonEditComponent} from './components/lesson-edit/lesson-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    LessonComponent,
    LessonListComponent,
    AddEditFormComponent,
    LessonAddComponent,
    LessonEditComponent
  ],
  imports: [
    CommonModule,
    LessonRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
  ]
})
export class LessonModule {
}
