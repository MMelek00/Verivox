import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITariffs } from '../app/tariffs/tariffs';
@Injectable()
export class ApiHttpService {
  constructor(private http: HttpClient) {}

  rootURL = 'http://localhost:3000/api';

  getTariffs(): Observable<ITariffs[]> {
    return this.http.get<ITariffs[]>(`${this.rootURL}/tariffs`);
  }
}
