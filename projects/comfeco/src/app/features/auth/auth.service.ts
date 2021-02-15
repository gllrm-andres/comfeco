import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'projects/comfeco/src/environments/environment';
import { AuthLoginResponse } from './interfaces/auth-login-response';
import { Observable } from 'rxjs';
import { AuthLogin } from './interfaces/auth-login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: AuthLogin): Observable<AuthLoginResponse> {
    const url = `${environment.API_URL}/auth/login`;
    return this.http.post<AuthLoginResponse>(url, credentials);
  }
}
