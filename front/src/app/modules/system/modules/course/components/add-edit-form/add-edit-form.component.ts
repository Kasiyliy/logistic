import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CourseService} from '../../../../../../core/services/course.service';
import {Course} from '../../../../../../core/models/entities/course';

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.css']
})
export class AddEditFormComponent implements OnInit {

  form: FormGroup;

  @Input()
  course: Course;

  @Output()
  validCourse = new EventEmitter<Course>();

  constructor(private builder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.builder.group({
      name: [this.course.name, [Validators.required]],
      description: [this.course.description, [Validators.required]],
      visible: [this.course.visible, []],
    });
  }

  onValid() {
    this.course = this.form.getRawValue() as Course;
    this.form.reset();
    this.validCourse.emit(this.course);
  }
}
