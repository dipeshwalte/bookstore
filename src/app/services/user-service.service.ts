import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private httpservice: HttpServiceService) {}
  static url = 'https://localhost:44349/api/';

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

}
