import {Component, OnInit} from '@angular/core';
import {PageWrapper} from '../../../../../../core/models/wrappers/page-wrapper';
import {Course} from '../../../../../../core/models/entities/course';
import {User} from '../../../../../../core/models/entities/user';
import {UserService} from '../../../../../../core/services/user.service';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../../../../../core/services/data.service';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentPageWrapper: PageWrapper<User>;
  currentPage = null;
  course: Course = new Course();
  courseId: number;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.route.params.pipe(
      mergeMap((perf) => {
        this.courseId = perf.id;

        return this.userService.getPaginatedStudents(this.courseId, this.currentPage);
      }),
      mergeMap((perf) => {
        this.studentPageWrapper = perf;
        return this.dataService.dataSource;
      }),
    ).subscribe(perf => {
      this.course = perf;
    }, err => {
      console.log(err);
    });
  }

  public paginate() {
    this.userService.getPaginatedStudents(this.courseId, this.currentPage).subscribe(perf => {
      this.studentPageWrapper = perf;
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

  public deleteStudent(user) {
    this.userService.deleteStudentFromCourse(this.courseId, user).subscribe(perf => {
      console.log(perf);
      this.paginate();
    }, err => {
      console.log(err);
    });
  }

}
