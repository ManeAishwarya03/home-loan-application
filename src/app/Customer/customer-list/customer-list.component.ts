import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';



@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
customers!: Observable<Customer[]>

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
reloadData(){
  this.customers=this.customerService.getCustomersList()
}
customerDetails(id: number){
  this.router.navigate(['details', id]);
}
updateCustomer(id:number){
  this.router.navigate(['updatecustomer', id]);
}
deleteCustomer(id: number) {
  this.customerService.deleteCustomer(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
}
}
