import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loan } from 'src/app/model/loan';
import { ApproveService } from 'src/app/service/approve.service';

@Component({
  selector: 'app-admin-loan',
  templateUrl: './admin-loan.component.html',
  styleUrls: ['./admin-loan.component.css']
})
export class AdminLoanComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,private approveService:ApproveService) { }
  approvedamount:number=0
  adminapprove:string="";
  rejectdata:string="";
  id!:number;
  applicationid!:number;
  loan:Loan=new Loan();
  submitted = false;
  ngOnInit() {
    this.loan=new Loan();
    this.id = this.route.snapshot.params['id'];
    this.applicationid = this.route.snapshot.params['applicationid'];
    
  }
  onSubmit() {
    this.submitted = true;
    this.updateadmin(this.approvedamount,this.adminapprove,this.rejectdata);
    this.gotoback();
}
  updateadmin( approvedamount:number,adminapprove:string,rejectdata:string){
    alert(this.id+" "+this.adminapprove)
    this.approveService.adminapprove(this.id,this.applicationid,this.approvedamount,this.adminapprove ,this.rejectdata, this.loan).subscribe(data => {
      console.log(data);
    },
    error => console.log(error));
  }
  gotoback(){
    this.router.navigate(['/adminapprove']);
}
  }