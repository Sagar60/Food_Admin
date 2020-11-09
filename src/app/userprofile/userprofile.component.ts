import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
//import swal from 'sweetalert';

// npm install sweetalert --save  

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  userName;
  constructor(private uservice: UserService, private router: Router) {  }

  ngOnInit() {
    this.uservice.getUserProfile().subscribe(
      res => {
        this.userName = res['user'];
      },
      err => {
        console.log(err);
      }
    );
  }

  onLogout(){
    swal({
      title: "Yeah!!!",
      text: "You are Successfully Logout",
      icon: "success",
    });
    // const number = timer(30000,1000);
    // number.subscribe(val => console.log(val) );
    this.uservice.deleteToken();
    
    setTimeout(function(){
      this.router.navigate(['/login']);
    },10000); 
  }
}
