import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { UserServiceService } from 'src/app/services/user-service.service';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide:boolean = true;
  submitted:boolean = false;
  loginForm: FormGroup;
  email = "Email Id";
  password = "Password";
  constructor(
    private formBuilder: FormBuilder,
    private service:UserServiceService,
    private snackBar:MatSnackBar,
    private router:Router,
    private acRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });
  }
  get f() { return this.loginForm.controls; }
  showLogin(){
    this.router.navigate(['login'],{relativeTo:this.acRoute});
  }
  showSignup(){
    this.router.navigate(['signup'],{relativeTo:this.acRoute});
  }
  submit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    let data = {
      "emailId":this.f.email.value,
      "password":this.f.password.value
    }
    this.service.login(data).subscribe((dataReturned:any) =>{ 
      console.log(dataReturned);
     localStorage.setItem("emailId",dataReturned.data.emailId);
     localStorage.setItem("token",dataReturned.data.token);
      //this.snackBar.open("Login Successful","Okay")
      this.router.navigate(['dashboard/books']);

    })
}

}
