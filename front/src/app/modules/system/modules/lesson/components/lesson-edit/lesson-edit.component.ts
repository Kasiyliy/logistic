import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {mergeMap} from 'rxjs/operators';
import {Lesson} from '../../../../../../core/models/entities/lesson';
import {LessonService} from '../../../../../../core/services/lesson.sevice';
import {Chapter} from '../../../../../../core/models/entities/chapter';
import {DataService} from '../../../../../../core/services/data.service';

@Component({
  selector: 'app-lesson-edit',
  templateUrl: './lesson-edit.component.html',
  styleUrls: ['./lesson-edit.component.css']
})
export class LessonEditComponent implements OnInit {

  lessonId: number;
  lesson: Lesson;
  chapter: Chapter;

  constructor(private builder: FormBuilder,
              private route: ActivatedRoute,
              private dataService: DataService,
              private lessonService: LessonService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.pipe(
      mergeMap((perf) => {
        this.lessonId = perf.lesson_id;
        return this.lessonService.getById(this.lessonId);
      }),
      mergeMap((perf) => {
        this.lesson = perf;
        return this.dataService.dataSource;
      })
    ).subscribe(perf => {
      this.chapter = perf;
    });
  }

  editLesson(lesson) {
    lesson.chapter_id = this.chapter.id;
    this.lessonService.update(this.lessonId, lesson).subscribe(perf => {
      this.router.navigateByUrl('/lessons/' + lesson.chapter_id);
    }, err => {
      console.log(err);
    });
  }

}
