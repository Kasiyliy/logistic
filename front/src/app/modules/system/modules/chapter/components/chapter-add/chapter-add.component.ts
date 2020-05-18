import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Chapter} from '../../../../../../core/models/entities/chapter';
import {ChapterService} from '../../../../../../core/services/chapter.service';
import {CourseService} from '../../../../../../core/services/course.service';
import {Course} from '../../../../../../core/models/entities/course';
import {DataService} from '../../../../../../core/services/data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-chapter-add',
  templateUrl: './chapter-add.component.html',
  styleUrls: ['./chapter-add.component.css']
})
export class ChapterAddComponent implements OnInit {

  chapter: Chapter = new Chapter();
  course: Course = new Course();
  courseId: number;
  sub: Observable<any>;

  constructor(private builder: FormBuilder,
              private chapterService: ChapterService,
              private courseService: CourseService,
              private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.sub = this.dataService.dataSource;
    this.sub.subscribe(perf => {
      this.course = perf;
      this.courseId = this.course.id;
    });
  }


  createChapter(chapter) {
    this.chapterService.store(this.courseId, chapter).subscribe(perf => {
      this.router.navigateByUrl('/chapters/' + this.courseId);
    }, err => {
      console.log(err);
    });
  }

}
