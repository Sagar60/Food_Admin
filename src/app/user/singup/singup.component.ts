import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../shared/user.service';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
import swal from 'sweetalert';
import { Router } from '@angular/router';



@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor( private router : Router, private usService: UserService ) { }

  model = {
    fullName: '',
    email: '',
    password : ''
  };


  ngOnInit(){
  }
  onSubmit(form : NgForm){
    this.usService.postUser(form.value).subscribe(
      res =>{
        swal("You Are Welcome","Your Account has Succefully Created","success");
        this.showSucessMessage = true;
        setTimeout(()=>this.showSucessMessage = false,4000 ); //problem
        this.resetform(form);
        this.router.navigateByUrl('/login');
      },
      err=>{

        if(err.status === 422){
        this.serverErrorMessages = err.error.join('<br/>');   // problem
        }
        else{
          this.serverErrorMessages = 'Something Went Wrong,Please contact Admin.';
        }
        swal("Warning", `${this.serverErrorMessages}`,"warning");
      }
    );
  }

  // resetform(form: NgForm){
  //   this.usService.selectedUser = {
  //     fullName: '',
  //     email: '',
  //     password: ''
  //   };
  //   form.resetForm();
  //   this.serverErrorMessages = '';
  // }

  resetform(form: NgForm){
    this.model = {
      fullName: '',
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
