import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:5123/api/auth';
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {}

  register(user: any) {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(credentials: any) {
    debugger
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    //return token && !this.jwtHelper.isTokenExpired(token);
    return true
  }
}
