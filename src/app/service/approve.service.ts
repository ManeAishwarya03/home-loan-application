import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApproveService {
  private baseUrl = 'http://localhost:8082/homeloan';
  constructor(private http: HttpClient) { }
  
  updatefvo(id: number, applicationid: number,landdocuments:string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/loan/updateFinanceDocuments/${id}/${applicationid}/${landdocuments}`, value)
  
  }
  lvoapprove(id: number, applicationid: number,landdocuments:string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/loan/updateLandDocuments/${id}/${applicationid}/${landdocuments}`, value)
  }
  adminapprove(id:number,applicationid:number,approvedamount:number,adminapprove:string,rejectdata:string,value:any):Observable<object>{
    return this.http.put(`${this.baseUrl}/loan/updateAdminApprove/${id}/${applicationid}/${approvedamount}/${adminapprove}/${rejectdata}`,value)
  }
}
