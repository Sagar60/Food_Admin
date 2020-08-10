import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  readonly orderUrl = 'http://localhost:3000/order';
  constructor(private http: HttpClient) { }

  getorders(){
   return this.http.get(this.orderUrl);
  }
}
