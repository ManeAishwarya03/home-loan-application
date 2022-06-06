import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmiService {
  private baseUrl = 'http://localhost:8082/homeloan';
  constructor(private http:HttpClient) { }

  getEmi(loanAmount: number,rateOfInterest: number, timePeriod : number,value:any): Observable<Object> {
    return this.http.get(`${this.baseUrl}/emi/update/${loanAmount}/${rateOfInterest}/${timePeriod}`,value);
  }
}
