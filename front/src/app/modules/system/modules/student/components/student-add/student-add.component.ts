import {Component, OnInit} from '@angular/core';
import {PageWrapper} from '../../../../../../core/models/wrappers/page-wrapper';
import {User} from '../../../../../../core/models/entities/user';
import {Course} from '../../../../../../core/models/entities/course';
import {UserService} from '../../../../../../core/services/user.service';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../../../../../core/services/data.service';
import {mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  studentPageWrapper: PageWrapper<User>;
  currentPage = null;
  course: Course = new Course();
  courseId: number;
  sub: Observable<any>;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService
      .dataSource
      .subscribe(perf => {
        this.course = perf;
        this.courseId = this.course.id;
        console.log(this.course);
      }, err => {
        console.log(err);
      });
    this.route.params.pipe(
      mergeMap((perf) => {
        return this.userService.getPaginatedNotStudents(this.courseId, this.currentPage);
      }),
      mergeMap((perf) => {
        this.studentPageWrapper = perf;
        return this.dataService.dataSource;
      }),
    ).subscribe(perf => {
      // this.course = perf;
      // console.log(this.course);
    }, err => {
      console.log(err);
    });
  }

  public paginate() {
    this.userService.getPaginatedNotStudents(this.courseId, this.currentPage).subscribe(perf => {
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

  public addStudent(user) {
    console.log(user);
    this.userService.addStudent(this.courseId, user).subscribe(perf => {
      console.log(perf);
      this.paginate();
    }, err => {
      console.log(err);
    });
  }

}
