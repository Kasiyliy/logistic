import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const roleIds = route.data.roleIds as Array<string>;
    if (roleIds.map(e => e.toString()).includes(this.authService.getRole())) {
      return true;
    } else {
      this.router.navigate(['/error/403']);
      return false;
    }
  }
}
