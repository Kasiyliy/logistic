import {Component, OnInit} from '@angular/core';
import {User} from '../../../../../../core/models/entities/user';
import {UserService} from '../../../../../../core/services/user.service';
import {RoleService} from '../../../../../../core/services/role.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService,
              private roleService: RoleService,
              private router: Router) {
  }

  ngOnInit() {

  }

  createUser(user) {
    this.userService.store(user).subscribe(perf => {
      this.router.navigateByUrl('/users');
    }, err => {
      console.log(err);
    });
  }

}
