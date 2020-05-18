import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChapterRoutingModule} from './chapter-routing.module';
import {ChapterComponent} from './chapter.component';
import {ChapterListComponent} from './components/chapter-list/chapter-list.component';
import {ChapterEditComponent} from './components/chapter-edit/chapter-edit.component';
import {ChapterAddComponent} from './components/chapter-add/chapter-add.component';
import {ChapterAddEditFormComponent} from './components/chapter-add-edit-form/chapter-add-edit-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ChapterComponent,
    ChapterListComponent,
    ChapterEditComponent,
    ChapterAddComponent,
    ChapterAddEditFormComponent
  ],
  imports: [
    CommonModule,
    ChapterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChapterModule { }
