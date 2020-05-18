import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Lesson} from '../models/entities/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getAllByChapterId(id: number): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(`${this.apiUrl}/v1/lessons/by-chapter/${id}`);
  }

  public save(lesson: Lesson): Observable<Lesson> {
    return this.http.post<Lesson>(`${this.apiUrl}/v1/lessons`, lesson);
  }

  public update(id: number, lesson: Lesson): Observable<Lesson> {
    return this.http.put<Lesson>(`${this.apiUrl}/v1/lessons/${id}`, lesson);
  }

  public getById(id: number): Observable<Lesson> {
    return this.http.get<Lesson>(`${this.apiUrl}/v1/lessons/${id}`);
  }

}
