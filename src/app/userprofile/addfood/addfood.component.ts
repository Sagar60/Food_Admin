import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../shared/food.service';
import { Food } from '../../shared/food.model';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../../shared/category.service';
import { Category } from '../../shared/category.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
// import { FileUploader } from 'ng2-file-upload/ng2-file-upload'
import { UserService } from '../../shared/user.service';


const Url = 'http://localhost:3000/pics';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})

export class AddfoodComponent implements OnInit {
  userName;
  model: any = {}
  public category = [];
  selectFile : File = null;

  constructor( private http: HttpClient, private userService: UserService, private cats: CategoryService, private foodS: FoodService, private router: Router ) { }

  ngOnInit() {
    this.getCategory();
    this.userService.getUserProfile().subscribe(
      res => {
        this.userName = res['user'];
      },
      err => {
        console.log(err);
      }
    )
  }
  

  onSelectedFile(event){
    this.selectFile = <File>event.target.files[0];
  }

  onSubmit(form: NgForm){
    form.value.foodpic = this.selectFile.name;
    this.model.fpic = form.value.foodpic;
    const fd = new FormData();
    fd.append('image',this.selectFile,this.selectFile.name );
    this.http.post('http://localhost:3000/pics', fd ).subscribe(
      res => {  });

    this.foodS.insertFood(this.model).subscribe(
      (res) => {
        data => console.log('succes', data);
        error => console.log('Error', error);
      }
    );
    alert("Yeah!! Data Saved Successfully");
    if(confirm("Are You want to View All Food List") === true)
    this.router.navigateByUrl('userprofile/viewfood');
  }

  getCategory(){
    this.cats.getCategory().subscribe(
      (res) => {
        this.category = res as Category[];
      }
    )
  }
}
