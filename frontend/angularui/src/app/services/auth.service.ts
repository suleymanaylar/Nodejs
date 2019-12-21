import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { RegisterUser } from '../component/register/registerUser';
import { Observable } from 'rxjs';
import { LoginUser } from '../component/login/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  path = environment.path
  TOKEN_KEY = "token"
  register(registerUser: RegisterUser) {
    let headers = new HttpHeaders()
    headers.append("Content-Type", "application/json")
    this.http.post(this.path + '/user/register', registerUser, { headers: headers }).subscribe()
  }

  login(loginUser: LoginUser) {
    let headers = new HttpHeaders()
    headers.append("Content-Type", "application/json")
    this.http.post(this.path + '/user/login', loginUser, { headers: headers }).subscribe(data => {
      this.saveToken(data['token'])
    })
  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token)
  }
  logOut() {
    localStorage.removeItem(this.TOKEN_KEY)
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY)
  }
  get token() {
    return localStorage.getItem(this.TOKEN_KEY)
  }
}
