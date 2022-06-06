import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';



@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
    id: any = 0 ;
    customer: Customer = new Customer();

constructor(private route: ActivatedRoute,private router: Router,
  private customerService: CustomerService) { }

ngOnInit() {

  this.customer = new Customer();
  

  this.id=this.getId();
  this.customerService.getCustomer(this.id)
    .subscribe(data => {
      console.log(data)
      this.customer = data;
    }, error => console.log(error));
}

getId(){
 return sessionStorage.getItem('id');
}

}

