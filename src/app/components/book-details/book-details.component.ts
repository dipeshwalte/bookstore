import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  rating:number = 0;
  starCount:number = 5;
 // starColor:StarRatingColor = StarRatingColor.accent;
  Book:object;
  bookIdentifier:string;
  Review:string = "";  
  constructor(private activatedRoute:ActivatedRoute,
    private service:UserServiceService,
    private snackbar:MatSnackBar) { }
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
  onFeedbackClicked()
  {
    let data = {
      "bookId": parseInt(this.activatedRoute.snapshot.paramMap.get("bookId")),
      "rating": this.rating,
      "review": this.Review
    }
    this.service.addFeedback(data).subscribe((dataReturned:any)=>{
      console.log(dataReturned);
      console.log(dataReturned.message);
      this.snackbar.open(dataReturned.message,"okay")
      this.Review="";
      this.rating=0;
    },(err)=>
    { 
      this.snackbar.open(err?.error.message,"okay")
    });
  }
  AddToWishlist(){
    this.bookIdentifier = this.activatedRoute.snapshot.paramMap.get("bookId");
    this.service.addToWishList(parseInt(this.bookIdentifier)).subscribe((dataReturned:any)=>{
      this.snackbar.open("Book Added To Wishlist","Okay");
      console.log(dataReturned);
    })
  }
  AddToBag(){

  }
}
