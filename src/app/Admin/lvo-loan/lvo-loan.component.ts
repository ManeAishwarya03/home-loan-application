import { Component, getModuleFactory, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loan } from 'src/app/model/loan';

import { ApproveService } from '../../service/approve.service';

@Component({
  selector: 'app-lvo-loan',
  templateUrl: './lvo-loan.component.html',
  styleUrls: ['./lvo-loan.component.css']
})
export class LvoLoanComponent implements OnInit {
  

  landdocuments:string="";
  id!:number;
  applicationid!:number;
  loan:Loan=new Loan();
  submitted = false;
  constructor(private route: ActivatedRoute,private router: Router,private approveService:ApproveService) { }
  ngOnInit() {
    this.loan=new Loan();
    this.id = this.route.snapshot.params['id'];
    this.applicationid = this.route.snapshot.params['applicationid'];
    
  }
  onSubmit() {
    this.submitted = true;
    this.updateLvo(this.landdocuments);
    this.gotoback();
}
  updateLvo(landdocuments:string){
    this.approveService.lvoapprove(this.id,this.applicationid,this.landdocuments,this.loan).subscribe(data => {
      console.log(data);
    },
    error => console.log(error));
  }
  gotoback(){
    this.router.navigate(['/lvo']);
}
  }
  
