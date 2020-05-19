import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Place} from "../models/entities/place";
import {RealFreightOrder} from "../models/entities/real-freight-order";

@Injectable({
    providedIn: "root"
})
export class FreightOrderService {

    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {
    }

    public getMyFreightOrders(): Observable<RealFreightOrder[]> {
        return this.http.get<RealFreightOrder[]>(`${this.apiUrl}/v1/freight-orders/my`);
    }

    public getAllFreightOrders(): Observable<RealFreightOrder[]> {
        return this.http.get<RealFreightOrder[]>(`${this.apiUrl}/v1/freight-orders`);
    }

    public getAllByUserFreightOrders(id: number): Observable<RealFreightOrder[]> {
        return this.http.get<RealFreightOrder[]>(`${this.apiUrl}/v1/freight-orders/by-users/${id}`);
    }

    public createFreightOrder(freightOrder): Observable<any> {
        return this.http.post<Place>(`${this.apiUrl}/v1/freight-orders`, freightOrder);
    }


}