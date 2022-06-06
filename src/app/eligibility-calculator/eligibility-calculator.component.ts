import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EligibilityCalculator } from '../model/eligibilitycal';


import { EligibilityCalcService } from '../service/eligibility-calc.service';

@Component({
  selector: 'app-eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.css']
})
export class EligibilityCalculatorComponent implements OnInit {
  monthlyIncome: number=0;
  EMI: number=0;
  loanAmount: any;
  eligibilitycalculator: EligibilityCalculator = new EligibilityCalculator();
  submitted = false;


  constructor(  private router: Router,private route:ActivatedRoute,private eligibilitycalcservice: EligibilityCalcService) { }



  ngOnInit()  {
    this.eligibilitycalculator=new EligibilityCalculator();
} 
  onSubmit() {
    this.submitted = true;
    this.getloanAmount(this.monthlyIncome,this.EMI);    
  }
  getloanAmount(monthlyIncome:number, EMI:number){
    this.eligibilitycalcservice.getloanAmount(this.monthlyIncome,this.EMI,this.eligibilitycalculator).subscribe(data => {
      console.log(data);
      this.loanAmount=data;
      this.eligibilitycalculator= new EligibilityCalculator();
    },
    error => console.log(error));

  }
}
