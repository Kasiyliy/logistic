import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PageWrapper} from '../models/wrappers/page-wrapper';
import {Course} from '../models/entities/course';
import {Chapter} from '../models/entities/chapter';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getPaginatedChapters(courseId, page: any = null): Observable<PageWrapper<Chapter>> {
    let params = new HttpParams();
    if (page) {
      params = params.set('page', page);
    }
    return this.http.get<PageWrapper<Chapter>>(`${this.apiUrl}/v1/chapters/by-course/${courseId}`, {params});
  }

  public store(courseId, chapter: Chapter): Observable<Chapter> {
    return this.http.post<Chapter>(`${this.apiUrl}/v1/chapters/${courseId}`, chapter);
  }

  public update(id, chapter: Chapter): Observable<Chapter> {
    return this.http.put<Chapter>(`${this.apiUrl}/v1/chapters/${id}`, chapter);
  }

  public getById(id: number): Observable<Chapter> {
    return this.http.get<Chapter>(`${this.apiUrl}/v1/chapters/${id}`);
  }
}
