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
  constructor(private route:Router) { }
  color:string = "white";
  showHome(){
    this.route.navigate(['dashboard/books']);
  }
  ngOnInit(): void {
  }
  profileDialogShownToggle(){
    this.profileDialogShown = ! this.profileDialogShown;
  }

}
