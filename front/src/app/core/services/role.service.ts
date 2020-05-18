import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Role} from '../models/entities/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.apiUrl}/v1/roles`);
  }

  public isAdmin(roleId) {
    return roleId == Role.ROLE_ADMIN;
  }

  public isTeacher(roleId) {
    return roleId == Role.ROLE_TEACHER;
  }

  public isStudent(roleId) {
    return roleId == Role.ROLE_STUDENT;
  }

}
