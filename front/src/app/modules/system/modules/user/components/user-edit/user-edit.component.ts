import {Component, OnInit} from '@angular/core';
import {User} from "../../../../../../core/models/entities/user";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../../../../../core/services/course.service";
import {mergeMap} from "rxjs/operators";
import {UserService} from "../../../../../../core/services/user.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userId: number;
  user: User;


  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) {
  }


  ngOnInit() {
    this.route.params.pipe(
      mergeMap((perf) => {
        this.userId = perf.id;
        return this.userService.getById(this.userId);
      }),
    ).subscribe(perf => {
      this.user = perf;
    });
  }

  editUser(user) {
    this.userService.update(this.userId, user).subscribe(perf => {
      this.router.navigateByUrl('/users');
    }, err => {
      console.log(err);
    });
  }

}
