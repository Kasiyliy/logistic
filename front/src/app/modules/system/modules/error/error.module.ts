import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ErrorRoutingModule} from './error-routing.module';
import {ErrorNotFoundComponent} from './components/error-not-found/error-not-found.component';
import {ErrorForbiddenComponent} from './components/error-forbidden/error-forbidden.component';
import { ErrorServerErrorComponent } from './components/error-server-error/error-server-error.component';

@NgModule({
  declarations: [ErrorNotFoundComponent, ErrorForbiddenComponent, ErrorServerErrorComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule {
}
