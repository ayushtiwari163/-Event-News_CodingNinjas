import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CardEventService {

  constructor(private http: HttpClient) { }
  getData(apiUrl: string) {
    return this.http.get(apiUrl);
  }

}
