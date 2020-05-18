import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = new BehaviorSubject({} as any);

  public dataSource = this.data.asObservable();

  public next(data) {
    this.data.next(data);
  }

  getData(): BehaviorSubject<any> {
    return this.data;
  }

  constructor() {
  }
}
