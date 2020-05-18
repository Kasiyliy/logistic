import {NgModule} from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {UnauthGuard} from './core/guards/unauth.guard';
import {AuthGuard} from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    canActivate: [UnauthGuard],
  },
  {
    path: '',
    loadChildren: () => import('./modules/system/system.module').then(m => m.SystemModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/error/404'
  }
];


const config: ExtraOptions = {
  // useHash: true,
  scrollPositionRestoration: 'disabled',
};


@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
