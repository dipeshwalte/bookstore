import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  Book:object = {
    "bookid": 10,
    "name": "Dont make me think",
    "price": 750,
    "details": "Technical Book",
    "author": "Ben Skapley",
    "discountPrice": 499,
    "averageRating": 0,
    "noOfPeopleRated": 0,
    "quantityInStock": 0
  }
  constructor() { }

  ngOnInit(): void {
  }

}
