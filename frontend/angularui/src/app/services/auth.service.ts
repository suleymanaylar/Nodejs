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

  register(registerUser: RegisterUser) {
    let headers = new HttpHeaders()
    headers.append("Content-Type", "application/json")
    this.http.post(this.path + '/user/register', registerUser, { headers: headers }).subscribe()
  }
  
  login(loginUser: LoginUser) {
    let headers = new HttpHeaders()
    headers.append("Content-Type", "application/json")
    this.http.post(this.path + '/user/login', loginUser, { headers: headers }).subscribe(data=>{
      alert(data)
    })
  }
}
