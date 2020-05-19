import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Role} from "../models/entities/role";
import {Place} from "../models/entities/place";

@Injectable({
    providedIn: "root"
})
export class PlaceService {

    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {
    }

    public getPlaces(): Observable<Place[]> {
        return this.http.get<Place[]>(`${this.apiUrl}/v1/places`);
    }

    public createPlace(place: Place): Observable<Place> {
        return this.http.post<Place>(`${this.apiUrl}/v1/places`, place);
    }


}