import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';

import { AddfoodComponent } from './userprofile/addfood/addfood.component'
import { ViewfoodComponent } from './userprofile/viewfood/viewfood.component';
import { EditfoodComponent } from './userprofile/editfood/editfood.component';
import { AddcategoryComponent } from './userprofile/addcategory/addcategory.component';
import { EditcategoryComponent } from './userprofile/editcategory/editcategory.component';
import { ViewcategoryComponent } from './userprofile/viewcategory/viewcategory.component';
import { SingupComponent } from './user/singup/singup.component';
import { SinginComponent } from './user/singin/singin.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AuthGuard } from './auth/auth.guard';
import { ViewhistoryComponent } from './userprofile/viewhistory/viewhistory.component';
import { ViewbookingComponent } from './userprofile/viewbooking/viewbooking.component';
import { ReviewpageComponent } from './reviewpage/reviewpage.component';

export const routes: Routes = [
  {
    path: 'sign-up', component: UserComponent,
    children: [{ path: '',component: SingupComponent }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SinginComponent }]
  },

  {
    path: 'userprofile', component: UserprofileComponent, canActivate: [AuthGuard],
    children: [
      { path: 'addfood', component: AddfoodComponent },
      { path: 'viewfood', component: ViewfoodComponent},
      { path: 'editfood/:id', component: EditfoodComponent },
      { path: 'addcateg', component: AddcategoryComponent },
      { path: 'viewcateg', component: ViewcategoryComponent },
      { path: 'editcateg/:id', component: EditcategoryComponent },
      { path: 'viewhistory', component: ViewhistoryComponent },
      { path: 'viewbooking', component: ViewbookingComponent }
    ]
  },
  { path:  'reviewpage', component: ReviewpageComponent },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
