import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../../../../../core/services/course.service";
import {Course} from "../../../../../../core/models/entities/course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.myCourses().subscribe(perf => {
      this.courses = perf;
    })
  }

}
