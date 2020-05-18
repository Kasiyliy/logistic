import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Course} from '../../../../../../core/models/entities/course';
import {CourseService} from '../../../../../../core/services/course.service';
import {ActivatedRoute, Router} from '@angular/router';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  courseId: number;
  course: Course;

  constructor(private builder: FormBuilder,
              private route: ActivatedRoute,
              private courseService: CourseService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.pipe(
      mergeMap((perf) => {
        this.courseId = perf.id;
        return this.courseService.getById(this.courseId);
      }),
    ).subscribe(perf => {
      this.course = perf;
    });
  }

  editCourse(course) {
    course.visible = !!course.visible;
    this.courseService.update(this.courseId, course).subscribe(perf => {
      this.router.navigateByUrl('/courses');
    }, err => {
      console.log(err);
    });
  }
}
