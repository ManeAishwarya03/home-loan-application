import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from '../model/loan';
import { LoanService } from '../service/loan.service';


@Component({
  selector: 'app-createloan',
  templateUrl: './createloan.component.html',
  styleUrls: ['./createloan.component.css']
})
export class CreateloanComponent implements OnInit {

  loan: Loan = new Loan();
  submitted = false;
  date!: Date;
  applyamount:number=0;
  id:any;
 
  constructor(private loanService: LoanService,  private router: Router) { 

  
      
  }
  ngOnInit() {
    
    this.loan = new Loan();
    this.id=this.getId();

  }

  onSubmit() {
    this.submitted = true;
    this.save(this.date,this.applyamount);    
  }
  
  save(date:Date,applyamount:number){
  alert(this.date+" "+this.applyamount+" "+this.id)
    this.loanService.applyLoan(this.date,this.applyamount,this.id,this.loan).subscribe(data => {
      console.log(data);
    },
    error => console.log(error));
  }
    getId(){
      return sessionStorage.getItem('id');
     }
  }

