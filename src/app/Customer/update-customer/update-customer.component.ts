import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Customer } from "src/app/model/customer";
import { CustomerService } from "src/app/service/customer.service";




@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  id:any;
  customer:Customer=new Customer();
  submitted=false;
  message:string="Sorry Somthing went Wrong";
  constructor(private route:ActivatedRoute, private router:Router,private customerService:CustomerService){

  }
  personForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("^[a-z A-Z]+$")]),
    mobileNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]+$")]),
    dob: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    emaild: new FormControl('', [Validators.required, Validators.email]),
    nationality: new FormControl('', [Validators.required]),
    aadharNumber: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern("^[0-9]+$")]),
    pan: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9 A-Z]+$")])
  })
  get name() {
    return this.personForm.get('name');
  }
  get mobileNumber() {
    return this.personForm.get('mobileNumber');
  }
  get dob() {
    return this.personForm.get('dob');
  }
  get gender() {
    return this.personForm.get('gender');
  }
  get emaild() {
    return this.personForm.get('emaild');
  }
  get aadharNumber() {
    return this.personForm.get('aadharNumber');
  }
  get pan() {
    return this.personForm.get('pan');
  }
  get nationality() {
    return this.personForm.get('pan');
  }
  ngOnInit() {
    this.customer=new Customer();
    this.id=this.getId();

    this.customerService.getCustomer(this.id).subscribe(data=>{
      console.log(data)
      this.customer=data;
    }, error=> console.log(error));
  }
  updateCustomer(){
  this.customerService.updateCustomer(this.id, this.customer).subscribe(data=>{
    if(data!=null){
    console.log(data)
    this.customer=new Customer();}
    else{
      alert(this.message);
      
    }
  }, error=> console.log(error));
  }
  onSubmit(){
    this.submitted=true;
    this.updateCustomer();
  }
  getId(){
    return sessionStorage.getItem('id');
   }
  }

  