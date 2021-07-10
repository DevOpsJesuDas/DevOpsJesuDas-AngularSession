import { Injectable } from '@angular/core';
import { Register } from '../models/register';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const headerData = { headers: { 'Content-Type': 'application/json' } };

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  registerUser(data: Register): Observable<any> {
    return this.httpClient.post('api/users/register', data, headerData);
  }

  loginUser(data: Register): Observable<any> {
    return this.httpClient.post('api/users/login', data, headerData);
  }
}
