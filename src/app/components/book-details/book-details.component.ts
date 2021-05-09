import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  rating:number = 3;
  starCount:number = 5;
 // starColor:StarRatingColor = StarRatingColor.accent;
  Book:object;
  
  constructor(private activatedRoute:ActivatedRoute,private service:UserServiceService) { }
  getBook(id:number){
    this.service.getBook(id).subscribe((dataReturned:any)=>{
      console.log(dataReturned);
      this.Book = dataReturned.data;
    })
  }
  ngOnInit(): void {
    this.getBook(parseInt(this.activatedRoute.snapshot.paramMap.get("bookId")));
  }
  onRatingChanged(rating){
    console.log(rating);
    this.rating = rating;
  }
}
