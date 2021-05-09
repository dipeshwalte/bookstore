import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
//import { UserService } from '../../Services/UserService/user.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hide:boolean = false;
  submitted:boolean = false;
  registerForm: FormGroup;
  lastName = "Last name";
  emailId = "Email Id";
  password = "Password";
  confirm = "Confirm";
  signupShown:boolean = true;
  constructor(
    private formBuilder: FormBuilder,
   // private service:UserService,
    private snackBar:MatSnackBar,
    private router:Router,
    private acRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  showSignup(){
    this.signupShown = true;
    this.router.navigate(['register'],{relativeTo:this.acRoute});
  }
  showLogin(){
    this.signupShown = false;
    this.router.navigate(['login'],{relativeTo:this.acRoute});
  }
  get f() { return this.registerForm.controls; }
}
