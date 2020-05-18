import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UnauthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate = () => {
    if (this.authService.checkAvailability()) {
      this.router.navigate(['/auth/login']);
      return false;
    } else {
      return true;
    }
  };
}
