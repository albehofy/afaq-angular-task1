// login.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.token}`,
      'accept': '*/*',
      'Content-Type': 'application/json'
    });
    return this.http.post<any>('https://fronttest.wabcgroup.com/api/Auth/login', { email, password });
  }
}
