import { Component, OnInit } from '@angular/core';

import { LoginService } from '@app/login/login.service';

import { Credential } from '@app/login/models/credential.model';


@Component({
  selector    : 'app-login-form',
  templateUrl : './login-form.component.html',
  styleUrls   : ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  
  constructor(private loginService: LoginService) { }

  ngOnInit() {}
  
  login(data?: Credential) {
    this.loginService
      .login(data)
      .subscribe(response => console.log(response));
  }

}
