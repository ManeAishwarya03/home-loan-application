import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer-sidebar',
  templateUrl: './customer-sidebar.component.html',
  styleUrls: ['./customer-sidebar.component.css']
})
export class CustomerSidebarComponent  {

  id: any;


  constructor(private router: Router, private customerService: CustomerService) { }

  removeItem() {
    sessionStorage.removeItem('id');
    this.router.navigate([''])
  }


  deleteCustomer() {
    this.id = this.getId();
    this.customerService.deleteCustomer(this.id)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));

  }

  getId() {
    return sessionStorage.getItem('id');
  }
}