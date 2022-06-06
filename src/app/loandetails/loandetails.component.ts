import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Loan } from '../model/loan';
import { LoanService } from '../service/loan.service';

@Component({
  selector: 'app-loandetails',
  templateUrl: './loandetails.component.html',
  styleUrls: ['./loandetails.component.css']
})
export class LoandetailsComponent implements OnInit {
  loans!:Observable<Loan[]>
  applicationid: number = 0;
  loan: Loan = new Loan();
  id:any=0;
 
  constructor(private route: ActivatedRoute, private router: Router, private loanService: LoanService) { }

  ngOnInit() {
  
   this.id=this.getId();

    this.loanService.getapplications( this.id).subscribe(data => {
        console.log(data);
        
        this.loans = data;
   
      }, error => console.log(error));
  }

  
  track( id: number,applicationid:number){
    this.router.navigate(['status',id,applicationid]);
}
getId(){
  return sessionStorage.getItem('id');
}
}