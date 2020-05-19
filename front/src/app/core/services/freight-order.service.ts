import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Place} from "../models/entities/place";

@Injectable({
    providedIn: "root"
})
export class FreightOrderService {

    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {
    }

    public getMyFreightOrders(): Observable<Place[]> {
        return this.http.get<Place[]>(`${this.apiUrl}/v1/freight-orders`);
    }

    public createFreightOrder(freightOrder): Observable<any> {
        return this.http.post<Place>(`${this.apiUrl}/v1/freight-orders`, freightOrder);
    }


}