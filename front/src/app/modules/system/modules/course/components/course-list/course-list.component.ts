import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../../../../../core/services/course.service';
import {PageWrapper} from '../../../../../../core/models/wrappers/page-wrapper';
import {Course} from '../../../../../../core/models/entities/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  coursePageWrapper: PageWrapper<Course>;
  currentPage = null;

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.getList();
  }

  public getList() {
    this.courseService.getPaginatedCourses(this.currentPage).subscribe(perf => {
      this.coursePageWrapper = perf;
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
    this.getList();
  }
}
