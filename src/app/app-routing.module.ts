import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: 'register', component: SignupComponent ,
    children: [
      {path: 'signup',component: RegisterComponent},
      {path: 'login',component:LoginComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
