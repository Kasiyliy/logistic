import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Lesson} from '../../../../../../core/models/entities/lesson';
import {LessonType} from '../../../../../../core/models/entities/lesson-type';
import {LessonTypeService} from '../../../../../../core/services/lesson-type.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.css']
})
export class AddEditFormComponent implements OnInit {
  public Editor = ClassicEditor;

  form: FormGroup;

  lessonTypes: LessonType[] = [];

  @Input()
  lesson: Lesson;

  @Output()
  validLesson = new EventEmitter<Lesson>();

  constructor(private builder: FormBuilder,
              private lessonTypeService: LessonTypeService) {
  }

  ngOnInit() {

    this.form = this.builder.group({
      name: [this.lesson.name, [Validators.required]],
      content: [this.lesson.content, [Validators.required]],
      lesson_type_id: [this.lesson.lesson_type_id, [Validators.required]],
    });

    this.lessonTypeService.getAll().subscribe(perf => {
      this.lessonTypes = perf;
    }, err => {
      console.log(err);
    });
  }

  onValid() {
    this.lesson = this.form.getRawValue() as Lesson;
    this.form.reset();
    this.validLesson.emit(this.lesson);
  }
}
