import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Loan } from 'src/app/model/loan';
import { LoanService } from 'src/app/service/loan.service';


@Component({
  selector: 'app-fvo',
  templateUrl: './fvo.component.html',
  styleUrls: ['./fvo.component.css']
})
export class FvoComponent implements OnInit {
  name:string="Finance Verification Officer Portal"
  loans!:Observable<Loan[]>
  constructor(private loanService: LoanService, private router: Router ) { }

  ngOnInit() {
    this.reloadData();
  }
reloadData(){
  this.loans=this.loanService.getAllLoanList();
}
updateLoan(id: number, applicationid:number){
  this.router.navigate(['update', id, applicationid]);
}
customerDetails(id: number){
  this.router.navigate(['viewdetails', id]);
}

}