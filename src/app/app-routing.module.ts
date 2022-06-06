import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminApproveComponent } from './Admin/admin-approve/admin-approve.component';
import { AdminPageComponent } from './Admin/admin-page/admin-page.component';
import { UpdateCustomerComponent } from './Customer/update-customer/update-customer.component';
import { CreateCustomerComponent } from './Customer/create-customer/create-customer.component';
import { CustomerListComponent } from './Customer/customer-list/customer-list.component';
import { CustomerPageComponent } from './Customer/customer-page/customer-page.component';
import { FvoComponent } from './Admin/fvo/fvo.component';
import { LvoComponent } from './Admin/lvo/lvo.component';
import { CustomerDetailsComponent } from './Customer/customer-details/customer-details.component';

import { LoanListComponent } from './loan-list/loan-list.component';
import { LoanComponent } from './loan/loan.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { HomePageComponent } from './home-page/home-page.component';
import { EligibilityCalculatorComponent } from './eligibility-calculator/eligibility-calculator.component';
import { TrackApplicationComponent } from './track-application/track-application.component';
import { TrackerComponent } from './tracker/tracker.component';
import { CreateloanComponent } from './createloan/createloan.component';
import { LvoLoanComponent } from './Admin/lvo-loan/lvo-loan.component';
import { AdminLoanComponent } from './Admin/admin-loan/admin-loan.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { ViewCustomerComponent } from './Customer/view-customer/view-customer.component';
import { EmiComponent } from './emi/emi.component';



const routes: Routes = [
 
  //Customer
  { path: 'customerpage', component: CustomerPageComponent },
  { path: 'register', component: CreateCustomerComponent },
  { path: 'customers' ,component: CustomerListComponent },
  { path: 'updatecustomer', component: UpdateCustomerComponent },
  { path: 'details', component: CustomerDetailsComponent },
  { path: 'viewdetails/:id', component: ViewCustomerComponent },


  

 
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },

  { path: 'lvo', component: LvoComponent },
  { path: 'fvo', component: FvoComponent },

  { path: 'loanlist', component: LoanListComponent },
  { path: 'loan', component: LoandetailsComponent },
  
  { path: 'update/:id/:applicationid', component: LoanComponent },

  { path: 'tracker/:applicationid/:id', component:TrackerComponent  },

  { path: 'trackapplication', component:TrackApplicationComponent },

  { path: 'eligibility', component: EligibilityCalculatorComponent },

//main
  { path: 'adminapprove/:id/:applicationid', component: AdminLoanComponent },
  { path: 'adminpage', component: AdminPageComponent },
  {path: 'adminapprove',component:AdminApproveComponent},

  { path: 'homepage', component: HomePageComponent },

  { path: 'applyloan', component: CreateloanComponent },
  { path: 'lvoapprove/:id/:applicationid', component: LvoLoanComponent },
  
  { path: 'authlogin', component: AuthLoginComponent },

  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  
  { path: 'emi', component: EmiComponent },







]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
