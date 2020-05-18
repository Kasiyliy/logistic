import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {PageWrapper} from '../models/wrappers/page-wrapper';
import {Course} from '../models/entities/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getPaginatedCourses(page: any = null): Observable<PageWrapper<Course>> {
    let params = new HttpParams();
    if (page) {
      params = params.set('page', page);
    }
    return this.http.get<PageWrapper<Course>>(`${this.apiUrl}/v1/courses`, {params});
  }

  public store(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.apiUrl}/v1/courses`, course);
  }

  public update(id, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/v1/courses/${id}`, course);
  }

  public getById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/v1/courses/${id}`);
  }

  public myCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/v1/my/courses/`);
  }
}
