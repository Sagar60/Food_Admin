import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
//import swal from 'sweetalert';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  constructor( private userService: UserService, private router: Router ) { }

  model = {
    email :'',
    password : ''
  };

  username;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessage: string; 

  ngOnInit(){
    if(this.userService.isLoggedIn() )
    this.router.navigateByUrl('/userprofile');

    this.userService.getUserProfile().subscribe(
      res =>{
        this.username = res['user'];
      },
      err => {
        console.log(err);
      }
    )
  }

  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        swal({
              title: `Hi Admin Welcome Back`,
              text: "Click OK Button To Continue Your Profile",
              icon: "success",
              // buttons: [true,true]
            });
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/userprofile');
      },
      err => {
        this.serverErrorMessage = err.error.message;
        swal({
              title: "Wrong ",
              text: `${ this.serverErrorMessage }`,
              icon: "warning"
            });
        
      });
  }

  // yessucc(){
  //   if(this.check !== err.error.message){
  //   swal({
  //     title: "Good job!",
  //     text: "You clicked the button!",
  //     icon: "success"
  //   });
  // }else{
  //   swal({
  //     title: "wrong Password",
  //     text: "You clicked the button!",
  //     icon: "warning"
  //   });
  // }
  // }
}
