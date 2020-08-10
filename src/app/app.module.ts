import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddcategoryComponent } from './userprofile/addcategory/addcategory.component';
import { ViewcategoryComponent } from './userprofile/viewcategory/viewcategory.component';
import { EditcategoryComponent } from './userprofile/editcategory/editcategory.component';
import { ViewfoodComponent } from './userprofile/viewfood/viewfood.component';
import { EditfoodComponent } from './userprofile/editfood/editfood.component';
import { AddfoodComponent } from './userprofile/addfood/addfood.component';


import { UserComponent } from './user/user.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SingupComponent } from './user/singup/singup.component';
import { SinginComponent } from './user/singin/singin.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { UserService } from './shared/user.service';
import { CategoryService } from './shared/category.service';
import { FoodService } from './shared/food.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ViewbookingComponent } from './userprofile/viewbooking/viewbooking.component';
import { ViewhistoryComponent } from './userprofile/viewhistory/viewhistory.component';
import { ReviewpageComponent } from './reviewpage/reviewpage.component';
import { BookfoodComponent } from './userprofile/bookfood/bookfood.component';



@NgModule({
  declarations: [
    AppComponent,
    AddcategoryComponent,
    ViewcategoryComponent,
    EditcategoryComponent,
    ViewfoodComponent,
    EditfoodComponent,
    AddfoodComponent,
    UserComponent,
    UserprofileComponent,
    SingupComponent,
    SinginComponent,
    ViewbookingComponent,
    ViewhistoryComponent,
    ReviewpageComponent,
    BookfoodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },                           //why this is used?
    UserService,CategoryService,FoodService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
