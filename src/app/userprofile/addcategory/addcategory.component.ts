import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Category } from '../../shared/category.model';
import { CategoryService } from '../../shared/category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
model : any = { }
  constructor(private cats: CategoryService, private router: Router) { }

  ngOnInit(){

  }
  onSubmit(form: NgForm){
    if(form.value._id === '' ||  form.value._id == null ){
      this.cats.insetCategory(this.model).subscribe(
        data => console.log('success',data),
        error => console.error('Error',error)
      );
        alert("Data Added Successfully");
        if(confirm("Are You want to Go View Category Page")===true)
        this.router.navigateByUrl('userprofile/viewcateg');
    }
    else{
      console.log(form.value);
    }
  }

}
