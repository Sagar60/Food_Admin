import { Component, OnInit } from '@angular/core';
// import {  }
import { FoodService  } from '../../shared/food.service';
import  { Food } from '../../shared/food.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-viewfood',
  templateUrl: './viewfood.component.html',
  styleUrls: ['./viewfood.component.css']
})
export class ViewfoodComponent implements OnInit {
model: any= {};
  constructor( private fService: FoodService, private santitizer: DomSanitizer ) { }

  readonly apiUrl = 'http://localhost:3000';

  public foods = [];
  ngOnInit() {
    this.getFoods();
  }

  getFoods(){
    this.fService.getFood().subscribe(
      (res) => {
        this.foods = res as Food[];
        }
    );
  }

  getpic(fpic){
    return this.santitizer.bypassSecurityTrustResourceUrl(this.apiUrl + `/${fpic}` );
  }

  onDelete(_id: string){
    if(confirm("Are You Sure want to Delete This Record ?")){
    this.fService.deleteFood(_id).subscribe(
      (res) =>{ 
      });
      this.getFoods(); 
      
    }
     // for refresh the page after delete 
  }
}
