import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { UserServiceService } from 'src/app/services/user-service.service';
//import { UserServiceService } from '../../Services/UserService/user.service'
import {Router,ActivatedRoute,ParamMap} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide:boolean = true;
  submitted:boolean = false;
  registerForm: FormGroup;
  fullname = "Last name";
  email = "Email Id";
  password = "Password";
  mobile = "Confirm";
  constructor(
    private formBuilder: FormBuilder,
    private service:UserServiceService,
    private snackBar:MatSnackBar,
    private router:Router,
    private acRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.minLength(10)]]
  });
  }
  get f() { return this.registerForm.controls; }
  showLogin(){
    this.router.navigate(['login'],{relativeTo:this.acRoute});
  }
  showSignup(){
    this.router.navigate(['signup'],{relativeTo:this.acRoute});
  }
  submit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    let data = {
      "fullName":this.f.fullname.value,
      "emailId":this.f.email.value,
      "password":this.f.password.value,
      "mobileNumber":this.f.mobile.value
    }
    this.service.registration(data).subscribe((dataReturned:any) =>{ 
      console.log(dataReturned);
     //localStorage.setItem("emailId",dataReturned.data.emailId);
     //localStorage.setItem("token",dataReturned.data.token);
      this.snackBar.open("Register Successful","Okay")
    })
}

}
