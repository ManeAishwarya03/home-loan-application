import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../model/login';

import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

  login: Login = new Login();
  submitted = false;
  errBlock = false;
  errorText: any;
  admin: string = "Admin";
  lvo: string = "LVO";
  fvo: string = "FVO"
  constructor(private loginService: LoginService, private router: Router) { }

  loginForm = new FormGroup({
    
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    
  })
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }
  ngOnInit() {
  }
  newCustomer(): void {
    this.submitted = false;
    this.login = new Login();
  }
  save() {
    this.loginService.alogin(this.login).subscribe(data => {
      console.log(data);
      this.login = new Login();
      if (data == this.admin) {
        this.gotoadmin();
      } if (data == this.lvo) {
        this.gotolvo();
      } if (data == this.fvo) {
        this.gotofvo();
      } 
    },
      error => {
        this.errBlock = true;
        this.errorText = error.message;
        alert(this.errorText);
      }
    );

  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
  gotoadmin() {
    this.router.navigate(['/adminpage']);
  }
  gotolvo() {
    this.router.navigate(['/lvo']);
  }
  gotofvo() {
    this.router.navigate(['/fvo']);

  }

}