import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../model/login';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Login=new Login();
  submitted = false;
  errBlock= false;
  errorText: any;
  id:any;
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
    this.loginService.login(this.login).subscribe(data => {
      
      console.log(data);
      this.id=data;
      this.login = new Login();
      if(data!=null){
        this.store()
        this.gotoCustomerPage();
      }else{
        this.gotoCreate();
      }
    },
       error => {
         this.errBlock=true;
         this.errorText=error.message;
         alert(this.errorText);
       }
    );
       
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
  gotoCreate() {
    this.router.navigate(['../register' ]);
  }
  gotoCustomerPage(){
  this.router.navigate(['/customerpage']);
}
store(){
  sessionStorage.setItem('id',this.id)
}
}
