import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/category.service';
import { Category } from '../../shared/category.model';
import { FoodService } from '../../shared/food.service';
import { Food } from '../../shared/food.model';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-editfood',
  templateUrl: './editfood.component.html',
  styleUrls: ['./editfood.component.css']
})
export class EditfoodComponent implements OnInit {

  public selectFood = new Food() ;
  public id ='';
  public category = []; 
  public picUrl = 'http://localhost:3000';
  selectFile : File = null;


constructor( private http: HttpClient, private router: Router, private FoodS: FoodService,
   private Cats: CategoryService, private route: ActivatedRoute , private sanitizer: DomSanitizer ) { }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.getDetails(this.id);
    this.getCategory();
  }
  
  updatedpic(event){
    
    this.selectFile = <File>event.target.files[0];
    console.log(this.selectFile);
  }


  onEdit(form: NgForm){
    if(confirm("Are You Sure Want To update This Record ? ")){
      form.value.foodpic = this.selectFile.name;
      this.selectFood.fpic = form.value.foodpic;
      const fd = new FormData(); 
      fd.append('image',this.selectFile,this.selectFile.name);
      this.http.post('http://localhost:3000/pics',fd).subscribe(
        res => {
        });
        this.FoodS.updateFood(this.selectFood).subscribe(
          (res) =>{
            console.log(res);
          }
        );
        alert("Record Updated");
        this.router.navigateByUrl('userprofile/viewfood');
    }
    else{
      this.router.navigate(['/editfood', this.id]);
      this.refresh();
    }
  }
  getDetails(id : string){
    this.FoodS.getFoodByid(id).subscribe(
      (res) =>{
        this.selectFood = res as Food;
        //console.log(this.selectFood);
      },
      (err ) => {
        console.log(err);
      }
    )
  }
  getCategory(){
    this.Cats.getCategory().subscribe( 
      (res) =>{
        this.category = res as Category[];
      }
    );
  }

  refresh(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.getDetails(this.id);
  }
  getpic(fpic){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.picUrl + `/${fpic}`);
  }
}
