import {Component, OnInit} from '@angular/core';
import {Course} from '../../../../../../core/models/entities/course';
import {CourseService} from '../../../../../../core/services/course.service';
import {ActivatedRoute} from '@angular/router';
import {mergeMap} from 'rxjs/operators';
import {DataService} from '../../../../../../core/services/data.service';
import {LessonService} from '../../../../../../core/services/lesson.sevice';
import {Lesson} from '../../../../../../core/models/entities/lesson';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {


  chapterId: number;
  chapter: Course;
  lessons: Lesson[] = [];

  constructor(private dataService: DataService,
              private lessonService: LessonService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.params.pipe(
      mergeMap(perf => {
        this.chapterId = perf.id;
        return this.lessonService.getAllByChapterId(this.chapterId);
      }),
      mergeMap(perf => {
        this.lessons = perf;
        return this.dataService.dataSource;
      })
    ).subscribe(perf => {
      this.chapter = perf;
    });
  }
}
