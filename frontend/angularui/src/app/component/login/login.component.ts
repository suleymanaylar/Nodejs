import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { log } from 'util';
import { LoginUser } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }
loginUser:any={}
  ngOnInit() {
  }
  login(loginUser){
    this.authService.login(loginUser)
  }
}
