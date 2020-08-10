import { Injectable } from '@angular/core';
import { Food } from './food.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  readonly foodapi = 'http://localhost:3000/foods';

  constructor( private http: HttpClient ) { }

  insertFood(food: Food){
    return this.http.post(this.foodapi,food);
  }

  getFood(){
    return this.http.get(this.foodapi);
  }
  updateFood(food: Food){
    return this.http.put(this.foodapi + `/${food._id}`,food);
  }
  deleteFood(_id: string){
    return this.http.delete(this.foodapi + `/${_id}`);
  }

  getFoodByid(_id: string){
    return this.http.get(this.foodapi + `/${_id}`);
  }

}
