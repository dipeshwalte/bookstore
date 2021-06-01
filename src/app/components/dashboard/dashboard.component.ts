import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  profileDialogShown:boolean = false;
  userSignedOff:boolean = true;
  emailId = ""
  constructor(private route:Router) { }
  color:string = "white";
  showHome(){
    this.route.navigate(['dashboard/books']);
  }
  SignOut(){
    localStorage.clear();
    this.route.navigate(['login']);
  }
  Login(){
    this.route.navigate(['login']);
  }
  showCart(){
    this.route.navigate(['dashboard/cart']);
  }
  showWishList(){
    this.route.navigate(['dashboard/wishlist']);
  }
  showOrders(){
    this.route.navigate(['dashboard/order']);
  }
  ngOnInit(): void {
    if(localStorage.getItem("token"))
    {
      this.emailId = localStorage.getItem("emailId");
      this.userSignedOff = false;
    }
  }
  profileDialogShownToggle(){
    this.profileDialogShown = ! this.profileDialogShown;
  }

}
