import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReguserService {

  readonly regUrl = 'http://localhost:3000/viewuser';
  constructor(private http: HttpClient) { }

  getUser(){
   return this.http.get(this.regUrl);
  }
}
