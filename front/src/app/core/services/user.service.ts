import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {PageWrapper} from '../models/wrappers/page-wrapper';
import {User} from '../models/entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getPaginatedUsers(page: any = null): Observable<PageWrapper<User>> {
    let params = new HttpParams();
    if (page) {
      params = params.set('page', page);
    }
    return this.http.get<PageWrapper<User>>(`${this.apiUrl}/v1/users`, {params});
  }

  public getPaginatedStudents(courseId, page: any = null): Observable<PageWrapper<User>> {
    let params = new HttpParams();
    if (page) {
      params = params.set('page', page);
    }
    return this.http.get<PageWrapper<User>>(`${this.apiUrl}/v1/users/by-course/${courseId}`, {params});
  }

  public getPaginatedNotStudents(courseId, page: any = null): Observable<PageWrapper<User>> {
    let params = new HttpParams();
    if (page) {
      params = params.set('page', page);
    }
    return this.http.get<PageWrapper<User>>(`${this.apiUrl}/v1/users/not-related-to-course/${courseId}`, {params});
  }

  public store(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/v1/users`, user);
  }

  public addStudent(courseId, user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/v1/users/add-to-course/${courseId}`, user);
  }

  public deleteStudentFromCourse(courseId, user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/v1/users/delete-from-course/${courseId}`, user);
  }

  public update(id, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/v1/users/${id}`, user);
  }


  public getById(id): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/v1/users/${id}`);
  }

  public getCoaches(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/v1/coaches`);
  }


}
