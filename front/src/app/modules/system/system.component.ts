import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {User} from '../../core/models/entities/user';
import {RoleService} from '../../core/services/role.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  public user: User;
  public routes = [];

  constructor(private authService: AuthService,
              public roleService: RoleService) {
  }

  ngOnInit() {
    this.authService.me().subscribe(perf => {
      this.user = perf;
      this.constructRoutes();
    }, err => {
      console.log(err);
    });
  }

  logout() {
    this.authService.logout();
  }

  constructRoutes() {
    if (this.roleService.isAdmin(this.user.role_id)) {
      this.routes = [
        {
          link: '/',
          name: 'Панель управления'
        },
        {
          link: '/courses',
          name: 'Курсы'
        },
        {
          link: '/users',
          name: 'Пользователи'
        },
        {
          link: '/teams',
          name: 'Команды'
        },
      ];
    } else if (this.roleService.isStudent(this.user.role_id)) {
      this.routes = [
        {
          link: '/',
          name: 'Панель управления'
        },
        {
          link: '/my-courses',
          name: 'Мои курсы'
        },
      ];
    } else if (this.roleService.isTeacher(this.user.role_id)) {
      this.routes = [
        {
          link: '/',
          name: 'Панель управления'
        },
        {
          link: '/courses',
          name: 'Курсы'
        },
        {
          link: '/teams',
          name: 'Команды'
        },
      ];
    }
  }
}
