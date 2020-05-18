import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ChapterService} from '../../../../core/services/chapter.service';
import {mergeMap} from 'rxjs/operators';
import {Chapter} from '../../../../core/models/entities/chapter';
import {DataService} from '../../../../core/services/data.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  public chapterId: number;
  public chapter: Chapter;

  constructor(private route: ActivatedRoute,
              public router: Router,
              private dataService: DataService,
              private chapterService: ChapterService) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      mergeMap(perf => {
        this.chapterId = perf.id;
        return this.chapterService.getById(this.chapterId);
      })
    ).subscribe(perf => {
      this.chapter = perf;
      this.dataService.next(this.chapter);
    });
  }


}
