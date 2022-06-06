import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../model/login';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  login:Login=new Login();
  submitted = false;
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
    this.loginService.signup(this.login).subscribe(data => {
      console.log(data);
      this.login = new Login();
      
    },
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
