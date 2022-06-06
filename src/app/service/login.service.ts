import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
 
  private baseUrl = 'http://localhost:8082/homeloan';

  constructor(private http: HttpClient) { }

  login(login: Object):Observable<any>{
    return this.http.post(`${this.baseUrl}/login`, login);
    
  }
 alogin(login: Object):Observable<any>{
    return this.http.post(`${this.baseUrl}/log`, login,{ responseType: 'text' })
    
  }


  signup(login: Object):Observable<any>{
    return this.http.post(`${this.baseUrl}/login/register`, login);
  }
} 