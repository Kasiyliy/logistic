import { Component, OnInit } from '@angular/core';
import {Course} from '../../../../core/models/entities/course';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../../../core/services/data.service';
import {CourseService} from '../../../../core/services/course.service';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  course: Course = new Course();
  public courseId: number;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              public router: Router,
              private courseService: CourseService) {
  }

  ngOnInit() {
    this.route.params.pipe(
      mergeMap((perf) => {
        this.courseId = perf.id;
        return this.courseService.getById(this.courseId);
      }),
    ).subscribe(perf => {
      this.course = perf;
      this.dataService.next(this.course);
    });
    console.log('initiated');
  }

}
