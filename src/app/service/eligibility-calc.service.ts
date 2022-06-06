import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EligibilityCalcService {
  [x: string]: any;
  private baseUrl = 'http://localhost:8082/homeloan';
  constructor(private http: HttpClient) { }

  getloanAmount(monthlyIncome: number,EMI: number,value:any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/eligiblity/${monthlyIncome}/${EMI}`,value);
  }
  
}





