import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private baseUrl = 'http://localhost:8082/homeloan';
  constructor(private http: HttpClient) { }

  getLoan(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

  applyLoan(date: Date,applyamount:number,id: number,value:any): Observable<any> {
    alert(date+" "+applyamount+" "+id)
    return this.http.post(`${this.baseUrl}/loan/Apply/${date}/${applyamount}/${id}`,value);
  
  }


  deleteLoan(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  getLoanList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/loan/allApplication`);
  }
  getapplication(id: number, applicationid: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/application/${id}/${applicationid}`);
  }
  getAllLoanList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all/loanlist`);
  }
  getapplications(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllLoansAppliedByCustomerId/${id}`);
  }


}