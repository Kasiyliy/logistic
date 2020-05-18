import {Component, OnInit} from '@angular/core';
import {Lesson} from '../../../../../../core/models/entities/lesson';
import {LessonService} from '../../../../../../core/services/lesson.sevice';
import {Router} from '@angular/router';
import {DataService} from '../../../../../../core/services/data.service';
import {Chapter} from '../../../../../../core/models/entities/chapter';

@Component({
  selector: 'app-lesson-add',
  templateUrl: './lesson-add.component.html',
  styleUrls: ['./lesson-add.component.css']
})
export class LessonAddComponent implements OnInit {

  public lesson: Lesson = new Lesson();
  public chapter: Chapter;

  constructor(private lessonService: LessonService,
              private dataService: DataService,
              private router: Router) {
  }

  ngOnInit() {
    this.dataService
      .dataSource
      .subscribe(perf => {
        this.chapter = perf;
      }, err => {
        console.log(err);
      });
  }

  createLesson(lesson) {
    lesson.chapter_id = this.chapter.id;
    this.lessonService.save(lesson).subscribe(perf => {
      this.router.navigateByUrl('/lessons/' + lesson.chapter_id);
    }, err => {
      console.log(err);
    });
  }

}
