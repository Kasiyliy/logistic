import {Component, OnInit} from '@angular/core';
import {PageWrapper} from '../../../../../../core/models/wrappers/page-wrapper';
import {Chapter} from '../../../../../../core/models/entities/chapter';
import {ChapterService} from '../../../../../../core/services/chapter.service';
import {Course} from '../../../../../../core/models/entities/course';
import {mergeMap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../../../../../../core/services/course.service';
import {DataService} from '../../../../../../core/services/data.service';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {

  chapterPageWrapper: PageWrapper<Chapter>;
  currentPage = null;
  course: Course = new Course();
  courseId: number;


  constructor(private chapterService: ChapterService,
              private route: ActivatedRoute,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.route.params.pipe(
      mergeMap((perf) => {
        this.courseId = perf.id;

        return this.chapterService.getPaginatedChapters(this.courseId, this.currentPage);
      }),
      mergeMap((perf) => {
        this.chapterPageWrapper = perf;
        return this.dataService.dataSource;
      }),
    ).subscribe(perf => {
      this.course = perf;
    }, err => {
      console.log(err);
    });
  }

  public paginate() {
    this.chapterService.getPaginatedChapters(this.courseId, this.currentPage).subscribe(perf => {
      this.chapterPageWrapper = perf;
    }, err => {
      console.log(err);
    });
  }

  createRange(page) {
    const numbers = [];
    for (let i = 1; i <= page; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  changePage(page) {
    this.currentPage = page;
    this.paginate();
  }

}
