import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorNotFoundComponent} from './components/error-not-found/error-not-found.component';
import {ErrorForbiddenComponent} from './components/error-forbidden/error-forbidden.component';
import {ErrorServerErrorComponent} from './components/error-server-error/error-server-error.component';

const routes: Routes = [
  {
    path: '404',
    component: ErrorNotFoundComponent
  },
  {
    path: '403',
    component: ErrorForbiddenComponent
  },
  {
    path: '500',
    component: ErrorServerErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule {
}
