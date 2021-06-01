import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioButton} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormField} from '@angular/material/form-field'
//import {MatToolbar} from '@angular/material/toolbar'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookDisplayComponent } from './components/book-display/book-display.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { StartRatingComponent } from './components/start-rating/start-rating.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PlacedComponent } from './components/placed/placed.component';
import { TestComponent } from './pages/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    BookDisplayComponent,
    BookDetailsComponent,
    StartRatingComponent,
    WishlistComponent,
    CartComponent,
    OrdersComponent,
    ProfileComponent,
    PlacedComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //MatFormField,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    MatSnackBarModule,
    //MatRadioButton,
   // MatToolbar,
   // MatSidenavModule,
  //  MatDialogModule,
    //MatDialog,
  //  MatFormField,
  // MatCheckboxModule,
  //  MatCheckbox,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    //MatButton,
// MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
