import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { RegisterUser } from '../component/register/registerUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  path = environment.path
  
  register(registerUser: RegisterUser) {
    let headers = new HttpHeaders()
    headers.append("Content-Type", "application/json")
    this.http.post(this.path + '/user/register', registerUser, { headers: headers })
  }
}
