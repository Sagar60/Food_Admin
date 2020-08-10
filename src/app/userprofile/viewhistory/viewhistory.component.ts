import { Component, OnInit } from '@angular/core';
import { ReguserService } from 'src/app/shared/reguser.service';
import { RegUser } from 'src/app/shared/reguser.model';

@Component({
  selector: 'app-viewhistory',
  templateUrl: './viewhistory.component.html',
  styleUrls: ['./viewhistory.component.css']
})
export class ViewhistoryComponent implements OnInit {

  constructor(private reguserSer: ReguserService) { }

  public users = [];
  ngOnInit(){
    this.getRegUser();
  }

  getRegUser(){ 
    this.reguserSer.getUser().subscribe(
      (res) =>{
        this.users = res as RegUser[];
      }
    );
  }
}
