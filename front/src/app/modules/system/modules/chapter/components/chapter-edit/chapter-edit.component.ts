import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {mergeMap} from 'rxjs/operators';
import {Chapter} from '../../../../../../core/models/entities/chapter';
import {ChapterService} from '../../../../../../core/services/chapter.service';
import {DataService} from '../../../../../../core/services/data.service';
import {Observable} from 'rxjs';
import {Course} from '../../../../../../core/models/entities/course';

@Component({
  selector: 'app-chapter-edit',
  templateUrl: './chapter-edit.component.html',
  styleUrls: ['./chapter-edit.component.css']
})
export class ChapterEditComponent implements OnInit {

  chapterId: number;
  chapter: Chapter;
  course: Course;
  sub: Observable<any>;

  constructor(private builder: FormBuilder,
              private route: ActivatedRoute,
              private chapterService: ChapterService,
              private dataService: DataService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.pipe(
      mergeMap((perf) => {
        this.chapterId = perf.chapter_id;
        this.sub = this.dataService.dataSource;
        return this.sub;
      }),
      mergeMap((perf) => {
        this.course = perf;
        return this.chapterService.getById(this.chapterId);
      }),
    ).subscribe(perf => {
      this.chapter = perf;
    });
  }

  editChaper(chapter) {
    this.chapterService.update(this.chapterId, chapter).subscribe(perf => {
      this.router.navigateByUrl('/chapters/' + this.chapter.course_id);
    }, err => {
      console.log(err);
    });
  }

}
