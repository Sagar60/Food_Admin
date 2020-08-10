import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from '../../shared/category.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {

  
  public id= '';
  public selectCat = new Category ;
  constructor(private router: Router, private route: ActivatedRoute, private cats: CategoryService ) { }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCategory(this.id);
  }
  
  getCategory(id){
    this.cats.getCatid(id).subscribe(
      (res)=> {
        this.selectCat = res as Category;
        console.log(this.selectCat);
      },
      (err) =>{
        console.log(err);
      }
    );
  }
  
  onEdit(form: NgForm){
   if(confirm("Are You sure to Update This Record ?") === true ){
      this.cats.updateCategory(form.value).subscribe(
        (res) =>{
          console.log(res);
        });
        this.router.navigateByUrl('userprofile/viewcateg');
    }else{
        this.router.navigate(['/editcateg', this.id]);
        this.refresh();
    }
  }

  refresh(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCategory(this.id);
  }

}