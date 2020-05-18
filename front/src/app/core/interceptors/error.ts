import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ToastrService} from "ngx-toastr";
import {ErrorCode} from "../models/errors/error-code";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private toastrService: ToastrService) {
  }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        this.router.navigate(['/auth/login']);
      }

      if (err.status === 404) {
        this.router.navigate(['/error/404']);
      }

      if (err.status === 403) {
        this.router.navigate(['/error/403']);
      }

      if (err.status === 500) {
        this.router.navigate(['/error/500']);
      }

      if (err.status === 400) {
        switch (err.error.errorCode) {
          case ErrorCode.UNAUTHORIZED: {
            this.toastrService.error('Ошибка!', 'Введите правльный логин или пароль!');
            break;
          }
          case ErrorCode.ACCESS_DENIED: {
            this.toastrService.error('Ошибка!', 'Доступа нет!');
            break;
          }
          case ErrorCode.INVALID_FIELD: {
            this.toastrService.error('Ошибка!', 'Неправильно введенные данные!');
            break;
          }
        }
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
