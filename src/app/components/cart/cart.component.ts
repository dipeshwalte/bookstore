import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  quantity:number=1;
  Book:object = {
    "bookid": 6,
    "name": "7 Habits of Highly Effective people",
    "price": 750,
    "details": "Self Help Book",
    "author": "Steven Covey",
    "discountPrice": 499,
    "averageRating": 0,
    "noOfPeopleRated": 0,
    "quantityInStock": 0
  }
  constructor() { }

  ngOnInit(): void {
  }

}
