import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginApiRequest} from '../models/requests/login-api-request';
import {Observable} from 'rxjs';
import {LoginApiResponse} from '../models/responses/login-api-response';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {User} from '../models/entities/user';
import {RoleService} from './role.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private apiToken = environment.apiToken;

  constructor(private http: HttpClient,
              private roleService: RoleService,
              private router: Router) {
  }

  public login(request: LoginApiRequest): Observable<LoginApiResponse> {
    return this.http.post<LoginApiResponse>(`${this.apiUrl}/v1/login`, request);
  }

  public me(): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/v1/me`, {});
  }

  public authorize(tokenResp: LoginApiResponse) {
    localStorage.setItem(this.apiToken, tokenResp.token);
    this.putRole(tokenResp.role);
    this.router.navigateByUrl('/');
  }

  public putRole(role) {
    localStorage.setItem('role', role);
  }

  public getRole() {
    return localStorage.getItem('role');
  }

  public removeRole() {
    localStorage.removeItem('role');
  }

  public isAdmin() {
    return this.roleService.isAdmin(this.getRole());
  }

  public isStudent() {
    return this.roleService.isStudent(this.getRole());
  }

  public isTeacher() {
    return this.roleService.isTeacher(this.getRole());
  }

  public checkAvailability(): boolean {
    return !!localStorage.getItem(this.apiToken);
  }

  removeToken() {
    localStorage.removeItem(this.apiToken);
  }

  public getToken() {
    return localStorage.getItem(this.apiToken);
  }

  logout() {
    this.removeRole();
    this.removeToken();
    this.router.navigateByUrl('/auth/login');
  }
}
