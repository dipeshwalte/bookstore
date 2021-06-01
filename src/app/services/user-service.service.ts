import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private httpservice: HttpServiceService) {}
  static url = 'https://localhost:44349/api/';
  getHeaders = () => {
    return {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
  }
  registration = (data: any) => {
    return this.httpservice.post(`${UserServiceService.url}User/Register`, data);
  };
  login = (data: any) => {
    return this.httpservice.post(`${UserServiceService.url}User/Login`, data);
  };
  forgotPassword = (data: any) => {
    return this.httpservice.post(`${UserServiceService.url}User/ForgetPassword`, data);
  };
  resetPassword = (data: any) => {
    return this.httpservice.post(`${UserServiceService.url}User/ResetPassword`, data);
  };
  ////////////////////////////////////////////////////////////////////
  getBooks = () =>{
    return this.httpservice.get(`${UserServiceService.url}Book`);
  }
  getBook = (id:number) =>{
    return this.httpservice.get(`${UserServiceService.url}Book/${id}`);
  }
  addFeedback = (data:any) =>{
    return this.httpservice.post(`${UserServiceService.url}Feedback`,data,true,this.getHeaders());
  }
  getFeedback = (id:number)=>{
    return this.httpservice.get(`${UserServiceService.url}Feedback/${id}`);
  }
  //-----------------------------------------------------------------
  addToWishList = (id:number)=>{
    return this.httpservice.post(`${UserServiceService.url}Wishlist/${id}`,null,this.getHeaders());
  }
  getWishList = () =>{
    return this.httpservice.get(`${UserServiceService.url}Wishlist`);
  }
  deleteWishList = (id:number) =>{
    return this.httpservice.delete(`${UserServiceService.url}Wishlist/${id}`,this.getHeaders());
  }
  //-------------------------------------------------------------------------
  addToCart = (id:number)=>{
    return this.httpservice.post(`${UserServiceService.url}Cart/${id}`,null,this.getHeaders());
  }
  getFromCart = () =>{
    return this.httpservice.get(`${UserServiceService.url}Cart`);
  }
  deleteFromCart = (id:number) =>{
    return this.httpservice.delete(`${UserServiceService.url}Cart/${id}`,this.getHeaders());
  }
  editCart = (data:any) => {
    return this.httpservice.put(`${UserServiceService.url}Cart`,data,this.getHeaders())
  }
  //--------------------------------------------------------------------------------------
  addAddress = (data:any)=>{
    return this.httpservice.post(`${UserServiceService.url}Address`,data,this.getHeaders());
  }
  getAddress = () =>{
    return this.httpservice.get(`${UserServiceService.url}Address`);
  }
  deleteAddress = (id:number) =>{
    return this.httpservice.delete(`${UserServiceService.url}Address/${id}`,this.getHeaders());
  }
  editAddress = (data:any) => {
    return this.httpservice.put(`${UserServiceService.url}Address`,data,this.getHeaders())
  }
  //------------------------------------------------------------------------------------------------
}
