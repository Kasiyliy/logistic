import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {RoleGuard} from '../../core/guards/role.guard';
import {Role} from '../../core/models/entities/role';

const routes: Routes = [
  {
    path: '',
    component: SystemComponent,
    children: [
      {
        path: 'courses',
        loadChildren: () => import('./modules/course/course.module').then(m => m.CourseModule),
        data: {roleIds: [Role.ROLE_TEACHER, Role.ROLE_ADMIN]},
        canActivate: [RoleGuard],
      },
      {
        path: 'my-courses',
        loadChildren: () => import('./modules/my-course/my-course.module').then(m => m.MyCourseModule),
        data: {roleIds: [Role.ROLE_STUDENT]},
        canActivate: [RoleGuard],
      },
      {
        path: 'lessons',
        loadChildren: () => import('./modules/lesson/lesson.module').then(m => m.LessonModule),
        data: {roleIds: [Role.ROLE_TEACHER, Role.ROLE_ADMIN]},
        canActivate: [RoleGuard],
      },
      {
        path: 'chapters',
        loadChildren: () => import('./modules/chapter/chapter.module').then(m => m.ChapterModule),
        data: {roleIds: [Role.ROLE_TEACHER, Role.ROLE_ADMIN]},
        canActivate: [RoleGuard],
      },
      {
        path: 'users',
        loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
        data: {roleIds: [Role.ROLE_ADMIN]},
        canActivate: [RoleGuard],
      },
      {
        path: 'teams',
        loadChildren: () => import('./modules/team/team.module').then(m => m.TeamModule),
        data: {roleIds: [Role.ROLE_TEACHER, Role.ROLE_ADMIN]},
        canActivate: [RoleGuard],
      },
      {
        path: 'students',
        loadChildren: () => import('./modules/student/student.module').then(m => m.StudentModule),
        data: {roleIds: [Role.ROLE_TEACHER, Role.ROLE_ADMIN]},
        canActivate: [RoleGuard],
      },
      {
        path: 'error',
        loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {
}
