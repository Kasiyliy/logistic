import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {PageWrapper} from '../models/wrappers/page-wrapper';
import {Team} from '../models/entities/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getPaginatedUTeams(page: any = null): Observable<PageWrapper<Team>> {
    let params = new HttpParams();
    if (page) {
      params = params.set('page', page);
    }
    return this.http.get<PageWrapper<Team>>(`${this.apiUrl}/v1/teams`, {params});
  }

  public store(team: Team): Observable<Team> {
    return this.http.post<Team>(`${this.apiUrl}/v1/teams`, team);
  }

  public update(id, team: Team): Observable<Team> {
    return this.http.put<Team>(`${this.apiUrl}/v1/teams/${id}`, team);
  }


  public getById(id): Observable<Team> {
    return this.http.get<Team>(`${this.apiUrl}/v1/teams/${id}`);
  }

}
