import { Component, OnInit } from '@angular/core';
import {PageWrapper} from '../../../../../../core/models/wrappers/page-wrapper';
import {User} from '../../../../../../core/models/entities/user';
import {UserService} from '../../../../../../core/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userPageWrapper: PageWrapper<User>;
  currentPage = null;
  constructor(private userService: UserService) {
  }
  ngOnInit() {
    this.getList();
  }

  public getList() {
    this.userService.getPaginatedUsers(this.currentPage).subscribe(perf => {
        this.userPageWrapper = perf;
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
