import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { LvoComponent } from './Admin/lvo/lvo.component';


import { LoanComponent } from './loan/loan.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';

import { LoanListComponent } from './loan-list/loan-list.component';

import { AdminApproveComponent } from './Admin/admin-approve/admin-approve.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TrackerComponent } from './tracker/tracker.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CreateCustomerComponent } from './Customer/create-customer/create-customer.component';
import { CustomerListComponent } from './Customer/customer-list/customer-list.component';
import { CustomerPageComponent } from './Customer/customer-page/customer-page.component';
import { UpdateCustomerComponent } from './Customer/update-customer/update-customer.component';
import { CustomerDetailsComponent } from './Customer/customer-details/customer-details.component';
import { FvoComponent } from './Admin/fvo/fvo.component';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';

import { TrackApplicationComponent } from './track-application/track-application.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EligibilityCalculatorComponent } from './eligibility-calculator/eligibility-calculator.component';
import { CustomerSidebarComponent } from './customer-sidebar/customer-sidebar.component';
import { CreateloanComponent } from './createloan/createloan.component';
import { LvoLoanComponent } from './Admin/lvo-loan/lvo-loan.component';
import { AdminLoanComponent } from './Admin/admin-loan/admin-loan.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { ViewCustomerComponent } from './Customer/view-customer/view-customer.component';
import { HomeSidebarComponent } from './home-sidebar/home-sidebar.component';
import { EmiComponent } from './emi/emi.component';






@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustomerListComponent,
    LoginComponent,
    LvoComponent,
    FvoComponent,
    CustomerDetailsComponent,
    LoanComponent,
    LoandetailsComponent,
    UpdateCustomerComponent,
    LoanListComponent,
    CustomerPageComponent,

    AdminApproveComponent,
    SignUpComponent,
    TrackerComponent,
    

    EligibilityCalculatorComponent,
    TrackApplicationComponent,
    HomePageComponent,
    CustomerSidebarComponent,
    CreateloanComponent,
    LvoLoanComponent,
    AdminLoanComponent,
    AuthLoginComponent,
    ViewCustomerComponent,
    HomeSidebarComponent,
    EmiComponent,
  


  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

    MDBBootstrapModule.forRoot(),
   
    NavbarModule, WavesModule, ButtonsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
