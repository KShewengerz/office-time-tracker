import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { LoginService } from '@app/login/login.service';

import { Credential } from '@app/login/models/credential.model';

import { loginFields } from '@app/login/components/login-form/login-form.data';


@Component({
  selector    : 'app-login-form',
  templateUrl : './login-form.component.html',
  styleUrls   : ['./login-form.component.scss']
})
export class LoginFormComponent {
  
  form: FormGroup = new FormGroup({});
  fields: FormlyFieldConfig[] = loginFields;
  
  constructor(private loginService: LoginService) { }
  
  login(data: Credential) {
    console.log(data);
    // this.loginService
    //  .login(data)
    //  .subscribe(response => console.log(response));
  }

}
