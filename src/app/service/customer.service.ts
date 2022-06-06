import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8082/homeloan';

  constructor(private http: HttpClient) { }




  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add/details`, customer);
  }
  getCustomersList():Observable<any>{
    return this.http.get(`${this.baseUrl}/customers/all`)
  }
  getCustomer(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/by/id/${id}`);
  }
  updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/customer/${id}`, value);
  }
  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/customer/${id}`, { responseType: 'text' });
  }


 
  
 
}