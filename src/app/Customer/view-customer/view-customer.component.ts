import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  id: any = 0 ;
  customer: Customer = new Customer();

constructor(private route: ActivatedRoute,private router: Router,
private customerService: CustomerService) { }

ngOnInit() {

this.customer = new Customer();

this.id = this.route.snapshot.params['id'];


this.customerService.getCustomer(this.id)
  .subscribe(data => {
    console.log(data)
    this.customer = data;
  }, error => console.log(error));
  

}

}


