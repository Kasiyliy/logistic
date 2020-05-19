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

    public store(user: User): Observable<User> {
        return this.http.post<User>(`${this.apiUrl}/v1/users`, user);
    }

    public update(id, user: User): Observable<User> {
        return this.http.put<User>(`${this.apiUrl}/v1/users/${id}`, user);
    }

    public getById(id): Observable<User> {
        return this.http.get<User>(`${this.apiUrl}/v1/users/${id}`);
    }

    public getUserByRoleId(roleId: number): Observable<User[]> {
        return this.http.get<User[]>(`${this.apiUrl}/v1/users/by-role/${roleId}`)
    }

    public getUserByEmail(email) {
        return this.http.get<User>(`${this.apiUrl}/v1/users/by-email/${email}`)
    }

}
