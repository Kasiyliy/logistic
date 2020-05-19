import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Role} from "../models/entities/role";
import {CarType} from "../models/entities/car-type";

@Injectable({
    providedIn: "root"
})
export class CarTypeService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {
    }

    public getCarTypes(): Observable<CarType[]> {
        return this.http.get<CarType[]>(`${this.apiUrl}/v1/car-types`);
    }
}