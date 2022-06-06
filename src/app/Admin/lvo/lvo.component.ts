import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Loan } from "src/app/model/loan";
import { LoanService } from "src/app/service/loan.service";



@Component({
  selector: 'app-lvo',
  templateUrl: './lvo.component.html',
  styleUrls: ['./lvo.component.css']
})
export class LvoComponent implements OnInit {
  name:string="Land Verification Officer Portal"
  loans!:Observable<Loan[]>
  constructor(private loanService: LoanService, private router: Router ) { }

  ngOnInit() {
    this.reloadData();
  }
reloadData(){
  this.loans=this.loanService.getAllLoanList();
}
updateLvo(id: number, applicationid:number){
  this.router.navigate(['lvoapprove', id,applicationid]);
}
loanDetails(applicatipnid: number){
  this.router.navigate(['viewdetails', applicatipnid]);
}

}