import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
import { Order } from 'src/app/shared/order.model';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.css']
})
export class ViewbookingComponent implements OnInit {

  constructor(private orderservice: OrderService) { }

  public orders = [];
  ngOnInit(){
    this.getOrders();
  }
  getOrders(){
    this.orderservice.getorders().subscribe(
     res =>{
        this.orders = res as Order[];
        // console.log(this.orders);
     }
    );
  }

}
