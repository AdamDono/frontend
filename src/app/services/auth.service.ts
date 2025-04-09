import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient, private router: Router) {}

  // Sign up
  signUp(userData: { full_name: string; email: string; password: string; role: string }) {
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }

  // Sign in
  signIn(credentials: { email: string; password: string }) {
    return this.http.post<{token: string}>(`${this.apiUrl}/login`, credentials);
  }

  // Store token
  storeToken(token: string): void {
    localStorage.setItem('powerrent_token', token);
  }
}