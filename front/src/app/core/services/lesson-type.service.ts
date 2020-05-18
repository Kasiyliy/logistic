import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LessonType} from '../models/entities/lesson-type';


@Injectable({
  providedIn: 'root'
})
export class LessonTypeService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<LessonType[]> {
    return this.http.get<LessonType[]>(`${this.apiUrl}/v1/lesson-types`);
  }
}
