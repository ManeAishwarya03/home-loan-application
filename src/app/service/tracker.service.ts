import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  private baseUrl = 'http://localhost:8082/homeloan';

  constructor(private http: HttpClient) { }
  
  getTracker(id:number, applicationid:number):Observable<any> {
    return this.http.get(`${this.baseUrl}/tracker/${id}/${applicationid}`);
}
tracker(applicationid:number):Observable<any> {
  return this.http.get(`${this.baseUrl}/loan/loanTracker/${applicationid}`);
}
}