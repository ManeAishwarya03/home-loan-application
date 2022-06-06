import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:8080/homeloan';
  constructor(private http:HttpClient) { }

getappliaction(id: number,applicationid:number,):Observable<any>{
  return this.http.get(`${this.baseUrl}/${id}/${applicationid}`);
}




updateapplication(id: number,applicationid:number, value: any): Observable<Object> {
  return this.http.put(`${this.baseUrl}/updateAdminApprove/${id}/${applicationid}`, value);
}

  

}

