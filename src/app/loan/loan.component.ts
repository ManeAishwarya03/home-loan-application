import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loan } from '../model/loan';
import { ApproveService } from '../service/approve.service';
import { LoanService } from '../service/loan.service';


@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  id:number=0;
  applicationid:number=0;
  loan: Loan=new Loan();
  submitted = false;
  finance:string="";

  constructor(private route: ActivatedRoute, private loanService: LoanService, private router:Router,private approveService:ApproveService)  { }

  ngOnInit() {
    this.loan=new Loan();
    this.id = this.route.snapshot.params['id'];
    this.applicationid = this.route.snapshot.params['applicationid'];
  
  }
  onSubmit() {
    this.submitted = true;
    this.updatefvo(this.finance);
        this.gotoback();   
    }
updatefvo(finance:string) {
this.approveService.updatefvo(this.id,this.applicationid,this.finance, this.loan)
  .subscribe(data => {
    console.log(data);
    this.loan = new Loan();
  
  }, error => console.log(error));

}



gotoback(){
  this.router.navigate(['/fvo']);
}
}