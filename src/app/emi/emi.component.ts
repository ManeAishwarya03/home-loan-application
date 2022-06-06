import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emi } from '../model/emi';
import { EmiService } from '../service/emi.service';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent implements OnInit {

  loanAmount : number = 0;
  rateOfInterest : number = 0;
  timePeriod : number = 0;
  emi : Emi = new Emi();
  submitted = false;
  emiAmount: any;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private emiService: EmiService) { }

  ngOnInit(): void {
    this.emi = new Emi();
  }

  onSubmit() {
    this.submitted = true;
    this.getEmi(this.loanAmount,this.rateOfInterest,this.timePeriod);    
  }

  getEmi(loanAmount:number, rateOfInterest : number, timePeriod:number){
    this.emiService.getEmi(this.loanAmount,this.rateOfInterest,this.timePeriod,this.emi).subscribe(data => {
      console.log(data);
      this.emiAmount =data;
      this.emi= new Emi();
    },
    error => console.log(error));

  }

}
