import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Chapter} from '../../../../../../core/models/entities/chapter';

@Component({
  selector: 'app-chapter-add-edit-form',
  templateUrl: './chapter-add-edit-form.component.html',
  styleUrls: ['./chapter-add-edit-form.component.css']
})
export class ChapterAddEditFormComponent implements OnInit {

  form: FormGroup;

  @Input()
  chapter: Chapter;

  @Output()
  validChapter = new EventEmitter<Chapter>();

  constructor(private builder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.builder.group({
      name: [this.chapter.name, [Validators.required]],
      description: [this.chapter.description, [Validators.required]],
    });
  }

  onValid() {
    this.chapter = this.form.getRawValue() as Chapter;
    this.form.reset();
    this.validChapter.emit(this.chapter);
  }

}
