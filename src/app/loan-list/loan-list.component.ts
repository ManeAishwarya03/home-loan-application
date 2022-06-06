import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { Loan } from '../model/loan';

import { LoanService } from '../service/loan.service';


@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {
  loans!:Observable<Loan[]>

  constructor(private loanService: LoanService, private router: Router ) { }

  ngOnInit() {
    this.reloadData();
  }
reloadData(){
  this.loans=this.loanService.getAllLoanList();
}
customerDetails(id: number){
  this.router.navigate(['details', id]);
}
tracker(applicationid:number ,id:number){
  this.router.navigate(['tracker',id,applicationid]);
}

}