import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../shared/category.service';
import {  Category } from '../../shared/category.model'; 

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css']
})
export class ViewcategoryComponent implements OnInit {
model: any = { };
  constructor( private cats: CategoryService, private router: Router ) { }

  public categories = [];
  ngOnInit(){
    this.getCategory();
  }
  
  getCategory(){
    this.cats.getCategory().subscribe( (res) =>{
      this.categories = res as Category[];
    });
  }

  onDelete(_id: string){
    if(confirm("Are You Sure, Want to Delete This Category Record?") === true){
      this.cats.deleteCategory(_id).subscribe((res)=>{
      });
      this.getCategory();   // for refresh the page and show after delete item
    }
  }

}
