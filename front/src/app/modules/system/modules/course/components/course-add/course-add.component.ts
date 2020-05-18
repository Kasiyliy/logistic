import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Course} from '../../../../../../core/models/entities/course';
import {CourseService} from '../../../../../../core/services/course.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {
  course: Course = new Course();

  constructor(private builder: FormBuilder,
              private courseService: CourseService,
              private router: Router) {
  }

  ngOnInit() {
  }


  createCourse(course) {
    course.visible = !!course.visible;
    this.courseService.store(course).subscribe(perf => {
      this.router.navigateByUrl('/courses');
    }, err => {
      console.log(err);
    });
  }
}
