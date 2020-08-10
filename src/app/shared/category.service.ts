import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly catapi = 'http://localhost:3000/categories';

  constructor( private http: HttpClient ) { }

  getCategory(){
    return this.http.get(this.catapi);
  }  
   insetCategory(cat: Category){
     return this.http.post(this.catapi,cat);
   }
   updateCategory(cat: Category){
     return this.http.put(this.catapi + `/${cat._id}`,cat);
   }
   deleteCategory(_id: string){
     return this.http.delete(this.catapi + `/${_id}`);
   }

   getCatid(_id: string){
     return this.http.get(this.catapi + `/${_id}`);
   }

}
