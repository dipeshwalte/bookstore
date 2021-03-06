import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookDisplayComponent } from './components/book-display/book-display.component';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PlacedComponent } from './components/placed/placed.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
  { path: 'dashboard', component:DashboardComponent,
    children: [
      { path: 'books',component:BookDisplayComponent},
      { path: 'details/:bookId',component:BookDetailsComponent},
      { path: 'wishlist',component:WishlistComponent},
      { path: 'cart',component:CartComponent},
      { path: 'order',component:OrdersComponent},
      { path: 'profile',component:ProfileComponent},
      { path: 'placed',component:PlacedComponent}
    ]

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
