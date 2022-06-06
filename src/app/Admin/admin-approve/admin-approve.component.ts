import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Loan } from 'src/app/model/loan';
import { LoanService } from 'src/app/service/loan.service';



@Component({
  selector: 'app-admin-approve',
  templateUrl: './admin-approve.component.html',
  styleUrls: ['./admin-approve.component.css']
})
export class AdminApproveComponent implements OnInit {

  name:string="Applications List Portal"
  loans!:Observable<Loan[]>
  constructor(private loanService: LoanService, private router: Router ) { }

  ngOnInit() {
    this.reloadData();
  }
reloadData(){
  this.loans=this.loanService.getAllLoanList();
}
updateloan(id: number, applicationid:number){
  this.router.navigate(['adminapprove', id,applicationid]);
}
customerDetails(id: number){
  this.router.navigate(['viewdetails', id]);
}

}