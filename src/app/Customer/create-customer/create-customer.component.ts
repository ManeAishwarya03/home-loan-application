import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxValidator, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';




@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer = new Customer();
  submitted = false;


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

  constructor(private customerService: CustomerService, private router: Router,) {

  }

  ngOnInit() {
  }
  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }
  save() {
    this.customerService.createCustomer(this.customer)
      .subscribe(data => {
        console.log(data);
        this.customer = new Customer();
      },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    alert(this.customer)
    this.save();
  }
  gotList() {
    this.router.navigate(['/customers'])
  }
}
